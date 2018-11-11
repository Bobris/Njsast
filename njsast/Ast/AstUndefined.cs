using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `undefined` value
    public class AstUndefined : AstAtom
    {
        public AstUndefined(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("undefined");
        }
    }
}
