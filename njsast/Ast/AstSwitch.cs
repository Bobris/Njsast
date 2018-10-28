using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `switch` statement
    public class AstSwitch : AstBlock
    {
        /// [AstNode] the `switch` “discriminant”
        public AstNode Expression;

        public AstSwitch(Parser parser, Position startPos, Position endPos, AstNode expression, ref StructList<AstNode> body) : base(parser, startPos, endPos, ref body)
        {
            Expression = expression;
        }
    }
}
