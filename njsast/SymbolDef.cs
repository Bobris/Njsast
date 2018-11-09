using Njsast.Ast;

namespace Njsast
{
    public class SymbolDef
    {
        private static int NextId = 1;

        public int Id;
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
        public AstScope Defun;

        public SymbolDef(AstScope scope, AstSymbol orig, AstNode init)
        {
            Name = orig.Name;
            Scope = scope;
            Orig = new StructList<AstSymbol>();
            Orig.Add(orig);
            Init = init;
            Eliminated = 0;
            References = new StructList<AstSymbol>();
            Replaced = 0;
            Global = false;
            MangledName = null;
            Undeclared = false;
            Defun = null;
            Id = NextId++;
        }

        public SymbolDef Redefined()
        {
            return Defun.Variables.GetOrDefault(Name);
        }
    }
}