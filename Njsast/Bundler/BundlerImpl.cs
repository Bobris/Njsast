using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Njsast.Ast;
using Njsast.Compress;
using Njsast.Output;
using Njsast.Reader;
using Njsast.Scope;
using Njsast.SourceMap;

namespace Njsast.Bundler;

public interface IBundlerCtx
{
    (string?, SourceMap.SourceMap?) ReadContent(string fileName);
    IEnumerable<string> GetPlainJsDependencies(string fileName);
    string GenerateBundleName(string forName);

    /// Special result for ResolveRequire if imports should stay unbundled
    const string LeaveAsExternal = "*External*";

    string ResolveRequire(string name, string from);
    string JsHeaders(string forSplit, bool withImport);
    void WriteBundle(string name, string content);
    void WriteBundle(string name, SourceMapBuilder content);
    void ReportTime(string name, TimeSpan duration);
    void ModifyBundle(string name, AstToplevel topLevelAst);
}

public class BundlerImpl
{
    public BundlerImpl(IBundlerCtx ctx)
    {
        _ctx = ctx;
        PartToMainFilesMap = new Dictionary<string, IReadOnlyList<string>>();
        MangleWithFrequencyCounting = true;
        GlobalDefines = new Dictionary<string, object>();
    }

    public IReadOnlyDictionary<string, IReadOnlyList<string>> PartToMainFilesMap;
    public ICompressOptions? CompressOptions;
    public bool LibraryMode { get; set; }
    public bool Mangle;
    public bool MangleWithFrequencyCounting;
    public bool GenerateSourceMap;
    public OutputOptions? OutputOptions;
    public IReadOnlyDictionary<string, object> GlobalDefines;
    readonly IBundlerCtx _ctx;

    StructList<SourceFile> _order;
    readonly Dictionary<string, SourceFile> _cache = new();
    readonly Dictionary<string, SplitInfo> _splitMap = new();
    SourceFile? _currentSourceFile;
    string? _currentFileIdent;

