using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A dotted property access expression
    public class AstDot : AstPropAccess
    {
        public AstDot(Parser parser, Position startLoc, Position endLoc, AstNode expression, string property) : base(
            parser, startLoc, endLoc, expression, property)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            Expression.Print(output);
            if (output.NeedDotAfterNumber())
            {
                output.Print(".");
            }

            output.AddMapping(Expression.Source, Expression.End, false);
            output.Print(".");
            output.Print((string) Property);
        }
    }
}
