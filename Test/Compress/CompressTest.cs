using Njsast.AstDump;
using Njsast.Compress;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Xunit;

namespace Test.Compress
{
    public class CompressTest
    {
        public static readonly ICompressOptions UnreachableCodeBlocksAndEmptyStatementsCompressOptions = new CompressOptions
        {
            EnableBlockElimination = true,
            EnableEmptyStatementElimination = true,
            EnableUnreachableCodeElimination = true,
            MaxPasses = 3
        };
        
        public static readonly ICompressOptions BlockEliminationCompressOptions = new CompressOptions
        {
            EnableBlockElimination = true,
            MaxPasses = 1
        };

        public static readonly ICompressOptions EmptyStatementEliminationCompressOptions = new CompressOptions
        {
            EnableEmptyStatementElimination = true,
            MaxPasses = 1
        };
        
        [Theory]
        [CompressDataProvider("Input/Compress/UnreachableCode/AnotherOptimizationsEnabled")]
        public void ShouldRemoveUnreachableCodeUnnecessaryBlocksAndEmptyStatements(CompressTestData testData)
        {
            RunAndAssert(testData, UnreachableCodeBlocksAndEmptyStatementsCompressOptions);
        }

        [Theory]
        [CompressDataProvider("Input/Compress/RemoveBlock")]
        public void ShouldRemoveUnnecessaryBlocks(CompressTestData testData)
        {
            Assert.Equal(1u, BlockEliminationCompressOptions.MaxPasses);
            RunAndAssert(testData, BlockEliminationCompressOptions);
        }

        [Theory]
        [CompressDataProvider("Input/Compress/EmptyStatement")]
        public void ShouldRemoveEmptyStatements(CompressTestData testData)
        {
            RunAndAssert(testData, EmptyStatementEliminationCompressOptions);
        }

        void RunAndAssert(CompressTestData testData, ICompressOptions options)
        {
            var (outAst, outMinJs, outNiceJs) = CompressTestCore(testData, options);
            
            Assert.Equal(testData.ExpectedAst, outAst);
            Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
            Assert.Equal(testData.ExpectedMinJs, outMinJs);
        }

        public static (string outAst, string outMinJs, string outNiceJs)  CompressTestCore(CompressTestData testData, ICompressOptions options)
        {
            string outAst;
            var outNiceJs = string.Empty;
            var outMinJs = string.Empty;
            try
            {
                var parser = new Parser(new Options(), testData.InputContent);
                var toplevel = parser.Parse();
                toplevel.FigureOutScope();
                toplevel = toplevel.Compress(options);
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