    public void Run()
    {
        var stopwatch = Stopwatch.StartNew();
        foreach (var (splitName, mainFileList) in PartToMainFilesMap)
        {
            StructList<SourceFile> mainFiles = new();
            foreach (var mainFile in mainFileList)
            {
                if (_cache.TryGetValue(mainFile, out var sourceFile))
                {
                    mainFiles.AddUnique(sourceFile);
                    MarkRequiredAs(sourceFile, splitName);
                    continue;
                }

                Check(mainFile, splitName);
                _cache.TryGetValue(mainFile, out sourceFile);
                mainFiles.AddUnique(sourceFile!);
            }

            _splitMap[splitName] = new(splitName)
            {
                ShortName = _ctx.GenerateBundleName(splitName),
                PropName = "ERROR",
                IsMainSplit = true,
                MainFiles = mainFiles
            };
        }

        stopwatch.Stop();
        _ctx.ReportTime("Parse", stopwatch.Elapsed);
        foreach (var (_, sourceFile) in _cache)
        {
            foreach (var fileAndPath in sourceFile.NeedsImports)
            {
                if (_cache.TryGetValue(fileAndPath.File, out var targetFile))
                    targetFile.CreateWholeExport(fileAndPath.Path);
            }
        }

        var lazySplitCounter = 0;
        foreach (var f in _order)
        {
            var fullBundleName = f.PartOfBundle!;
            if (!_splitMap.TryGetValue(fullBundleName, out var split))
            {
                var shortenedBundleName = _ctx.GenerateBundleName(fullBundleName);
                split = new SplitInfo(fullBundleName)
                {
                    ShortName = shortenedBundleName,
                    PropName = BundlerHelpers.NumberToIdent(lazySplitCounter++)
                };
                _splitMap[fullBundleName] = split;
            }

            foreach (var dependency in f.PlainJsDependencies)
            {
                split.PlainJsDependencies.Add(dependency);
            }
        }

        if (lazySplitCounter > 0)
        {
            DetectBundleExportsImports(ref lazySplitCounter);
        }

        foreach (var (splitName, splitInfo) in _splitMap)
        {
            var topLevelAst = Parser.Parse(_ctx.JsHeaders(splitName, lazySplitCounter > 0));
            if (GlobalDefines is { Count: > 0 })
                topLevelAst.Body.Add(Helpers.EmitVarDefines(GlobalDefines));
            topLevelAst.FigureOutScope();
            var knownDeclaredGlobals = topLevelAst.Variables!.Keys.ToHashSet();

            foreach (var sourceFile in _order)
            {
                if (sourceFile.PartOfBundle != splitName) continue;
                foreach (var keyValuePair in sourceFile.Ast!.Globals!)
                {
                    topLevelAst.Globals!.TryAdd(keyValuePair.Key, keyValuePair.Value);
                    topLevelAst.NonRootSymbolNames?.Add(keyValuePair.Key);
                }
            }

            AddExternallyImportedFromOtherBundles(topLevelAst, splitInfo);
            foreach (var sourceFile in _order)
            {
                if (sourceFile.PartOfBundle != splitName) continue;
                _currentSourceFile = sourceFile;
                _currentFileIdent = BundlerHelpers.FileNameToIdent(sourceFile.Name);
                BundlerHelpers.AppendToplevelWithRename(topLevelAst, sourceFile.Ast!, _currentFileIdent,
                    knownDeclaredGlobals, BeforeAdd);
            }

            if (LibraryMode)
            {
                ResolveLibraryExports(splitInfo, topLevelAst);
            }

            AddExternalImports(topLevelAst, splitInfo);
            IfNeededPolyfillGlobal(topLevelAst, (OutputOptions?.Ecma ?? 6) >= 10);

            if (LibraryMode)
            {
                AddLibraryExports(splitInfo, topLevelAst);
            }
            else
            {
                AddExportsFromLazyBundle(splitInfo, topLevelAst);
                BundlerHelpers.WrapByIIFE(topLevelAst, (OutputOptions?.Ecma ?? 6) >= 6);
            }

            var backupBody = topLevelAst.Body;
            topLevelAst.Body = new();
            foreach (var jsDependency in splitInfo.PlainJsDependencies)
            {
                var content = _ctx.ReadContent(jsDependency);
                var jsAst = Parser.Parse(content.Item1!);
                content.Item2?.ResolveInAst(jsAst);
                jsAst.FigureOutScope();
                //BundlerHelpers.SimplifyJavaScriptDependency(jsAst);
                topLevelAst.Body.AddRange(jsAst.Body);
            }

            topLevelAst.Body.AddRange(backupBody);

            if (lazySplitCounter > 0 && PartToMainFilesMap.ContainsKey(splitName))
            {
                var astVar = new AstVar(topLevelAst);
                astVar.Definitions.Add(new(new AstSymbolVar("__bbb"), new AstObject()));
                topLevelAst.Body.Insert(0) = astVar;
            }

            if (CompressOptions != null)
            {
                stopwatch = Stopwatch.StartNew();
                topLevelAst.FigureOutScope();
                topLevelAst = topLevelAst.Compress(CompressOptions, new ScopeOptions
                {
                    TopLevel = LibraryMode,
                    BeforeMangling = LibraryMode ? IgnoreEvalInToplevelScope : IgnoreEvalInTwoScopes
                });
                stopwatch.Stop();
                _ctx.ReportTime("Compress", stopwatch.Elapsed);
            }

            if (Mangle)
            {
                stopwatch = Stopwatch.StartNew();
                topLevelAst.Mangle(new ScopeOptions
                {
                    FrequencyCounting = MangleWithFrequencyCounting,
                    TopLevel = LibraryMode,
                    BeforeMangling = LibraryMode ? IgnoreEvalInToplevelScope : IgnoreEvalInTwoScopes
                }, OutputOptions);
                stopwatch.Stop();
                _ctx.ReportTime("Mangle", stopwatch.Elapsed);
            }

            _ctx.ModifyBundle(splitInfo.ShortName!, topLevelAst);

            if (GenerateSourceMap)
            {
                stopwatch = Stopwatch.StartNew();
                var builder = new SourceMapBuilder();
                topLevelAst.PrintToBuilder(builder, OutputOptions);
                stopwatch.Stop();
                _ctx.ReportTime("Print", stopwatch.Elapsed);
                _ctx.WriteBundle(splitInfo.ShortName!, builder);
            }
            else
            {
                stopwatch = Stopwatch.StartNew();
                var content = topLevelAst.PrintToString(OutputOptions);
                stopwatch.Stop();
                _ctx.ReportTime("Print", stopwatch.Elapsed);
                _ctx.WriteBundle(splitInfo.ShortName!, content);
            }
        }
    }

