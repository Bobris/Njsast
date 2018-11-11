using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// An object instantiation.  Derives from a function call since it has exactly the same properties
    public class AstNew : AstCall
    {
        public AstNew(Parser parser, Position startLoc, Position endLoc, AstNode expression, ref StructList<AstNode> args) : base(parser, startLoc, endLoc, expression, ref args)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("new");
            output.Space();
            base.CodeGen(output);
        }
    }
}
