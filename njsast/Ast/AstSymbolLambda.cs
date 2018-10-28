using Njsast.Reader;

namespace Njsast.Ast
{
    /// Symbol naming a function expression
    public class AstSymbolLambda : AstSymbolDeclaration
    {
        public AstSymbolLambda(Parser parser, Position startLoc, Position endLoc, string name, AstNode init) : base(parser, startLoc, endLoc, name, init)
        {
        }
    }
}
