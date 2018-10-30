using Njsast.Reader;

namespace Njsast.Ast
{
    /// An object literal
    public class AstObject : AstNode
    {
        /// [AstObjectProperty*] array of properties
        public StructList<AstObjectProperty> Properties;

        public AstObject(Parser parser, Position startLoc, Position endLoc, ref StructList<AstObjectProperty> properties) : base(parser, startLoc, endLoc)
        {
            Properties.TransferFrom(ref properties);
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.WalkList(Properties);
        }
    }
}
