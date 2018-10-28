using Njsast.Reader;

namespace Njsast.Ast
{
    /// A dotted property access expression
    public class AstDot : AstPropAccess
    {
        public AstDot(Parser parser, Position startLoc, Position endLoc, AstNode expression, object property) : base(parser, startLoc, endLoc, expression, property)
        {
        }
    }
}
