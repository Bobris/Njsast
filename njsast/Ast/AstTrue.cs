using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `true` atom
    public class AstTrue : AstBoolean
    {
        public AstTrue(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
