using System;
using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Bundler
{
    public class ImportExportTransformer : TreeTransformer
    {
        readonly SourceFile _sourceFile;
        readonly Func<string, string, string> _resolver;
        readonly Dictionary<string, string> _exportName2VarNameMap = new Dictionary<string, string>();
        StructList<AstNode> _bodyPrepend = new StructList<AstNode>();

        public ImportExportTransformer(SourceFile sourceFile, Func<string, string, string> resolver)
        {
            _sourceFile = sourceFile;
            _resolver = resolver;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            var req = node.IsRequireCall();
            if (req != null)
            {
                _sourceFile.Requires.Add(_resolver.Invoke(_sourceFile.Name, req));
                return node;
            }

            req = node.IsLazyImportCall();
            if (req != null)
            {
                _sourceFile.LazyRequires.Add(_resolver.Invoke(_sourceFile.Name, req));
                return node;
            }

            if (node is AstSimpleStatement {Body: var stmBody })
            {
                if (stmBody is AstCall call && call.IsDefinePropertyExportsEsModule())
                {
                    return Remove;
                }

                var pea = stmBody.IsExportsAssign();
                if (pea != null)
                {
                    if (_exportName2VarNameMap.TryGetValue(pea.Value.name, out var varName))
                    {
                        ((AstAssign) stmBody).Left = new AstSymbolRef(((AstAssign) stmBody).Left, varName);
                        return node;
                    }

                    var newName = "__export_" + pea.Value.name;
                    if (pea.Value.value.IsConstantSymbolRef())
                    {
                        _exportName2VarNameMap[pea.Value.name] = newName;
                        _sourceFile.SelfExports.Add(new SimpleSelfExport(pea.Value.name, (AstSymbol) pea.Value.value!));
                        return Remove;
                    }

                    var newVar = new AstVar(stmBody);
                    var astSymbolVar = new AstSymbolVar(stmBody, newName);
                    newVar.Definitions.Add(new AstVarDef(astSymbolVar, pea.Value.value));
                    _exportName2VarNameMap[pea.Value.name] = newName;
                    _sourceFile.SelfExports.Add(new SimpleSelfExport(pea.Value.name, astSymbolVar));
                    return newVar;
                }
            }

            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            if (node is AstToplevel toplevel)
            {
                toplevel.Body.InsertRange(0, _bodyPrepend.AsSpan());
            }

            return null;
        }
    }
}