using Njsast.Reader;

namespace Njsast.Ast
{
    /// An assignment expression — `a = b + 5`
    public class AstAssign : AstBinary
    {
        public AstAssign(Parser parser, Position startLoc, Position endLoc, AstNode left, AstNode right, Operator op) :
            base(parser, startLoc, endLoc, left, right, op)
        {
        }
    }
}
