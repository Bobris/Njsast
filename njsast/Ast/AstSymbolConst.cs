using Njsast.Reader;

namespace Njsast.Ast
{
    /// A constant declaration
    public class AstSymbolConst : AstSymbolBlockDeclaration
    {
        public AstSymbolConst(AstSymbol name, AstNode init) : base(name, init)
        {
        }
    }
}
