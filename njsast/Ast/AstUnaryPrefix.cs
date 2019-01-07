using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// Unary prefix expression, i.e. `typeof i` or `++i`
    public class AstUnaryPrefix : AstUnary
    {
        public AstUnaryPrefix(Parser parser, Position startLoc, Position endLoc, Operator @operator, AstNode expression)
            : base(parser, startLoc, endLoc, @operator, expression)
        {
        }

        public AstUnaryPrefix(Operator @operator, AstNode expression) : base(@operator, expression)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print(Operator);
            if (OutputContext.OperatorStartsWithLetter(Operator)
                || OutputContext.OperatorEndsWithPlusOrMinus(Operator)
                && Expression is AstUnaryPrefix nestedUnary
                && OutputContext.OperatorStartsWithPlusOrMinus(nestedUnary.Operator))
            {
                output.Space();
            }

            Expression.Print(output);
        }
    }
}
