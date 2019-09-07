using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;
using Xunit;

namespace Test.Reader
{
    public class ParserTest
    {
        [Theory]
        [ParserTestDataProvider("Input/Parser")]
        public void ParserShouldProduceExpectedResultOrSyntaxError(ParserTestData testData)
        {
            string outAst;
            var outMinJs = string.Empty;
            var outNiceJs = string.Empty;
            try
            {
                var parser = new Parser(new Options(), testData.Input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                toplevel.FigureOutScope();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outAst = strSink.ToString();
                var outputOptions = new OutputOptions();
                outMinJs = toplevel.PrintToString(outputOptions);
                outputOptions = new OutputOptions {Beautify = true};
                outNiceJs = toplevel.PrintToString(outputOptions);
                toplevel.Mangle();
            }
            catch (SyntaxError e)
            {
                outAst = e.Message;
            }

            Assert.Equal(testData.ExpectedAst, outAst);
            Assert.Equal(testData.ExpectedMinJs, outMinJs);
            Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
        }
    }
}