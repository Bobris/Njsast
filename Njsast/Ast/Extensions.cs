using System.Net.NetworkInformation;

namespace Njsast.Ast
{
    public static class Extensions
    {
        public static bool IsRequireSymbol(this SymbolDef? symbol)
        {
            return symbol != null && symbol.Undeclared && symbol.Global && symbol.Name == "require";
        }

        public static bool IsExportsSymbol(this SymbolDef? symbol)
        {
            return symbol != null && symbol.Undeclared && symbol.Global && symbol.Name == "exports";
        }

        public static bool IsPromiseSymbol(this SymbolDef? symbol)
        {
            return symbol != null && symbol.Undeclared && symbol.Global && symbol.Name == "Promise";
        }

        public static bool IsTsReexportSymbol(this SymbolDef? symbol)
        {
            return symbol != null && symbol.Undeclared && symbol.Global && symbol.Name == "__exportStar";
        }

        public static string? IsRequireCall(this AstNode node)
        {
            if (!(node is AstCall call) || call.Args.Count != 1 || !(call.Expression is AstSymbol methodNameSymbol) ||
                !methodNameSymbol.Thedef.IsRequireSymbol()) return null;
            var arg = call.Args[0];
            if (arg is AstString str)
                return str.Value;

            return null;
        }
    }
}
