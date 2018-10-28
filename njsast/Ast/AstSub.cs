using Njsast.Reader;

namespace Njsast.Ast
{
    /// Index-style property access, i.e. `a["foo"]`
    public class AstSub : AstPropAccess
    {
        public AstSub(Parser parser, Position startLoc, Position endLoc, AstNode expression, object property) : base(parser, startLoc, endLoc, expression, property)
        {
        }
    }
}