    /// If there is global variable named `global`, then define it as `window`, because we are bundling for browser
    static void IfNeededPolyfillGlobal(AstToplevel topLevelAst, bool useModernJS)
    {
        if (topLevelAst.Globals!.ContainsKey("global"))
        {
            var astVar = new AstVar(topLevelAst);
            astVar.Definitions.Add(new AstVarDef(new AstSymbolVar("global"),
                new AstSymbolRef(useModernJS ? "globalThis" : "window")));
            topLevelAst.Body.Insert(0) = astVar;
        }
    }

    void DetectBundleExportsImports(ref int lazySplitCounter)
    {
        foreach (var f in _order)
        {
            var sourceSplit = _splitMap[f.PartOfBundle!];
            foreach (var lazyRequire in f.LazyRequires)
            {
                var targetFile = _cache[lazyRequire];
                targetFile.CreateWholeExport(Array.Empty<string>());
                var targetSplit = _splitMap[targetFile.PartOfBundle!];
                if (targetSplit.ExportsAllUsedFromLazyBundles.ContainsKey(lazyRequire)) continue;
                if (targetSplit.FullName == lazyRequire)
                {
                    targetSplit.ExportsAllUsedFromLazyBundles[lazyRequire] = targetSplit.PropName!;
                }
                else if (PartToMainFilesMap.ContainsKey(targetSplit.FullName))
                {
                    targetSplit.ExportsAllUsedFromLazyBundles[lazyRequire] =
                        BundlerHelpers.NumberToIdent(lazySplitCounter++);
                }
            }

            foreach (var require in f.Requires)
            {
                var targetSplit = _splitMap[_cache[require].PartOfBundle!];
                if (targetSplit != sourceSplit && !PartToMainFilesMap.ContainsKey(targetSplit.FullName))
                {
                    sourceSplit.DirectSplitsForcedLazy.Add(targetSplit);
                }
            }

            foreach (var ni in f.NeedsImports)
            {
                var fromName = ni.File;
                var exportName = ni.Path;
                var fromFile = _cache[fromName];
                var fromSplit = _splitMap[fromFile.PartOfBundle!];
                if (sourceSplit == fromSplit)
                    continue;
                if (!fromFile.Exports!.TryFindLongestPrefix(exportName, out var prefixLen, out var astNode))
                {
                    throw new NotSupportedException("Cannot find " + string.Join('.', exportName) + " in " +
                                                    fromFile.Name + " used in " + f.Name);
                }

                if (!sourceSplit.ImportsFromOtherBundles.ContainsKey(astNode!))
                {
                    sourceSplit.ImportsFromOtherBundles[astNode!] =
                        new(fromSplit, fromFile, exportName.AsSpan()[..prefixLen].ToArray());
                }

                if (!fromSplit.ExportsUsedFromLazyBundles.ContainsKey(astNode!))
                {
                    fromSplit.ExportsUsedFromLazyBundles[astNode!] =
                        BundlerHelpers.NumberToIdent(lazySplitCounter++);
                }
            }
        }

        foreach (var (_, split) in _splitMap)
        {
            if (PartToMainFilesMap.ContainsKey(split.FullName)) continue;
            ExpandDirectSplitsForcedLazy(split, split, new HashSet<SplitInfo> { split });
        }
    }

