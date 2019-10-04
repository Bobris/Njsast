using System.IO;
using Njsast.Compress;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using PuppeteerSharp;
using Xunit;

namespace FunctionalTest.Compress
{
    public class CompressSimpleFunctionalTest : TwoPagesBrowserTestBase
    {
        readonly ICompressOptions _simpleTestCompressOptions = new CompressOptions
        {
            EnableBlockElimination = true,
            EnableBooleanCompress = true,
            EnableEmptyStatementElimination = true,
            EnableFunctionReturnCompress = true,
            EnableUnreachableCodeElimination = true,
            MaxPasses = 2
        };

        readonly NavigationOptions _navigationOptions = new NavigationOptions
        {
            Timeout = 10,
            WaitUntil = new[] {WaitUntilNavigation.Load}
        };
        
        const string SimpleTestPath = "Input/Compress/Simple";
        readonly string _runtimeHtml;
        public CompressSimpleFunctionalTest(BrowserFixture browserFixture) : base(browserFixture)
        {
            _runtimeHtml = File.ReadAllText($"{SimpleTestPath}/TestRuntime.html");
        }

        [Theory]
        [CompressSimpleFunctionalTestDataProvider(SimpleTestPath)]
        public async void OriginalCodeShouldHaveSameOutputAsCompressed(CompressSimpleFunctionalTestData testData)
        {
            var htmlA = GetRuntime(testData.Input);
            await PageA.SetContentAsync(htmlA, _navigationOptions);
            Assert.Equal(testData.ExpectedStderr, string.Join("\n", StderrA));
            Assert.Equal(testData.ExpectedStdout, string.Join("\n", StdoutA));
            var minified = Optimize(testData.Input, _simpleTestCompressOptions);
            var htmlB = GetRuntime(minified);
            await PageB.SetContentAsync(htmlB, _navigationOptions);
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

        string GetRuntime(string injectCode)
        {
            return _runtimeHtml.Replace("%%INJECT%%", injectCode);
        }
    }
}