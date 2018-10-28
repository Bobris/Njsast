using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `false` atom
    public class AstFalse : AstBoolean
    {
        public AstFalse(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