    static void ExpandDirectSplitsForcedLazy(SplitInfo split, SplitInfo rootSplit, ISet<SplitInfo> visited)
    {
        foreach (var targetSplit in split.DirectSplitsForcedLazy)
        {
            if (!visited.Add(targetSplit)) continue;
            ExpandDirectSplitsForcedLazy(targetSplit, rootSplit, visited);
        }

        if (split != rootSplit) rootSplit.ExpandedSplitsForcedLazy.Add(split);
    }

    void AddExportsFromLazyBundle(SplitInfo splitInfo, AstToplevel topLevelAst)
    {
        var exportAllUsed = false;
        foreach (var (fromSourceName, propName) in splitInfo.ExportsAllUsedFromLazyBundles)
        {
            if (propName == splitInfo.PropName)
            {
                exportAllUsed = true;
            }

            var fromSourceFile = _cache[fromSourceName];
            topLevelAst.Body.Add(new AstSimpleStatement(
                new AstAssign(new AstDot(new AstSymbolRef("__bbb"), propName),
                    fromSourceFile.Exports![Array.Empty<string>()])));
        }

        foreach (var (node, propName) in splitInfo.ExportsUsedFromLazyBundles)
        {
            if (propName == splitInfo.PropName)
            {
                exportAllUsed = true;
            }

            topLevelAst.Body.Add(new AstSimpleStatement(
                new AstAssign(new AstDot(new AstSymbolRef("__bbb"), propName), node)));
        }

        if (!exportAllUsed && !splitInfo.IsMainSplit)
        {
            // Bundle export all is used for successfully import from lazy bundle so we need to at least set it to undefined
            topLevelAst.Body.Add(new AstSimpleStatement(
                new AstAssign(new AstDot(new AstSymbolRef("__bbb"), splitInfo.PropName!), AstUndefined.Instance)));
        }
    }

    static void ResolveLibraryExports(SplitInfo splitInfo, AstToplevel topLevelAst)
    {
        foreach (var file in splitInfo.MainFiles)
        {
            if (file.Exports == null) continue;
            foreach (var (key, value) in file.Exports)
            {
                if (value is not AstSymbolExternalImport externalImport) continue;
                ref var symbol =
                    ref splitInfo.ImportFromExternals[
                        Concat(externalImport.ImportFile, externalImport.ImportSymbolPath)];
                var varName = externalImport.ImportSymbolPath[^1];
                if (varName == "default" && externalImport.ImportSymbolPath.Length == 1)
                    varName = BundlerHelpers.FileNameToIdent(externalImport.ImportFile);
                var name = BundlerHelpers.MakeUniqueName(varName, topLevelAst.Variables!,
                    topLevelAst.NonRootSymbolNames!,
                    splitInfo.ShortName);
                symbol = new(topLevelAst, name);
                file.Exports[key] = symbol;
            }
        }
    }

    static void AddLibraryExports(SplitInfo splitInfo, AstToplevel topLevelAst)
    {
        StructList<AstNameMapping> exportMappings = new();
        foreach (var file in splitInfo.MainFiles)
        {
            if (file.Exports != null)
            {
                foreach (var (key, value) in file.Exports)
                {
                    if (key.Count <= 1) continue;
                    file.CreateWholeExport(new[] { key[0] }, topLevelAst);
                }

                foreach (var (key, value) in file.Exports)
                {
                    if (key.Count != 1) continue;
                    if (value is AstSymbol symbolRef)
                    {
                        exportMappings.Add(new(null, new(), new(),
                            new AstSymbolExportForeign(new AstSymbolRef(key[0])), new AstSymbolExport(symbolRef)));
                    }
                    else
                    {
                        throw new NotSupportedException("Library export of " + value.GetType().Name);
                    }
                }
            }
        }

        if (exportMappings.Count > 0)
        {
            topLevelAst.Body.Add(new AstExport(ref exportMappings));
        }
    }

