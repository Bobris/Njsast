using Njsast.Reader;

namespace Njsast.Ast
{
    /// Represents a debugger statement
    public class AstDebugger : AstStatement
    {
        public AstDebugger(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }
    }
}
