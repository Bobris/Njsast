using Njsast.Reader;

namespace Njsast.Ast
{
    /// A template string literal
    public class AstTemplateString : AstNode
    {
        /// [AstNode*] One or more segments, starting with AstTemplateSegment. AstNode may follow AstTemplateSegment, but each AstNode must be followed by AstTemplateSegment.
        public StructList<AstNode> Segments;

        public AstTemplateString(Parser parser, Position startLoc, Position endLoc, ref StructList<AstNode> segments) : base(parser, startLoc, endLoc)
        {
            Segments.TransferFrom(ref segments);
        }
    }
}
