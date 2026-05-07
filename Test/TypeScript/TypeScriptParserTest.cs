using System.Collections.Generic;
using Njsast.AstDump;
using Njsast.Bobril;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
using Xunit;

namespace Test.TypeScript;

public sealed class TypeScriptParserTest
{
    [Theory]
    [TypeScriptParserTestDataProvider("Input/TypeScript/Parser")]
    public void TypeScriptParserShouldProduceExpectedNjsastOutput(TypeScriptParserTestData testData)
    {
        var (outAst, outNiceJs, outMinJs) = TypeScriptParserTestCore(testData);

        if (testData.ExpectedAst.Length != 0)
            Assert.Equal(testData.ExpectedAst, outAst);
        Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
        Assert.Equal(testData.ExpectedMinJs, outMinJs);
    }

    public static (string outAst, string outNiceJs, string outMinJs) TypeScriptParserTestCore(
        TypeScriptParserTestData testData)
    {
        var comments = new List<(bool block, string content, SourceLocation location)>();
        var commentListener = new CommentListener();
        var toplevel = TypeScriptParser.Parse(testData.Input, new Options
        {
            SourceFile = testData.SourceName,
            ParseJSX = testData.SourceName.EndsWith(".tsx"),
            SourceType = SourceType.Module,
            OnComment = (block, content, location) =>
            {
                commentListener.OnComment(block, content, location);
                comments.Add((block, content, location));
            }
        });
        commentListener.Walk(toplevel);

        var strSink = new StringLineSink();
        toplevel.FigureOutScope();
        var dumper = new DumpAst(new AstDumpWriter(strSink));
        dumper.Walk(toplevel);
        foreach (var (block, content, location) in comments)
        {
            strSink.Print(
                $"{(block ? "Block" : "Line")} Comment ({location.Start.ToShortString()}-{location.End.ToShortString()}): {content}");
        }

        var outAst = strSink.ToString();
        var outNiceJsBuilder = new SourceMapBuilder();
        toplevel.PrintToBuilder(outNiceJsBuilder, new OutputOptions { Beautify = true });
        outNiceJsBuilder.AddText(
            $"//# sourceMappingURL={PathUtils.ChangeExtension(testData.SourceName, "nicejs.map")}");
        var outNiceJs = outNiceJsBuilder.Content();

        var outMinJsBuilder = new SourceMapBuilder();
        toplevel.PrintToBuilder(outMinJsBuilder, new OutputOptions());
        outMinJsBuilder.AddText(
            $"//# sourceMappingURL={PathUtils.ChangeExtension(testData.SourceName, "minjs.map")}");
        var outMinJs = outMinJsBuilder.Content();

        return (outAst, outNiceJs, outMinJs);
    }
}
