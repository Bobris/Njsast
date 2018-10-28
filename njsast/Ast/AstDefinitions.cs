using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for `var` or `const` nodes (variable declarations/initializations)
    public class AstDefinitions : AstStatement
    {
        /// [AstVarDef*] array of variable definitions
        public StructList<AstVarDef> Definitions;

        public AstDefinitions(Parser parser, Position startPos, Position endPos, ref StructList<AstVarDef> definitions) : base(parser, startPos, endPos)
        {
            Definitions.TransferFrom(ref definitions);
        }
    }
}
