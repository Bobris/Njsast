using Njsast.Reader;

namespace Njsast.Ast
{
    /// An `import` statement
    public class AstImport : AstNode
    {
        /// [AstSymbolImport] The name of the variable holding the module's default export.
        public AstSymbolImport ImportedName;

        /// [AstNameMapping*] The names of non-default imported variables
        public StructList<AstNameMapping> ImportedNames;

        /// [AstString] String literal describing where this module came from
        public AstString ModuleName;

        public AstImport(Parser parser, Position startLoc, Position endLoc, AstString moduleName, AstSymbolImport importName, ref StructList<AstNameMapping> specifiers) : base(parser, startLoc, endLoc)
        {
            ModuleName = moduleName;
            ImportedName = importName;
            ImportedNames.TransferFrom(ref specifiers);
        }
    }
}
