using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `Infinity` value
    public class AstInfinity : AstAtom
    {
        public AstInfinity(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("Infinity");
        }
    }
}
