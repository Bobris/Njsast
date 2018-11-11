using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A sequence expression (comma-separated expressions)
    public class AstSequence : AstNode
    {
        /// [AstNode*] array of expressions (at least two)
        public StructList<AstNode> Expressions;

        public AstSequence(Parser parser, Position startLoc, Position endLoc, ref StructList<AstNode> expressions) :
            base(parser, startLoc, endLoc)
        {
            Expressions.TransferFrom(ref expressions);
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.WalkList(Expressions);
        }

        public override void CodeGen(OutputContext output)
        {
            for (var i = 0u; i < Expressions.Count; i++)
            {
                if (i > 0)
                {
                    output.Comma();
                    if (output.ShouldBreak())
                    {
                        output.Newline();
                        output.Indent();
                    }
                }

                Expressions[i].Print(output);
            }
        }
    }
}
