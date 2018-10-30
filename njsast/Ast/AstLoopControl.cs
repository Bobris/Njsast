using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for loop control statements (`break` and `continue`)
    public class AstLoopControl : AstJump
    {
        /// [AstLabelRef?] the label, or null if none
        public AstLabelRef Label;

        public AstLoopControl(Parser parser, Position startPos, Position endPos, AstLabelRef label = null) : base(
            parser, startPos, endPos)
        {
            Label = label;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Label);
        }
    }
}
