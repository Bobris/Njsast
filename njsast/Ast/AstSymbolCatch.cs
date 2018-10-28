﻿using Njsast.Reader;

namespace Njsast.Ast
{
    /// Symbol naming the exception in catch
    public class AstSymbolCatch : AstSymbolBlockDeclaration
    {
        public AstSymbolCatch(AstSymbol name, AstNode init) : base(name, init)
        {
        }
    }
}
