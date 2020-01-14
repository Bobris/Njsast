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
            var adder = builder.CreateSourceAdder(source, testData.InputContent.ContainsKey("index.js.map") ?
                SourceMap.Parse(testData.InputContent["index.js.map"], "."): null);
            var sourceReplacer = new SourceReplacer();
            ProcessReplacements(sourceReplacer, sourceInfo);
            sourceReplacer.Apply(adder);
            builder.AddText("//# sourceMappingURL=index.js.map");
            output["index.sourceinfo.json"] = JsonSerializer
                .Serialize(sourceInfo, new JsonSerializerOptions {WriteIndented = true, IgnoreNullValues = true})
                .Replace("\r\n", "\n");
            output["index.js"] = builder.Content();
            output["index.js.map"] = builder.Build(".", "..").ToString();

            return output;
        }

        static void ProcessReplacements(SourceReplacer sourceReplacer, Njsast.Bobril.SourceInfo sourceInfo)
        {
            if (sourceInfo.VdomTranslations == null) return;
            foreach (var vdomTranslation in sourceInfo.VdomTranslations)
            {
                if (vdomTranslation.Message == null) continue;
                if (vdomTranslation.Replacements == null) continue;
                foreach (var rep in vdomTranslation.Replacements)
                {
                    if (rep.Type == Njsast.Bobril.SourceInfo.ReplacementType.MoveToPlace)
                    {
                        sourceReplacer.Move(rep.StartLine, rep.StartCol, rep.EndLine, rep.EndCol, rep.PlaceLine,
                            rep.PlaceCol);
                    }
                    else
                    {
                        var t = rep.Text;
                        if (rep.Type == Njsast.Bobril.SourceInfo.ReplacementType.MessageId)
                        {
                            t = JsonSerializer.Serialize(vdomTranslation.Message);
                        }

                        sourceReplacer.Replace(rep.StartLine, rep.StartCol, rep.EndLine, rep.EndCol,
                            t ?? "");
                    }
                }
            }
        }
    }
}