    void AddExternalImports(AstToplevel toplevel, SplitInfo split)
    {
        foreach (var importModuleName in split.ImportFromExternals.RootKeys())
        {
            var mappings = new StructList<AstNameMapping>();
            var importName = default(AstSymbolImport);
            foreach (var keyValuePair in split.ImportFromExternals.IteratePrefix(new[] { importModuleName }))
            {
                var key = keyValuePair.Key.AsReadOnlySpan()[1..];
                if (key.Length >= 1 && key[0] == "default")
                {
                    key = key[1..];
                }

                switch (key.Length)
                {
                    case 0:
                        importName = new(keyValuePair.Value);
                        break;
                    case 1:
                        mappings.Add(new(null, new(), new(),
                            new AstSymbolImportForeign(new AstSymbolRef(key[0])),
                            new AstSymbolImport(keyValuePair.Value)));
                        break;
                    default:
                        throw new NotSupportedException("Add external imports " + string.Join('.', key.ToArray()) +
                                                        " " + keyValuePair.Value.Name);
                }
            }

            toplevel.Body.Insert(0) = new AstImport(null, new(), new(), new(importModuleName), importName,
                ref mappings);
        }
    }

    void AddExternallyImportedFromOtherBundles(AstToplevel toplevel, SplitInfo split)
    {
        foreach (var (astNode, importFromOtherBundle) in split.ImportsFromOtherBundles)
        {
            var name = "__" + string.Join('_', importFromOtherBundle.Name) + "_" +
                       BundlerHelpers.FileNameToIdent(importFromOtherBundle.FromFile.Name);
            name = BundlerHelpers.MakeUniqueName(name, toplevel.Variables!, toplevel.CalcNonRootSymbolNames(),
                null);
            var shortenedPropertyName = importFromOtherBundle.FromSplit.ExportsUsedFromLazyBundles[astNode];
            var newVar = new AstVar(toplevel);
            var astSymbolVar = new AstSymbolVar(toplevel, name);
            var trueValue = new AstDot(new AstSymbolRef("__bbb"), shortenedPropertyName);
            astSymbolVar.Thedef = new(toplevel, astSymbolVar, trueValue);
            toplevel.Variables!.Add(name, astSymbolVar.Thedef);
            newVar.Definitions.Add(new(astSymbolVar, trueValue));
            toplevel.Body.Add(newVar);
            importFromOtherBundle.Ref = new(toplevel, astSymbolVar.Thedef, SymbolUsage.Read);
        }
    }

    void IgnoreEvalInTwoScopes(AstNode astNode)
    {
        if (astNode is AstToplevel topLevel)
            if (topLevel.UsesEval || topLevel.UsesWith)
            {
                new EvalIgnoreWalker().Walk(topLevel);
            }
    }

    void IgnoreEvalInToplevelScope(AstNode astNode)
    {
        if (astNode is AstToplevel top)
        {
            top.UsesEval = false;
            top.UsesWith = false;
        }
    }

    class EvalIgnoreWalker : TreeWalker
    {
        protected override void Visit(AstNode node)
        {
            switch (node)
            {
                case AstToplevel top:
                    top.UsesEval = false;
                    top.UsesWith = false;
                    DescendOnce();
                    break;
                case AstScope scope:
                    scope.UsesEval = false;
                    scope.UsesWith = false;
                    StopDescending();
                    break;
            }
        }
    }

    AstToplevel BeforeAdd(AstToplevel top)
    {
        var transformer =
            new BundlerTreeTransformer(_cache, _ctx, _currentSourceFile!, top.Variables!,
                top.CalcNonRootSymbolNames(), _currentFileIdent!,
                _splitMap, _splitMap[_currentSourceFile!.PartOfBundle!]);
        return (AstToplevel)transformer.Transform(top);
    }

    void MarkRequiredAs(SourceFile sourceFile, string fromSplitName)
    {
        if (sourceFile.PartOfBundle != fromSplitName && !PartToMainFilesMap.ContainsKey(sourceFile.PartOfBundle!))
        {
            if (PartToMainFilesMap.ContainsKey(fromSplitName))
            {
                sourceFile.PartOfBundle = fromSplitName;
            }
            else
            {
                // imported from 2 lazy bundles => promote to independent lazy bundle
                PromoteToIndependentLazyBundle(sourceFile, sourceFile.Name);
            }
        }
    }

