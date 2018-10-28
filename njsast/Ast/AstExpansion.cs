using Njsast.Reader;

namespace Njsast.Ast
{
    /// An expandible argument, such as ...rest, a splat, such as [1,2,...all], or an expansion in a variable declaration, such as var [first, ...rest] = list
    public class AstExpansion : AstNode
    {
        /// [AstNode] the thing to be expanded
        public AstNode Expression;

        public AstExpansion(Parser parser, Position startLoc, Position endLoc, AstNode expression) : base(parser, startLoc, endLoc)
        {
            Expression = expression;
        }
    }
}
