using Njsast.AstDump;
using Njsast.Output;
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

        public override void CodeGen(OutputContext output)
        {
            var op = Operator;
            Left.Print(output);
            if (OutputContext.OperatorToString(op)[0] == '>' /* ">>" ">>>" ">" ">=" */
                && Left is AstUnaryPostfix leftPostfix
                && leftPostfix.Operator == Operator.DecrementPostfix)
            {
                // space is mandatory to avoid outputting -->
                output.Print(" ");
            }
            else
            {
                // the space is optional depending on "beautify"
                output.Space();
            }

            output.Print(op);
            if ((op == Operator.LessThan || op == Operator.LeftShift)
                && Right is AstUnaryPrefix rightPrefix
                && rightPrefix.Operator == Operator.LogicalNot
                && rightPrefix.Expression is AstUnaryPrefix rightPrefixPrefix
                && rightPrefixPrefix.Operator == Operator.Decrement)
            {
                // space is mandatory to avoid outputting <!--
                output.Print(" ");
            }
            else
            {
                // the space is optional depending on "beautify"
                output.Space();
            }

            Right.Print(output);
        }

        public override bool NeedParens(OutputContext output)
        {
            var p = output.Parent();
            // (foo && bar)()
            if (p is AstCall call && call.Expression == this) return true;
            // typeof (foo && bar)
            if (p is AstUnary) return true;
            // (foo && bar)["prop"], (foo && bar).prop
            if (p is AstPropAccess propAccess && propAccess.Expression == this) return true;
            // this deals with precedence: 3 * (2 + 1)
            if (p is AstBinary binary)
            {
                var po = binary.Operator;
                var pp = OutputContext.Precedence(po);
                var sp = OutputContext.Precedence(Operator);
                if (pp > sp
                    || (pp == sp
                        && (this == binary.Right || po == Operator.Power)))
                {
                    return true;
                }
            }

            return false;
        }
    }
}