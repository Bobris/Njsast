using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `undefined` value
    public class AstUndefined : AstAtom
    {
        public AstUndefined(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
