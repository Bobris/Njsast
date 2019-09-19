using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Xunit;

namespace Test.Compress
{
    public class UnreachableCodeTest
    {
        [Theory]
        [UnreachableCodeDataProvider("Input/Compress/UnreachableCode")]
        public void ShouldRemoveUnreachableCode(UnreachableCodeTestData testData)
        {
            var (outAst, outMinJs, outNiceJs) = UnreachableCodeTestCore(testData);
            
            Assert.Equal(testData.ExpectedAst, outAst);
            Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
            Assert.Equal(testData.ExpectedMinJs, outMinJs);
        }

        public static (string outAst, string outMinJs, string outNiceJs)  UnreachableCodeTestCore(UnreachableCodeTestData testData)
        {
            string outAst;
            var outNiceJs = string.Empty;
            var outMinJs = string.Empty;
            try
            {
                var parser = new Parser(new Options(), testData.InputContent);
                var toplevel = parser.Parse();
                toplevel.FigureOutScope();
                toplevel.RemoveUnreachableCode();
                var strSink = new StringLineSink();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outAst = strSink.ToString();
                var outMinJsBuilder = new SourceMapBuilder();
                toplevel.PrintToBuilder(outMinJsBuilder, new OutputOptions());
                outMinJs = outMinJsBuilder.Content();
                var outNiceJsBuilder = new SourceMapBuilder();
                toplevel.PrintToBuilder(outNiceJsBuilder, new OutputOptions {Beautify = true});
                outNiceJs = outNiceJsBuilder.Content();
            }
            catch (SyntaxError e)
            {
                outAst = e.Message;
            }

            return (outAst, outMinJs, outNiceJs);
        }
    }
}