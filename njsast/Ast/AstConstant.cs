using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for all constants
    public class AstConstant : AstNode
    {
        public AstConstant(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
