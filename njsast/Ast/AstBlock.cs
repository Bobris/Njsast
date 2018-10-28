using Njsast.Reader;

namespace Njsast.Ast
{
    /// A body of statements (usually bracketed)
    public class AstBlock : AstStatement
    {
        /// [AstStatement*] an array of statements
        public StructList<AstNode> Body;

        public AstBlock(Parser parser, Position startPos, Position endPos, ref StructList<AstNode> body) : base(
            parser, startPos, endPos)
        {
            Body.TransferFrom(ref body);
        }

        public AstBlock(Parser parser, Position startPos, Position endPos) : base(parser, startPos, endPos)
        {
        }
    }
}
