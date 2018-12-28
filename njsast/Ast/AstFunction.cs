using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A function expression
    public class AstFunction : AstLambda
    {
        public bool Inlined;

        public AstFunction(Parser parser, Position startPos, Position endPos, AstSymbolDeclaration name,
            ref StructList<AstNode> argNames, bool isGenerator, bool async, ref StructList<AstNode> body) : base(parser,
            startPos, endPos, name, ref argNames, isGenerator, async, ref body)
        {
        }

        public override bool NeedParens(OutputContext output)
        {
            if (output.FirstInStatement())
            {
                return true;
            }

            if (output.Options.Webkit)
            {
                var p = output.Parent();
                if (p is AstPropAccess propAccess && propAccess.Expression == this)
                {
                    return true;
                }
            }

            if (output.Options.WrapIife)
            {
                var p = output.Parent();
                return p is AstCall call && call.Expression == this;
            }

            return false;
        }
    }
}
