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
                    var definitionScope = astLambda.Name.Thedef!.Scope;
                    foreach (var reference in astLambda.Name.Thedef.References)
                    {
                        // Usage of symbol in inner in inner scope
                        if (reference.Scope != definitionScope)
                        {
                            continue;
                        }

                        // Symbol is used only for writing 
                        if (reference.Usage != SymbolUsage.Write)
                        {
                            canBeRemoved = false;
                            break;
                        }
                    }

                    if (canBeRemoved)
                    {
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