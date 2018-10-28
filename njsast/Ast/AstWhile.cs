using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `while` statement
    public class AstWhile : AstDwLoop
    {
        public AstWhile(Parser parser, Position startPos, Position endPos, AstNode test, AstStatement body) : base(parser, startPos, endPos, test, body)
        {
        }
    }
}
