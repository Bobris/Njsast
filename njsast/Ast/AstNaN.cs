using Njsast.Reader;

namespace Njsast.Ast
{
    /// The impossible value
    public class AstNaN : AstAtom
    {
        public AstNaN(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
