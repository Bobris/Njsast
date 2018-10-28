using Njsast.Reader;

namespace Njsast.Ast
{
    /// A sequence expression (comma-separated expressions)
    public class AstSequence : AstNode
    {
        /// [AstNode*] array of expressions (at least two)
        public StructList<AstNode> Expressions;

        public AstSequence(Parser parser, Position startLoc, Position endLoc, ref StructList<AstNode> expressions) :
            base(parser, startLoc, endLoc)
        {
            Expressions.TransferFrom(ref expressions);
        }
    }
}