    void PromoteToIndependentLazyBundle(SourceFile sourceFile, string splitName)
    {
        if (sourceFile.PartOfBundle == splitName) return;
        if (PartToMainFilesMap.ContainsKey(sourceFile.PartOfBundle!)) return;
        sourceFile.PartOfBundle = splitName;
        foreach (var fileRequire in sourceFile.Requires)
        {
            PromoteToIndependentLazyBundle(_cache[fileRequire], splitName);
        }
    }

    void Check(string fileName, string splitName)
    {
        var (content, sourceMap) = _ctx.ReadContent(fileName);
        if (content is null) throw new ApplicationException($"Content for {fileName} not found");
        var cached = BundlerHelpers.BuildSourceFile(fileName, content, sourceMap,
            (from, name) => _ctx.ResolveRequire(name, from));
        cached.PartOfBundle = splitName;
        cached.PlainJsDependencies.AddRange(_ctx.GetPlainJsDependencies(fileName).ToArray());
        _cache[fileName] = cached;

        cached.Exports ??= new();

        foreach (var exp in cached.SelfExports)
        {
            if (exp is SimpleSelfExport simpleExp)
            {
                cached.Exports![new[] { simpleExp.Name }] = simpleExp.Symbol;
            }
        }

        foreach (var r in cached.Requires)
        {
            if (_cache.TryGetValue(r, out var rCached))
            {
                MarkRequiredAs(rCached, cached.PartOfBundle);
                continue;
            }

            Check(r, cached.PartOfBundle);
        }

        foreach (var r in cached.LazyRequires)
        {
            if (_cache.TryGetValue(r, out var rCached))
            {
                MarkRequiredAs(rCached, r);
                continue;
            }

            Check(r, r);
        }

        foreach (var exp in cached.SelfExports)
        {
            if (exp is SimpleSelfExport simpleExp)
            {
                cached.Exports![new[] { simpleExp.Name }] = simpleExp.Symbol;
            }
            else if (exp is ReexportSelfExport reexportExp)
            {
                if (reexportExp.ExternalSource)
                {
                    cached.Exports![new[] { reexportExp.AsName }] =
                        new AstSymbolExternalImport(reexportExp.SourceName, reexportExp.Path);
                }
                else
                {
                    var module = _cache[reexportExp.SourceName];
                    foreach (var keyValuePair in module.Exports!.IteratePrefix(reexportExp.Path.AsSpan()))
                    {
                        cached.Exports![
                                Concat(reexportExp.AsName, keyValuePair.Key.AsSpan(reexportExp.Path.Length))] =
                            keyValuePair.Value;
                    }
                }
            }
            else if (exp is ExportAsNamespaceSelfExport asNamespaceExp)
            {
                var asNamespaceModule = _cache[asNamespaceExp.SourceName];
                foreach (var asNamespaceModuleExport in asNamespaceModule.Exports!)
                {
                    cached.Exports[Concat(asNamespaceExp.AsName, asNamespaceModuleExport.Key)] =
                        asNamespaceModuleExport.Value;
                }
            }
            else if (exp is ExportStarSelfExport starExp)
            {
                var reexModule = _cache[starExp.SourceName];
                foreach (var reexModuleExport in reexModule.Exports!)
                {
                    if (cached.Exports.TryFindLongestPrefix(reexModuleExport.Key.AsReadOnlySpan()[..1], out _,
                            out var astNode) && astNode is not null)
                        continue;
                    cached.Exports[reexModuleExport.Key] = reexModuleExport.Value;
                }
            }
        }

        _order.Add(cached);
    }

    static string[] Concat(string first, in ReadOnlySpan<string> rest)
    {
        var res = new string[rest.Length + 1];
        res[0] = first;
        rest.CopyTo(res.AsSpan(1));
        return res;
    }
}