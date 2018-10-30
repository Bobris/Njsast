using Njsast.Reader;

namespace Njsast.Ast
{
    /// An `export` statement
    public class AstExport : AstStatement
    {
        /// [AstDefun|AstDefinitions|AstDefClass?] An exported definition
        public AstNode ExportedDefinition;

        /// [AstNode?] An exported value
        public AstNode ExportedValue;

        /// [Boolean] Whether this is the default exported value of this module
        public bool IsDefault;

        /// [AstNameMapping*?] List of exported names
        public StructList<AstNameMapping> ExportedNames;

        /// [AstString?] Name of the file to load exports from
        public AstString ModuleName;

        public AstExport(Parser parser, Position startPos, Position endPos, AstString source, AstNode declaration,
            ref StructList<AstNameMapping> specifiers) : base(parser, startPos, endPos)
        {
            ModuleName = source;
            if (declaration is AstDefun || declaration is AstDefinitions || declaration is AstDefClass)
            {
                ExportedDefinition = declaration;
            }
            else
            {
                ExportedValue = declaration;
            }

            ExportedNames.TransferFrom(ref specifiers);
        }

        public AstExport(Parser parser, Position startPos, Position endPos, AstNode declaration, bool isDefault) : base(
            parser, startPos, endPos)
        {
            if (declaration is AstDefun || declaration is AstDefinitions || declaration is AstDefClass)
            {
                ExportedDefinition = declaration;
            }
            else
            {
                ExportedValue = declaration;
            }

            IsDefault = isDefault;
        }

        public override void Visit(TreeWalker w)
        {
            base.Visit(w);
            w.Walk(ModuleName);
            w.Walk(ExportedDefinition);
            w.Walk(ExportedValue);
            w.WalkList(ExportedNames);
        }
    }
}
