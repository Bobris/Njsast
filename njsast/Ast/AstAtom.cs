using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for atoms
    public class AstAtom : AstConstant
    {
        public AstAtom(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
