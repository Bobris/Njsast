using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `yield` statement
    public class AstYield : AstNode
    {
        /// [AstNode?] the value returned or thrown by this statement; could be null (representing undefined) but only when is_star is set to false
        public AstNode Expression;

        /// [Boolean] Whether this is a yield or yield* statement
        public bool IsStar;

        public AstYield(Parser parser, Position startLoc, Position endLoc, AstNode expression, bool isStar) : base(
            parser, startLoc, endLoc)
        {
            Expression = expression;
            IsStar = isStar;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Expression);
        }
    }
}
