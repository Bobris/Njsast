using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// Binary expression, i.e. `a + b`
    public class AstBinary : AstNode
    {
        public Operator Operator;

        /// [AstNode] left-hand side expression
        public AstNode Left;

        /// [AstNode] right-hand side expression
        public AstNode Right;

        public AstBinary(Parser parser, Position startLoc, Position endLoc, AstNode left, AstNode right, Operator op) :
            base(parser, startLoc, endLoc)
        {
            Left = left;
            Right = right;
            Operator = op;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Left);
            w.Walk(Right);
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Operator", Operator.ToString());
        }
    }
}
