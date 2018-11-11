using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `true` atom
    public class AstTrue : AstBoolean
    {
        public AstTrue(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("true");
        }
    }
}
