using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using Njsast.Ast;
using Njsast.Compress;
using Njsast.Output;
using Njsast.Reader;
using Njsast.Scope;

namespace Njsast.Bundler
{
    public interface IBundlerCtx
    {
        string? ReadContent(string fileName);
        IReadOnlyList<string> GetPlainJsDependencies(string fileName);
        string GenerateBundleName(string forName);
        string ResolveRequire(string name, string from);
        string JsHeaders(string forSplit, bool withImport);
        void WriteBundle(string name, string content);
    }

    public class BundlerImpl
    {
        public BundlerImpl(IBundlerCtx ctx)
        {
            Ctx = ctx;
            PartToMainFilesMap = new Dictionary<string, IReadOnlyList<string>>();
            MangleWithFrequencyCounting = true;
            GlobalDefines = new Dictionary<string, object>();
        }

        public IReadOnlyDictionary<string, IReadOnlyList<string>> PartToMainFilesMap;
        public ICompressOptions? CompressOptions;
        public bool Mangle;
        public bool MangleWithFrequencyCounting;
        public OutputOptions? OutputOptions;
        public IReadOnlyDictionary<string, object> GlobalDefines;
        public IBundlerCtx Ctx;

        StructList<SourceFile> _order = new StructList<SourceFile>();
        internal Dictionary<string, SourceFile> _cache = new Dictionary<string, SourceFile>();
        Dictionary<string, SplitInfo> _splitMap = new Dictionary<string, SplitInfo>();
        internal SourceFile? _currentSourceFile;
        internal string? _currentFileIdent;

        public void Run()
        {
            foreach (var (splitName, mainFileList) in PartToMainFilesMap)
            {
                foreach (var mainFile in mainFileList)
                {
                    if (_cache.TryGetValue(mainFile, out var sourceFile))
                    {
                        MarkRequiredAs(sourceFile, splitName);
                        continue;
                    }

                    Check(mainFile, splitName);
                }

                _splitMap[splitName] = new SplitInfo(splitName)
                    {ShortName = Ctx.GenerateBundleName(splitName), PropName = "ERROR"};
            }

            var lazySplitCounter = 0;
            foreach (var f in _order)
            {
                var fullBundleName = f.PartOfBundle!;
                if (!_splitMap.TryGetValue(fullBundleName, out var split))
                {
                    var shortenedBundleName = Ctx.GenerateBundleName(fullBundleName);
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

            foreach (var (splitName, splitInfo) in _splitMap)
            {
                var topLevelAst = new Parser(new Options(), Ctx.JsHeaders(splitName, lazySplitCounter > 0)).Parse();
                if (GlobalDefines != null && GlobalDefines.Count > 0)
                    topLevelAst.Body.Add(Helpers.EmitVarDefines(GlobalDefines));
                topLevelAst.FigureOutScope();
                foreach (var sourceFile in _order)
                {
                    if (sourceFile.PartOfBundle != splitName) continue;
                    _currentSourceFile = sourceFile;
                    _currentFileIdent = FileNameToIdent(sourceFile.Name);
                    BundlerHelpers.AppendToplevelWithRename(topLevelAst, sourceFile.Ast, _currentFileIdent
                        , BeforeAdd);
                }

                BundlerHelpers.WrapByIIFE(topLevelAst);
                if (CompressOptions != null)
                {
                    topLevelAst.FigureOutScope();
                    topLevelAst = topLevelAst.Compress(CompressOptions);
                }

                if (Mangle)
                {
                    topLevelAst.FigureOutScope();
                    topLevelAst.Mangle(new ScopeOptions {FrequencyCounting = MangleWithFrequencyCounting});
                }

                Ctx.WriteBundle(splitInfo.ShortName!, topLevelAst.PrintToString(OutputOptions));
            }
        }

        void BeforeAdd(AstToplevel top)
        {
            var transformer = new BundlerTreeTransformer(_cache, Ctx, _currentSourceFile!, top.Variables!, _currentFileIdent!);
            transformer.Transform(top);
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
            var content = Ctx.ReadContent(fileName);
            if (content is null) throw new ApplicationException($"Content for {fileName} not found");
            var sourceMapContent = Ctx.ReadContent(fileName + ".map");
            var sourceMap = sourceMapContent != null
                ? SourceMap.SourceMap.Parse(sourceMapContent, ".")
                : SourceMap.SourceMap.Identity(content, fileName);
            var cached = BundlerHelpers.BuildSourceFile(fileName, content, sourceMap,
                (from, name) => Ctx.ResolveRequire(name, from));
            cached.PartOfBundle = splitName;
            cached.PlainJsDependencies.AddRange(Ctx.GetPlainJsDependencies(fileName).ToArray());
            _cache[fileName] = cached;
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

            cached.Exports = new Dictionary<string, AstNode>();
            foreach (var exp in cached.SelfExports)
            {
                if (exp is SimpleSelfExport simpleExp)
                {
                    cached.Exports![simpleExp.Name] = simpleExp.Symbol;
                }
                else if (exp is ExportStarSelfExport starExp)
                {
                    var reexModule = _cache[starExp.SourceName];
                    if (reexModule.Exports != null)
                    {
                        foreach (var reexModuleExport in reexModule.Exports)
                        {
                            cached.Exports[reexModuleExport.Key] = reexModuleExport.Value;
                        }
                    }
                    else
                    {
                        foreach (var reexModuleSelfExport in reexModule.SelfExports)
                        {
                            if (reexModuleSelfExport is SimpleSelfExport simpleExp2)
                            {
                                cached.Exports![simpleExp2.Name] = simpleExp2.Symbol;
                            }
                        }
                    }
                }
            }

            _order.Add(cached);
        }

        string FileNameToIdent(string fn)
        {
            if (fn.LastIndexOf('/') >= 0) fn = fn.Substring(fn.LastIndexOf('/') + 1);
            if (fn.IndexOf('.') >= 0) fn = fn.Substring(0, fn.IndexOf('.'));
            fn = fn.Replace('-', '_');
            return fn;
        }
    }
}
