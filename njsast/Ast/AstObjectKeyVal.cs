using Njsast.Reader;

namespace Njsast.Ast
{
    /// A key: value object property
    public class AstObjectKeyVal : AstObjectProperty
    {
        // [string] the original quote character
        //public string Quote;
        public AstObjectKeyVal(Parser parser, Position startLoc, Position endLoc, string key, AstNode value) : base(parser, startLoc, endLoc, key, value)
        {
        }

        public AstObjectKeyVal(Parser parser, Position startLoc, Position endLoc, AstNode key, AstNode value) : base(parser, startLoc, endLoc, key, value)
        {
        }
    }
}
