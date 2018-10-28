using Njsast.Reader;

namespace Njsast.Ast
{
    /// A statement consisting of an expression, i.e. a = 1 + 2
    public class AstSimpleStatement : AstStatement
    {
        /// [AstNode] an expression node (should not be instanceof AstStatement)
        public AstNode Body;

        public AstSimpleStatement(Parser parser, Position startPos, Position endPos, AstNode body) : base(parser, startPos, endPos)
        {
            Body = body;
        }
    }
}
