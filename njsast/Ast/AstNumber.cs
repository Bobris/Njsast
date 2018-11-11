using System.Globalization;
using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A number literal
    public class AstNumber : AstConstant
    {
        /// [number] the numeric value
        public double Value;

        /// [string] numeric value as string (optional)
        public string Literal;

        public AstNumber(Parser parser, Position startLoc, Position endLoc, double value, string literal) : base(parser,
            startLoc, endLoc)
        {
            Value = value;
            Literal = literal;
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Value", Value.ToString(CultureInfo.InvariantCulture));
            writer.PrintProp("Literal", Literal);
        }

        public override void CodeGen(OutputContext output)
        {
            output.PrintNumber(Value);
        }
    }
}
