using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`
    public class AstStatementWithBody : AstStatement
    {
        /// [AstStatement] the body; this should always be present, even if it's an AstEmptyStatement
        public AstStatement Body;

        protected AstStatementWithBody(Parser parser, Position startPos, Position endPos, AstStatement body) : base(parser,startPos,endPos)
        {
            Body = body;
        }
    }
}
