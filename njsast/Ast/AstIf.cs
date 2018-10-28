using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `if` statement
    public class AstIf : AstStatementWithBody
    {
        /// [AstNode] the `if` condition
        public AstNode Condition;

        /// [AstStatement?] the `else` part, or null if not present
        public AstStatement Alternative;

        public AstIf(Parser parser, Position startPos, Position endPos, AstNode condition, AstStatement body, AstStatement alternative) : base(parser, startPos, endPos, body)
        {
            Condition = condition;
            Alternative = alternative;
        }
    }
}
