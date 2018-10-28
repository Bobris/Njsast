using Njsast.Reader;

namespace Njsast.Ast
{
    /// A function expression
    public class AstFunction : AstLambda
    {
        public bool Inlined;

        public AstFunction(Parser parser, Position startPos, Position endPos, AstSymbolDeclaration name, ref StructList<AstNode> argNames, bool isGenerator, bool async, ref StructList<AstNode> body) : base(parser, startPos, endPos, name, ref argNames, isGenerator, async, ref body)
        {
        }
    }
}
