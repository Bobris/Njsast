using Njsast.Reader;

namespace Njsast.Ast
{
    /// Unary prefix expression, i.e. `typeof i` or `++i`
    public class AstUnaryPrefix : AstUnary
    {
        public AstUnaryPrefix(Parser parser, Position startLoc, Position endLoc, Operator @operator, AstNode expression) : base(parser, startLoc, endLoc, @operator, expression)
        {
        }
    }
}
