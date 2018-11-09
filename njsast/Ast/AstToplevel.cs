﻿using System.Collections.Generic;
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

        public SymbolDef DefGlobal(AstSymbol symbol)
        {
            var name = symbol.Name;
            if (Globals.ContainsKey(name))
            {
                return Globals[name];
            }

            var global = new SymbolDef(this, symbol, null);
            global.Undeclared = true;
            global.Global = true;
            Globals.Add(name, global);
            return global;
        }

        public override AstScope Resolve()
        {
            return this;
        }
    }
}