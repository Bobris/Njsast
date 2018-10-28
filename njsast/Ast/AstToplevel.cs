using System.Collections.Generic;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// The toplevel scope
    public class AstToplevel : AstScope
    {
        /// [Object/S] a map of name -> SymbolDef for all undeclared names
        public Dictionary<string, SymbolDef> Globals;

        public AstToplevel(Parser parser, Position startPos, Position endPos) : base(parser, startPos, endPos)
        {
        }
    }
}
