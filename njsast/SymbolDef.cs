using Njsast.Ast;

namespace Njsast
{
    public class SymbolDef
    {
        public string Name;
        public string MangledName;
        public StructList<AstSymbol> Orig;
        public AstNode Init;
        public int Eliminated;
        public AstScope Scope;
        public StructList<AstSymbol> References;
        public int Replaced;
        public bool Global;
        public bool Export;
        public bool Undeclared;
    }
}
