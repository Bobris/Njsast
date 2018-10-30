using Njsast.Reader;

namespace Njsast.Ast
{
    /// An array literal
    public class AstArray : AstNode
    {
        /// [AstNode*] array of elements
        public StructList<AstNode> Elements;

        public AstArray(Parser parser, Position startLoc, Position endLoc, ref StructList<AstNode> elements) : base(parser, startLoc, endLoc)
        {
            Elements.TransferFrom(ref elements);
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.WalkList(Elements);
        }
    }
}
