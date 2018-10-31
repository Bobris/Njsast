using Njsast.Reader;

namespace Njsast.Ast
{
    /// Conditional expression using the ternary operator, i.e. `a ? b : c`
    public class AstConditional : AstNode
    {
        public AstNode Condition;
        public AstNode Consequent;
        public AstNode Alternative;

        public AstConditional(Parser parser, Position startLoc, Position endLoc, AstNode expr, AstNode consequent,
            AstNode alternative) : base(parser, startLoc, endLoc)
        {
            Condition = expr;
            Consequent = consequent;
            Alternative = alternative;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Condition);
            w.Walk(Consequent);
            w.Walk(Alternative);
        }
    }
}
