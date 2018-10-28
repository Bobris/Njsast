using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for booleans
    public class AstBoolean : AstAtom
    {
        public AstBoolean(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
