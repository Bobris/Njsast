using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.ConstEval
{
    public class ExportFinder : TreeWalker
    {
        readonly string _export;
        internal AstNode Result;

        public ExportFinder(string export)
        {
            _export = export;
        }

        protected override void Visit(AstNode node)
        {
            if (node is AstDot dot)
            {
                StopDescending();
                if (dot.Expression is AstSymbolRef symb && IsExports(symb) && (string) dot.Property == _export)
                {
                    var parent = Parent();
                    if (parent is AstAssign assign && assign.Operator == Operator.Assignment && assign.Left == node)
                        Result = assign.Right;
                }
            }
        }

        static bool IsExports(AstSymbol symbol)
        {
            var def = symbol.Thedef;
            if (def == null) return false;
            return def.Undeclared && def.Global && def.Name == "exports";
        }
    }
}