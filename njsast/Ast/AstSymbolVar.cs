using Njsast.Reader;

namespace Njsast.Ast
{
    /// Symbol defining a variable
    public class AstSymbolVar : AstSymbolDeclaration
    {
        public AstSymbolVar(Parser parser, Position startLoc, Position endLoc, string name, AstNode init) : base(parser, startLoc, endLoc, name, init)
        {
        }
    }
}
