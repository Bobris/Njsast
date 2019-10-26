using System;
using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Bundler
{
    class BundlerTreeTransformer : TreeTransformer
    {
        readonly Dictionary<string, SourceFile> _cache;
        readonly IBundlerCtx _ctx;
        readonly SourceFile _currentSourceFile;
        readonly Dictionary<string, SymbolDef> _rootVariables;
        readonly string _suffix;
        readonly Dictionary<SymbolDef, SourceFile> _reqSymbolDefMap = new Dictionary<SymbolDef, SourceFile>();

        public BundlerTreeTransformer(Dictionary<string, SourceFile> cache, IBundlerCtx ctx,
            SourceFile currentSourceFile, Dictionary<string, SymbolDef> rootVariables, string suffix)
        {
            _cache = cache;
            _ctx = ctx;
            _currentSourceFile = currentSourceFile;
            _rootVariables = rootVariables;
            _suffix = "_" + suffix;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstLabel)
                return node;
            if (node is AstVarDef varDef)
            {
                if (varDef.Value.IsRequireCall() is { } reqName)
                {
                    var reqSymbolDef = varDef.Name.IsSymbolDef()!;
                    var resolvedName = _ctx.ResolveRequire(reqName, _currentSourceFile!.Name);
                    if (!_cache.TryGetValue(resolvedName, out var reqSource))
                        throw new ApplicationException("Cannot find " + resolvedName + " imported from " +
                                                       _currentSourceFile!.Name);
                    _reqSymbolDefMap[reqSymbolDef] = reqSource;
                    return Remove;
                }
            }

            if (node is AstSimpleStatement simpleStatement)
            {
                if (simpleStatement.Body.IsRequireCall() is {})
                    return Remove;
            }

            if (node is AstSymbolRef symbolRef && symbolRef.IsSymbolDef() is {} wholeImport)
            {
                if (!_reqSymbolDefMap.TryGetValue(wholeImport, out var sourceFile))
                    return null;
                CheckIfNewlyUsedSymbolIsUnique(sourceFile.WholeExport!);
                return new AstSymbolRef(node, sourceFile.WholeExport!.Thedef!, SymbolUsage.Read);
            }

            if (node is AstPropAccess propAccess)
            {
                if (propAccess.Expression.IsSymbolDef() is {} symbolDef)
                {
                    if (!_reqSymbolDefMap.TryGetValue(symbolDef, out var sourceFile))
                        return null;
                    var propName = propAccess.PropertyAsString;
                    if (propName != null)
                    {
                        if (sourceFile.Exports!.TryGetValue(propName, out var exportedSymbol))
                        {
                            if (exportedSymbol is AstSymbol trueSymbol)
                            {
                                CheckIfNewlyUsedSymbolIsUnique(trueSymbol);
                                return new AstSymbolRef(node, trueSymbol.Thedef!, SymbolUsage.Read);
                            }
                            return exportedSymbol;
                        }

                        // This is not error because it could be just TypeScript interface
                        return new AstSymbolRef("undefined");
                    }
                }
            }

            return null;
        }

        void CheckIfNewlyUsedSymbolIsUnique(AstSymbol astSymbol)
        {
            var astSymbolDef = astSymbol.Thedef!;
            var oldName = astSymbolDef.Name;
            if (!_rootVariables.TryGetValue(oldName, out var rootSymbol))
                return;
            var newName = BundlerHelpers.MakeUniqueName(oldName, _rootVariables, _suffix);
            _rootVariables[oldName] = astSymbolDef;
            _rootVariables[newName] = rootSymbol;
            Helpers.RenameSymbol(rootSymbol, newName);
        }

        protected override AstNode After(AstNode node, bool inList)
        {
            if (node is AstSimpleStatement simple && simple.Body == Remove)
                return Remove;
            if (node is AstVar @var && @var.Definitions.Count == 0)
                return Remove;
            return node;
        }
    }
}
