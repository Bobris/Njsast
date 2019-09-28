﻿namespace Njsast.Ast
{
    /// Symbol naming a function argument
    public class AstSymbolFunarg : AstSymbolVar
    {
        public AstSymbolFunarg(AstSymbol from) : base(from)
        {
        }

        public AstSymbolFunarg(AstNode from, string name) : base(from, name)
        {
        }
    }
}
