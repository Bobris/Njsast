using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `do` statement
    public class AstDo : AstDwLoop
    {
        public AstDo(Parser parser, Position startPos, Position endPos, AstNode test, AstStatement body)
            : base(parser, startPos, endPos, test, body)
        {
        }
    }
}
