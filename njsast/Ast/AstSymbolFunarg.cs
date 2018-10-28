using Njsast.Reader;

namespace Njsast.Ast
{
    /// Symbol naming a function argument
    public class AstSymbolFunarg : AstSymbolVar
    {
        public AstSymbolFunarg(Parser parser, Position startLoc, Position endLoc, string name, AstNode init) : base(parser, startLoc, endLoc, name, init)
        {
        }
    }
}
