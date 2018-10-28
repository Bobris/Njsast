using Njsast.Reader;

namespace Njsast.Ast
{
    /// An `await` statement
    public class AstAwait : AstNode
    {
        /// [AstNode] the mandatory expression being awaited
        public AstNode Expression;

        public AstAwait(Parser parser, Position startLoc, Position endLoc, AstNode expression):
        base(parser, startLoc, endLoc)
        {
            Expression = expression;
        }
    }
}
