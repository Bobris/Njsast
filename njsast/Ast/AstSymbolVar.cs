namespace Njsast.Ast
{
    /// Symbol defining a variable
    public class AstSymbolVar : AstSymbolDeclaration
    {
        public AstSymbolVar(AstSymbol name) : base(name, null)
        {
        }
    }
}
