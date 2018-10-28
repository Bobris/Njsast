using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `super` symbol
    public class AstSuper : AstThis
    {
        public AstSuper(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc, "super")
        {
        }

    }
}
