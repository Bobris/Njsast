using Njsast.Ast;

namespace Njsast.Compress
{
    public class BlockEliminationTreeTransformer : CompressModuleTreeTransformerBase
    {
        public BlockEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }
        
        protected override AstNode Before(AstNode node, bool inList)
        {
            Descend();

            if (!inList)
                return node;
            
            if (!(node is AstBlock astBlock))
                return node;

            if (BlockIsDisallowed(astBlock))
                return node;

            var parent = Parent();
            switch (parent)
            {
                case null:
                    return SpreadStructList(astBlock);
                case AstBlock _:
                    return SpreadStructList(astBlock);
                default:
                    return node;
            }
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableBlockElimination && node is AstBlock astBlock && !BlockIsDisallowed(astBlock);
        }

        bool BlockIsDisallowed(AstBlock node)
        {
            // TODO we should check all cases which could destroy block
            return node is AstSwitch || 
                   node is AstSwitchBranch || 
                   node is AstLambda;
        }
    }
}