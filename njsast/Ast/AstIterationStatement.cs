using Njsast.Reader;

namespace Njsast.Ast
{
    /// Internal class.  All loops inherit from it.
    public class AstIterationStatement : AstStatementWithBody
    {
        public AstIterationStatement(Parser parser, Position startPos, Position endPos, AstStatement body)
            : base(parser, startPos, endPos, body)
        {
        }

        public override bool IsBlockScope()
        {
            return true;
        }
    }
}
