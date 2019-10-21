using System.IO;
using Njsast.Compress;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using PuppeteerSharp;
using Xunit;

namespace FunctionalTest.Compress
{
    public class CompressBobrilFunctionalTest : TwoPagesBrowserTestBase
    {
        readonly ICompressOptions _bobrilTestCompressOptions = new CompressOptions
        {
            EnableBlockElimination = false,
            EnableBooleanCompress = false,
            EnableEmptyStatementElimination = false,
            EnableFunctionReturnCompress = false,
            EnableUnreachableCodeElimination = false,
            EnableVariableHoisting = true,
            EnableUnusedFunctionElimination = false,
            MaxPasses = 1
        };
        
        readonly NavigationOptions _navigationOptions = new NavigationOptions
        {
            Timeout = 10000,
            WaitUntil = new[] {WaitUntilNavigation.Load, WaitUntilNavigation.DOMContentLoaded}
        };

        const string BobrilTestPath = "Input/Compress/Bobril";
        protected override string RuntimeTemplate { get; }

        public CompressBobrilFunctionalTest(BrowserFixture browserFixture) : base(browserFixture)
        {
            RuntimeTemplate = File.ReadAllText($"{BobrilTestPath}/TestRuntime.html");
        }

        [Theory]
        [CompressBobrilFunctionalTestDataProvider(BobrilTestPath)]
        public async void OriginalCodeShouldHaveSameOutputAsCompressed(CompressFunctionalTestData testData)
        {
            var htmlA = InjectScriptToRuntimeTemplate(testData.Name, testData.Input);
            await PageA.SetContentAsync(htmlA, _navigationOptions);
            foreach (var command in testData.Commands)
            {
                await PerformCommand(command, PageA);
            }
            await TaskA;
            Assert.Equal(testData.ExpectedStderr, string.Join("\n", StderrA));
            Assert.Equal(testData.ExpectedStdout, string.Join("\n", StdoutA));
            var minified = Optimize(testData.Input, _bobrilTestCompressOptions);
            var htmlB = InjectScriptToRuntimeTemplate($"{testData.Name} - minified", minified);
            await PageB.SetContentAsync(htmlB, _navigationOptions);
            foreach (var command in testData.Commands)
            {
                await PerformCommand(command, PageB);
            }
            await TaskB;
            Assert.Equal(testData.ExpectedStderr, string.Join("\n", StderrB));
            Assert.Equal(testData.ExpectedStdout, string.Join("\n", StdoutB));
        }

        string Optimize(string input, ICompressOptions compressOptions)
        {
            var parser = new Parser(new Options(), input);
            var toplevel = parser.Parse();
            toplevel = toplevel.Compress(compressOptions);
            var outMinJsBuilder = new SourceMapBuilder();
            toplevel.PrintToBuilder(outMinJsBuilder, new OutputOptions());
            return outMinJsBuilder.Content();
        }
    }
}