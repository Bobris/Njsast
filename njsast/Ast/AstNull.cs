using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// The `null` atom
    public class AstNull : AstAtom
    {
        public AstNull(Parser parser, Position startLoc, Position endLoc) : base(parser, startLoc, endLoc)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("null");
        }
    }
}
