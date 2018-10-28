using Njsast.Reader;

namespace Njsast.Ast
{
    /// A regexp literal
    public class AstRegExp : AstConstant
    {
        /// [RegExp] the actual regexp
        public RegExp Value;

        public AstRegExp(Parser parser, Position startLoc, Position endLoc, RegExp value) : base(parser, startLoc, endLoc)
        {
            Value = value;
        }
    }
}
