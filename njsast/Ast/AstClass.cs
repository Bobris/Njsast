using Njsast.Reader;

namespace Njsast.Ast
{
    /// An ES6 class
    public class AstClass : AstScope
    {
        /// [AstSymbolClass|AstSymbolDefClass?] optional class name.
        public AstSymbolDeclaration Name;

        /// [AstNode]? optional parent class
        public AstNode Extends;

        /// [AstObjectProperty*] array of properties
        public StructList<AstObjectProperty> Properties;

        public bool Inlined;

        public AstClass(Parser parser, Position startPos, Position endPos, AstSymbolDeclaration name, AstNode extends,
            ref StructList<AstObjectProperty> properties) : base(parser, startPos, endPos)
        {
            Name = name;
            Extends = extends;
            Properties.TransferFrom(ref properties);
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Name);
            w.Walk(Extends);
            w.WalkList(Properties);
        }
    }
}
