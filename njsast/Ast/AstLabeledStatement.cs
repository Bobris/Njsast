using Njsast.Reader;

namespace Njsast.Ast
{
    /// Statement with a label
    public class AstLabeledStatement : AstStatementWithBody
    {
        /// [AstLabel] a label definition
        public AstLabel Label;

        public AstLabeledStatement(Parser parser, Position startPos, Position endPos, AstStatement body, AstLabel label) : base(parser, startPos, endPos, body)
        {
            Label = label;
        }

        public override void Visit(TreeWalker w)
        {
            w.Walk(Label);
            base.Visit(w);
        }
    }
}
