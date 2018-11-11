using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for unary expressions
    public abstract class AstUnary : AstNode
    {
        public Operator Operator;

        /// [AstNode] expression that this unary operator applies to
        public AstNode Expression;

        public AstUnary(Parser parser, Position startLoc, Position endLoc, Operator @operator, AstNode expression) :
            base(parser, startLoc, endLoc)
        {
            Operator = @operator;
            Expression = expression;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Expression);
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Operator", Operator.ToString());
        }
    }
}
