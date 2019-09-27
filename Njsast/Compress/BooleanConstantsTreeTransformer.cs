using System;
using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.Compress
{
    public class BooleanConstantsTreeTransformer : TreeTransformer
    {
        protected override AstNode Before(AstNode node, bool inList)
        {
            switch (node)
            {
                case AstTrue _:
                    return CompressedTrueNode;
                case AstFalse _:
                    return CompressedFalseNode;
                default:
                    return node;
            }
        }

        protected override AstNode After(AstNode node, bool inList)
        {
            throw new NotSupportedException();
        }

        static AstUnaryPrefix CompressedTrueNode => new AstUnaryPrefix(Operator.LogicalNot, new AstNumber(0));

        static AstUnaryPrefix CompressedFalseNode => new AstUnaryPrefix(Operator.LogicalNot, new AstNumber(1));
    }
}