using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `default` switch branch
    public class AstDefault : AstSwitchBranch
    {
        public AstDefault(Parser parser, Position startPos, Position endPos) : base(parser, startPos, endPos)
        {
        }
    }
}
