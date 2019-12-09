using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using Njsast.Bobril;
using Njsast.ConstEval;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
using Xunit;

namespace Test.SourceInfo
{
    public class BobrilSourceInfoTest
    {
        [Theory]
        [BobrilSourceInfoDataProvider("Input/BobrilSourceInfo")]
        public void ShouldCorrectlyGatherSourceInfo(BobrilSourceInfoTestData testData)
        {
            var outFiles = BobrilSourceInfoTestCore(testData);

            foreach (var (name, genContent) in outFiles)
            {
                var expected = testData.InputContent.TryGetValue("out/" + name, out var content) ? content : "";
                Assert.Equal(expected, genContent);
            }
        }

        public static Dictionary<string, string> BobrilSourceInfoTestCore(BobrilSourceInfoTestData testData)
        {
            var output = new Dictionary<string, string>();

            var source = SourceMap.RemoveLinkToSourceMap(testData.InputContent["index.js"]);
            var toplevel = Parser.Parse(source);
            toplevel.FigureOutScope();
            var files = new InMemoryImportResolver();
            var ctx = new ResolvingConstEvalCtx("index.js", files);
            var sourceInfo = GatherBobrilSourceInfo.Gather(toplevel, ctx,
                (myctx, text) =>
                {
                    if (text.StartsWith('.'))
                        return PathUtils.Join(PathUtils.Parent(myctx.SourceName), text);
                    return text;
                });

            var builder = new SourceMapBuilder();
            var adder = builder.CreateSourceAdder(source,
                SourceMap.Parse(testData.InputContent["index.js.map"], "."));
            var sourceReplacer = new SourceReplacer();
            //var m1 = sourceInfo.Assets![0];
            //sourceReplacer.Replace(m1.StartLine, m1.StartCol, m1.EndLine, m1.EndCol, "\"" + m1.Name + "\"");
            sourceReplacer.Apply(adder);
            //builder.AddSource(SourceMap.RemoveLinkToSourceMap(File.ReadAllText("Sample/index.js")), SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            output["index.sourceinfo.json"] = JsonSerializer.Serialize(sourceInfo, new JsonSerializerOptions { WriteIndented = true, IgnoreNullValues = true });
            output["index.js"] = builder.Content() + "//# sourceMappingURL=index.js.map";
            output["index.js.map"] = builder.Build(".", "..").ToString();

            return output;
        }
    }
}
