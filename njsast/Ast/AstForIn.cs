using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `for ... in` statement
    public class AstForIn : AstIterationStatement
    {
        /// [AstNode] the `for/in` initialization code
        public AstNode Init;

        /// [AstNode] the object that we're looping through
        public AstNode Object;

        public AstForIn(Parser parser, Position startPos, Position endPos, AstStatement body, AstNode init, AstNode @object) : base(parser, startPos, endPos, body)
        {
            Init = init;
            Object = @object;
        }

        public override void Visit(TreeWalker w)
        {
            w.Walk(Init);
            w.Walk(Object);
            base.Visit(w);
        }
    }
}
