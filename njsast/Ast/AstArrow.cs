using Njsast.Reader;

namespace Njsast.Ast
{
    /// An ES6 Arrow function ((a) => b)
    public class AstArrow : AstLambda
    {
        public bool Inlined;

        public AstArrow(Parser parser, Position startPos, Position endPos, AstSymbolDeclaration name, ref StructList<AstNode> argNames, bool isGenerator, bool async, ref StructList<AstNode> body) : base(parser, startPos, endPos, name, ref argNames, isGenerator, async, ref body)
        {
        }
    }
}
