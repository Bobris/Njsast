using System.Collections.Generic;
using Njsast.Bundler;
using Njsast.Utils;
using Test.ConstEval;
using Xunit;

namespace Test.Bundler
{
    public class BundlerTest
    {
        [Theory]
        [BundlerDataProvider("Input/Bundler")]
        public void ShouldCorrectlyBundle(BundlerTestData testData)
        {
            var outFiles = BundlerTestCore(testData);

            foreach (var (name, genContent) in outFiles)
            {
                var expected = testData.InputContent.TryGetValue(name, out var content) ? content : "";
                Assert.Equal(expected, genContent);
            }
        }

        public static Dictionary<string,string> BundlerTestCore(BundlerTestData testData)
        {
            var output = new Dictionary<string, string>();
            var bundler = new BundlerImpl(new BundlerCtx(testData, output));
            // TODO
            return output;
        }

        public class BundlerCtx : IBundlerCtx
        {
            readonly BundlerTestData _testData;
            readonly Dictionary<string, string> _output;

            public BundlerCtx(BundlerTestData testData, Dictionary<string,string> output)
            {
                _testData = testData;
                _output = output;
            }

            public string ReadContent(string fileName)
            {

                throw new System.NotImplementedException();
            }

            public IReadOnlyList<string> GetPlainJsDependencies(string fileName)
            {
                throw new System.NotImplementedException();
            }

            public string GenerateBundleName(string forName)
            {
                throw new System.NotImplementedException();
            }

            public string ResolveRequire(string name, string @from)
            {
                return PathUtils.Join(PathUtils.Parent(from), name);
            }

            public string JsHeaders(string forSplit, bool withImport)
            {
                return BundlerHelpers.JsHeaders(withImport);
            }

            public void WriteBundle(string name, string content)
            {
                _output[name] = content;
            }
        }
    }
}
