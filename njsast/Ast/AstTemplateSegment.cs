using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A segment of a template string literal
    public class AstTemplateSegment : AstNode
    {
        /// Content of the segment
        public string Value;

        /// Raw content of the segment
        public string Raw;

        public AstTemplateSegment(Parser parser, Position startLoc, Position endLoc, string value, string raw) : base(parser, startLoc, endLoc)
        {
            Value = value;
            Raw = raw;
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Value", Value);
            writer.PrintProp("Raw", Raw);
        }
    }
}
