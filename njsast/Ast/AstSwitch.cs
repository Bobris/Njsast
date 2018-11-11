using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `switch` statement
    public class AstSwitch : AstBlock
    {
        /// [AstNode] the `switch` “discriminant”
        public AstNode Expression;

        public AstSwitch(Parser parser, Position startPos, Position endPos, AstNode expression,
            ref StructList<AstNode> body) : base(parser, startPos, endPos, ref body)
        {
            Expression = expression;
        }

        public override void Visit(TreeWalker w)
        {
            w.Walk(Expression);
            base.Visit(w);
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("switch");
            output.Space();
            Expression.Print(output, true);
            output.Space();
            if (Body.Count == 0)
                output.Print("{}");
            else
            {
                output.Print("{");
                output.Newline();
                output._indentation += output.Options.indent_level;
                for (var i = 0u; i < Body.Count; i++)
                {
                    var branch = (AstSwitchBranch)Body[i];
                    output.Indent(true);
                    branch.Print(output);
                    if (i < Body.Count-1 && branch.Body.Count > 0)
                        output.Newline();
                }
                output._indentation -= output.Options.indent_level;
                output.Indent();
                output.Print("}");
            };
        }
    }
}
