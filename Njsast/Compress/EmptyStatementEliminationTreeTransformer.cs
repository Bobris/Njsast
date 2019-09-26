using System;
using Njsast.Ast;

namespace Njsast.Compress
{
    internal class EmptyStatementEliminationTreeTransformer : TreeTransformer
    {
        protected override AstNode Before(AstNode node, bool inList)
        {
            if (!(node is AstEmptyStatement))
                return node;
            return inList ? Remove : node;
        }

        protected override AstNode After(AstNode node, bool inList)
        {
            throw new NotSupportedException();
        }
    }
}