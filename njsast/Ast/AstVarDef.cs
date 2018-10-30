using Njsast.Reader;

namespace Njsast.Ast
{
    /// A variable declaration; only appears in a AST_Definitions node
    public class AstVarDef : AstNode
    {
        /// [AstDestructuring|AstSymbolConst|AstSymbolLet|AstSymbolVar] name of the variable
        public AstNode Name;

        /// [AstNode?] initializer, or null of there's no initializer
        public AstNode Value;

        public AstVarDef(Parser parser, Position startLoc, Position endLoc, AstNode name, AstNode value = null) : base(parser, startLoc, endLoc)
        {
            Name = name;
            Value = value;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Name);
            w.Walk(Value);
        }
    }
}
