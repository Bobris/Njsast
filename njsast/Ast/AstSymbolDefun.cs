using Njsast.Reader;

namespace Njsast.Ast
{
    /// Symbol defining a function
    public class AstSymbolDefun : AstSymbolDeclaration
    {
        public AstSymbolDefun(Parser parser, Position startLoc, Position endLoc, string name, AstNode init) : base(parser, startLoc, endLoc, name, init)
        {
        }
    }
}
