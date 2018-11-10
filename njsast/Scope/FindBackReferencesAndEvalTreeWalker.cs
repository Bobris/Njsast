using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Scope
{
    public class FindBackReferencesAndEvalTreeWalker : TreeWalker
    {
        private readonly ScopeOptions _options;
        private readonly AstToplevel _astToplevel;

        public FindBackReferencesAndEvalTreeWalker(ScopeOptions options, AstToplevel astToplevel)
        {
            _options = options;
            _astToplevel = astToplevel;
            _astToplevel.Globals = new Dictionary<string, SymbolDef>();
        }

        protected override void Visit(AstNode node)
        {
//            if (node is AstLoopControl astLoopControl)
//            {
//                if (astLoopControl.Label != null)
//                {
//                    // TODO astLoopControl is not astSymbol => so it cant be added to References collections 
//                    astLoopControl.Label.Thedef.References.Add(astLoopControl);
//                }
//
//                return;
//            }

            if (node is AstSymbolRef astSymbolRef)
            {
                var name = astSymbolRef.Name;
                if (name == "eval" && Parent() is AstCall)
                {
                    for (var s = astSymbolRef.Scope; s != null && !s.UsesEval; s = s.ParentScope)
                    {
                        s.UsesEval = true;
                    }
                }

                var sym = astSymbolRef.Scope.FindVariable(name);
                if (sym == null)
                {
                    sym = _astToplevel.DefGlobal(astSymbolRef);
                }
                else if (sym.Scope is AstLambda astLambda && name == "arguments")
                {
                    astLambda.UsesArguments = true;
                }

                astSymbolRef.Thedef = sym;
                astSymbolRef.Reference(_options);
                return;
            }

            // ensure mangling works if catch reuses a scope variable
            if (node is AstSymbolCatch astSymbolCatch)
            {
                var def = astSymbolCatch.Thedef.Redefined();
                if (def != null)
                {
                    for (var s = astSymbolCatch.Scope; s != null; s = s.ParentScope)
                    {
                        s.Enclosed.AddUnique(def);
                        if (s == def.Scope) break;
                    }
                }
            }
        }
    }
}