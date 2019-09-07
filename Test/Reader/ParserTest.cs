using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
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
            var sourceFile = PathUtils.SplitDirAndFile(testData.Name+".js").Item2;
            var outMinJs = string.Empty;
            var outMinJsMap = string.Empty;
            var outNiceJs = string.Empty;
            var outNiceJsMap = string.Empty;
            try
            {
                var parser = new Parser(new Options { SourceFile = sourceFile }, testData.Input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                toplevel.FigureOutScope();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outAst = strSink.ToString();
                var outMinJsBuilder = new SourceMapBuilder();
                var outputOptions = new OutputOptions();
                toplevel.PrintToBuilder(outMinJsBuilder, outputOptions);
                outMinJsBuilder.AddText($"//# sourceMappingURL={PathUtils.ChangeExtension(sourceFile, "minjs.map")}");
                outMinJs = outMinJsBuilder.Content();
                outMinJsMap = outMinJsBuilder.Build(".", ".").ToString();
                var outNiceJsBuilder = new SourceMapBuilder();
                outputOptions = new OutputOptions {Beautify = true};
                toplevel.PrintToBuilder(outNiceJsBuilder, outputOptions);
                outNiceJsBuilder.AddText($"//# sourceMappingURL={PathUtils.ChangeExtension(sourceFile, "nicejs.map")}");
                outNiceJs = outNiceJsBuilder.Content();
                outNiceJsMap = outNiceJsBuilder.Build(".", ".").ToString();
                toplevel.Mangle();
            }
            catch (SyntaxError e)
            {
                outAst = e.Message;
            }

            Assert.Equal(testData.ExpectedAst, outAst);
            Assert.Equal(testData.ExpectedMinJs, outMinJs);
            Assert.Equal(testData.ExpectedMinJsMap, outMinJsMap);
            Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
            Assert.Equal(testData.ExpectedNiceJsMap, outNiceJsMap);
        }
    }
}
