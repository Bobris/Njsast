using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A function call expression
    public class AstCall : AstNode
    {
        /// [AstNode] expression to invoke as function
        public AstNode Expression;

        /// [AstNode*] array of arguments
        public StructList<AstNode> Args;

        public AstCall(Parser parser, Position startLoc, Position endLoc, AstNode expression,
            ref StructList<AstNode> args) : base(parser, startLoc, endLoc)
        {
            Expression = expression;
            Args.TransferFrom(ref args);
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Expression);
            w.WalkList(Args);
        }

        public override void CodeGen(OutputContext output)
        {
            Expression.Print(output);
            if (this is AstNew && !output.NeedConstructorParens(this))
                return;
            if (Expression is AstCall || Expression is AstLambda)
            {
                output.AddMapping(Start);
            }

            output.Print("(");
            for (var i = 0u; i < Args.Count; i++)
            {
                if (i > 0) output.Comma();
                Args[i].Print(output);
            }

            output.Print(")");
        }
    }
}
