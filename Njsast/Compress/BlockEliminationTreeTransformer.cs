using System;
using Njsast.Ast;

namespace Njsast.Compress
{
    public class BlockEliminationTreeTransformer : TreeTransformer
    {
        protected override AstNode Before(AstNode node, bool inList)
        {
            if (node is AstSwitch || node is AstSwitchBranch)
            {
                // TODO we should check all cases which could destroy block
                return node;
            }
            Descend();
            
            if (!inList)
                return node;
            
            if (!(node is AstBlock astBlock))
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

        protected override AstNode After(AstNode node, bool inList)
        {
            throw new NotSupportedException();
        }
    }
}