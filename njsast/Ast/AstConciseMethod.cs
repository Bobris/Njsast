using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// An ES6 concise method inside an object or class
    public class AstConciseMethod : AstObjectProperty
    {
        // [string|undefined] the original quote character, if any
        //public string Quote;

        /// [boolean] is this method static (classes only)
        public bool Static;

        /// [boolean] is this a generator method
        public bool IsGenerator;

        /// [boolean] is this method async
        public bool Async;

        public AstConciseMethod(Parser parser, Position startLoc, Position endLoc, string key, AstNode value,
            bool @static, bool isGenerator, bool async) : base(parser, startLoc, endLoc, key, value)
        {
            Static = @static;
            IsGenerator = isGenerator;
            Async = async;
        }

        public AstConciseMethod(Parser parser, Position startLoc, Position endLoc, AstNode key, AstNode value,
            bool @static, bool isGenerator, bool async) : base(parser, startLoc, endLoc, key, value)
        {
            Static = @static;
            IsGenerator = isGenerator;
            Async = async;
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Static", Static.ToString());
            writer.PrintProp("IsGenerator", IsGenerator.ToString());
            writer.PrintProp("Async", Async.ToString());
        }
    }
}
