using Njsast.Reader;

namespace Njsast.Ast
{
    /// Symbol used as key in object { key: ... }
    public class AstSymbolProperty : AstSymbol
    {
        public AstSymbolProperty(AstSymbol symbol) : base(symbol)
        {
        }

        public AstSymbolProperty(Parser parser, Position startPos, Position endPos, string name) : base(parser, startPos, endPos, name)
        {
        }
    }
}