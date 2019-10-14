using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnusedFunctionEliminationTreeTransformer : CompressModuleTreeTransformerBase
    {
        public UnusedFunctionEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstScope)
            {
                if (node is AstLambda astLambda && astLambda.Name != null)
                {
                    var canBeRemoved = true;
                    var shouldPreserveName = false;
                    var definitionScope = astLambda.Name.Thedef!.Scope;
                    foreach (var reference in astLambda.Name.Thedef.References)
                    {
                        // Referenced in same scope as defined and used differently than writing
                        if (reference.Scope == definitionScope)
                        {
                            if (reference.Usage != SymbolUsage.Write)
                            {
                                canBeRemoved = false;
                                break;
                            }

                            shouldPreserveName = true;
                        }

                        // Used in scope which is not defined by this function
                        if (reference.Scope != definitionScope && !astLambda.IsParentScopeFor(reference.Scope))
                        {
                            canBeRemoved = false;
                            break;
                        }
                    }

                    if (canBeRemoved)
                    {
                        ShouldIterateAgain = true;
                        if (shouldPreserveName)
                        {
                            var varDefs = new StructList<AstVarDef>();
                            varDefs.Add(new AstVarDef(new AstSymbolVar(astLambda.Name)));
                            return new AstVar(ref varDefs);
                        }
                        return Remove;
                    }
                }
                
                Descend();
                return node;
            }

            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableUnusedFunctionElimination && node is AstScope;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }
    }
}