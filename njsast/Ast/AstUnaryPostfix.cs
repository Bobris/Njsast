using Njsast.Reader;

namespace Njsast.Ast
{
    /// Unary postfix expression, i.e. `i++`
    public class AstUnaryPostfix : AstUnary
    {
        public AstUnaryPostfix(Parser parser, Position startLoc, Position endLoc, Operator @operator, AstNode expression) : base(parser, startLoc, endLoc, @operator, expression)
        {
        }
    }
}
