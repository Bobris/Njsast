using Njsast.Ast;

namespace Njsast.Compress
{
    public abstract class UnreachableAfterJumpCodeEliminationTreeTransformerBase : CompressModuleTreeTransformerBase
    {
        protected UnreachableAfterJumpCodeEliminationTreeTransformerBase(ICompressOptions options) : base(options)
        {
        }
        
        protected AstNode TryRemoveNode(AstNode node)
        {
            switch (node)
            {
                case AstLambda _:
                    return node;
                case AstDefinitions definitions:
                {
                    foreach (var astVarDef in definitions.Definitions)
                    {
                        // We can safely remove write and value because assignment is preformed after exit
                        ShouldIterateAgain = true;
                        if (astVarDef.Name is AstSymbol symbol)
                        {
                            symbol.Usage = SymbolUsage.Unknown;
                        }
                        astVarDef.Value = null; 
                    }

                    return node;
                }
                default:
                    ShouldIterateAgain = true;
                    return Remove;
            }
        }
    }
}