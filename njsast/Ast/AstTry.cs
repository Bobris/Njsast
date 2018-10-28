using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `try` statement
    public class AstTry : AstBlock
    {
        /// [AstCatch?] the catch block, or null if not present
        public AstCatch Bcatch;

        /// [AstFinally?] the finally block, or null if not present
        public AstFinally Bfinally;

        public AstTry(Parser parser, Position startPos, Position endPos, ref StructList<AstNode> body, AstCatch bcatch, AstFinally bfinally) : base(parser, startPos, endPos, ref body)
        {
            Bcatch = bcatch;
            Bfinally = bfinally;
        }
    }
}
