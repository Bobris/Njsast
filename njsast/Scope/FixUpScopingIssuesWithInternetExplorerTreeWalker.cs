using Njsast.Ast;

namespace Njsast.Scope
{
    public class FixUpScopingIssuesWithInternetExplorerTreeWalker : TreeWalker
    {
        private readonly ScopeOptions _options;
        private readonly AstToplevel _astToplevel;

        public FixUpScopingIssuesWithInternetExplorerTreeWalker(ScopeOptions options, AstToplevel astToplevel)
        {
            _options = options;
            _astToplevel = astToplevel;
        }

        protected override void Visit(AstNode node)
        {
            if (node is AstSymbolCatch astSymbolCatch)
            {
                Redefine(astSymbolCatch, astSymbolCatch.Thedef.Defun);
                return;
            }

            if (node is AstSymbolLambda astSymbolLambda)
            {
                var def = astSymbolLambda.Thedef;
                if (def.Orig.Count == 1)
                {
                    Redefine(astSymbolLambda, astSymbolLambda.Scope.ParentScope);
                    astSymbolLambda.Thedef.Init = def.Init;
                }
            }
        }

        private void Redefine(AstSymbol symbol, AstScope scope)
        {
            var name = symbol.Name;
            var refs = symbol.Thedef.References;
            var def = scope.FindVariable(name) ??
                      _astToplevel.Globals.GetOrDefault(name) ?? scope.DefVariable(symbol, null);

            foreach (var astSymbol in refs)
            {
                astSymbol.Thedef = def;
                astSymbol.Reference(_options);
            }

            symbol.Thedef = def;
            symbol.Reference(_options);
        }
    }
}