using Njsast.Reader;

namespace Njsast.Ast
{
    /// The part of the export/import statement that declare names from a module.
    public class AstNameMapping : AstNode
    {
        /// [AstSymbolExportForeign|AstSymbolImportForeign] The name being exported/imported (as specified in the module)
        public AstSymbol ForeignName;

        /// [AstSymbolExport|AstSymbolImport] The name as it is visible to this module.
        public AstSymbol Name;

        public AstNameMapping(Parser parser, Position startLoc, Position endLoc, AstSymbol foreignName, AstSymbol name)
            : base(parser, startLoc, endLoc)
        {
            ForeignName = foreignName;
            Name = name;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(Name);
            w.Walk(ForeignName);
        }
    }
}
