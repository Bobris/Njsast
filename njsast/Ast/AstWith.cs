using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `with` statement
    public class AstWith : AstStatementWithBody
    {
        /// [AstNode] the `with` expression
        public AstNode Expression;

        public AstWith(Parser parser, Position startPos, Position endPos, AstStatement body, AstNode expression) : base(parser, startPos, endPos, body)
        {
            Expression = expression;
        }
    }
}
