using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `const` statement
    public class AstConst : AstDefinitions
    {
        public AstConst(Parser parser, Position startPos, Position endPos, ref StructList<AstVarDef> definitions) :
            base(parser, startPos, endPos, ref definitions)
        {
        }
    }
}
