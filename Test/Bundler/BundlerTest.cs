using System;
using System.Collections.Generic;
using Njsast.Bundler;
using Njsast.Compress;
using Njsast.Output;
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
                var expected = testData.InputContent.TryGetValue("out/" + name, out var content) ? content : "";
                Assert.Equal(expected, genContent);
            }
        }

        public static Dictionary<string, string> BundlerTestCore(BundlerTestData testData)
        {
            var output = new Dictionary<string, string>();
            var bundler = new BundlerImpl(new BundlerCtx(testData, output));
            bundler.PartToMainFilesMap =
                new Dictionary<string, IReadOnlyList<string>> {{"bundle", new[] {"index.js"}}};
            bundler.Mangle = true;
            bundler.CompressOptions = CompressOptions.Default;
            bundler.OutputOptions = new OutputOptions {Beautify = true};
            bundler.Run();
            return output;
        }

        public class BundlerCtx : IBundlerCtx
        {
            readonly BundlerTestData _testData;
            readonly Dictionary<string, string> _output;

            public BundlerCtx(BundlerTestData testData, Dictionary<string, string> output)
            {
                _testData = testData;
                _output = output;
            }

            public string? ReadContent(string fileName)
            {
                _testData.InputContent.TryGetValue(fileName, out var res);
                return res;
            }

            public IReadOnlyList<string> GetPlainJsDependencies(string fileName)
            {
                return Array.Empty<string>();
            }

            public string GenerateBundleName(string forName)
            {
                return "cbm-" + forName + ".js";
            }

            public string ResolveRequire(string name, string @from)
            {
                var res = PathUtils.Join(PathUtils.Parent("./" + from), name);
                if (res.StartsWith("./", StringComparison.Ordinal)) res = res.Substring(2);
                if (res.EndsWith(".json", StringComparison.Ordinal)) return res;
                return res + ".js";
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
