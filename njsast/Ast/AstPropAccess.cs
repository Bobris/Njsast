using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for property access expressions, i.e. `a.foo` or `a["foo"]`
    public abstract class AstPropAccess : AstNode
    {
        /// [AstNode] the “container” expression
        public AstNode Expression;

        /// [AstNode|string] the property to access.  For AstDot this is always a plain string, while for AstSub it's an arbitrary AstNode
        public object Property;

        public AstPropAccess(Parser parser, Position startLoc, Position endLoc, AstNode expression, object property) :
            base(parser, startLoc, endLoc)
        {
            Expression = expression;
            Property = property;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            if (Property is AstNode)
                w.Walk((AstNode) Property);
            w.Walk(Expression);
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            if (Property is string)
                writer.PrintProp("Property", (string) Property);
        }
    }
}
