using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// An object literal
    public class AstObject : AstNode
    {
        /// [AstObjectProperty*] array of properties
        public StructList<AstObjectProperty> Properties;

        public AstObject(Parser parser, Position startLoc, Position endLoc,
            ref StructList<AstObjectProperty> properties) : base(parser, startLoc, endLoc)
        {
            Properties.TransferFrom(ref properties);
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.WalkList(Properties);
        }

        public override void CodeGen(OutputContext output)
        {
            if (Properties.Count > 0)
            {
                output.Print("{");
                output.Newline();
                output._indentation += output.Options.indent_level;
                output.Indent();
                for (var i = 0u; i < Properties.Count; i++)
                {
                    if (i > 0)
                    {
                        output.Print(",");
                        output.Newline();
                    }

                    output.Indent();
                    Properties[i].Print(output);
                }

                output.Newline();
                output._indentation -= output.Options.indent_level;
                output.Indent();
                output.Print("}");
            }
            else
            {
                output.Print("{}");
            }
        }

        public override bool NeedParens(OutputContext output)
        {
            // object literal could need parens, because it would be interpreted as a block of code.
            if (!output.HasParens() && output.FirstInStatement())
            {
                return true;
            }

            return false;
        }
    }
}
