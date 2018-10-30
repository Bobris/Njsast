using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for literal object properties
    public class AstObjectProperty : AstNode
    {
        /// [string|AstNode] property name. For ObjectKeyVal this is a string. For getters, setters and computed property this is an AstNode.
        public object Key;

        /// [AstNode] property value.  For getters and setters this is an AstAccessor.
        public AstNode Value;

        public AstObjectProperty(Parser parser, Position startLoc, Position endLoc, string key, AstNode value) : base(parser, startLoc, endLoc)
        {
            Key = key;
            Value = value;
        }

        public AstObjectProperty(Parser parser, Position startLoc, Position endLoc, AstNode key, AstNode value) : base(parser, startLoc, endLoc)
        {
            Key = key;
            Value = value;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            if (Key is AstNode)
                w.Walk((AstNode)Key);
            w.Walk(Value);
        }
    }
}
