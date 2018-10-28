using Njsast.Reader;

namespace Njsast.Ast
{
    /// Reference to some symbol (not definition/declaration)
    public class AstSymbolRef : AstSymbol
    {
        protected AstSymbolRef(AstSymbol symbol) : base(symbol)
        {
        }

        protected AstSymbolRef(Parser parser, Position startPos, Position endPos, string name) : base(parser, startPos, endPos, name)
        {
        }
    }
}
