using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for property access expressions, i.e. `a.foo` or `a["foo"]`
    public class AstPropAccess : AstNode
    {
        /// [AstNode] the “container” expression
        public AstNode Expression;

        /// [AstNode|string] the property to access.  For AstDot this is always a plain string, while for AstSub it's an arbitrary AstNode
        public object Property;

        public AstPropAccess(Parser parser, Position startLoc, Position endLoc, AstNode expression, object property) : base(parser, startLoc, endLoc)
        {
            Expression = expression;
            Property = property;
        }
    }
}
