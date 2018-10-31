using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A string literal
    public class AstString : AstConstant
    {
        /// [string] the contents of this string
        public string Value;

        // [string] the original quote character
        //public string Quote;

        public AstString(Parser parser, Position startLoc, Position endLoc, string value) : base(parser, startLoc, endLoc)
        {
            Value = value;
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Value", Value);
        }
    }
}
