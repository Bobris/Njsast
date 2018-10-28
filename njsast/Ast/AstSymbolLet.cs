using Njsast.Reader;

namespace Njsast.Ast
{
    /// A block-scoped `let` declaration
    public class AstSymbolLet : AstSymbolBlockDeclaration
    {
        public AstSymbolLet(AstSymbol name, AstNode init) : base(name, init)
        {
        }
    }
}
