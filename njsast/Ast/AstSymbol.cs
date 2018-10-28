using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for all symbols
    public class AstSymbol : AstNode
    {
        /// [AstScope/S] the current scope (not necessarily the definition scope)
        public AstScope Scope;

        /// [string] name of this symbol
        public string Name;

        /// [SymbolDef/S] the definition of this symbol
        public SymbolDef Thedef;

        public AstSymbol(Parser parser, Position startLoc, Position endLoc, string name) : base(parser, startLoc, endLoc)
        {
            Name = name;
        }

        protected AstSymbol(AstSymbol symbol) : base(symbol)
        {
            Name = symbol.Name;
        }
    }
}
