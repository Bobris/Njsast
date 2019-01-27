using Njsast.Reader;

namespace Njsast.Ast
{
    /// Reference to some symbol (not definition/declaration)
    public class AstSymbolRef : AstSymbol
    {
        protected AstSymbolRef(AstSymbol symbol) : base(symbol)
        {
        }

        public AstSymbolRef(Parser parser, Position startPos, Position endPos, string name) : base(parser, startPos, endPos, name)
        {
        }

        public override bool IsConstValue(IConstEvalCtx ctx = null)
        {
            if (Thedef == null) return false;
            if (Thedef.Global)
            {
                if (Name == "Infinity") return true;
                if (Name == "NaN") return true;
                if (Name == "undefined") return true;
            }
            return false;
        }

        public override object ConstValue(IConstEvalCtx ctx = null)
        {
            if (Thedef == null) return null;
            if (Thedef.Global)
            {
                if (Name == "Infinity") return AstInfinity.Instance;
                if (Name == "NaN") return AstNaN.Instance;
                if (Name == "undefined") return AstUndefined.Instance;
            }
            return null;
        }
    }
}
