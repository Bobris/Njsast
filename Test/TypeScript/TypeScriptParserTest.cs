using System.Collections.Generic;
using System.IO;
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
        var (outAst, outNiceJs, outNiceJsMap, outMinJs, outMinJsMap) = TypeScriptParserTestCore(testData);

        if (testData.ExpectedAst.Length != 0)
            Assert.Equal(testData.ExpectedAst, outAst);
        Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
        if (testData.ExpectedNiceJsMap != null)
            Assert.Equal(testData.ExpectedNiceJsMap, outNiceJsMap);
        Assert.Equal(testData.ExpectedMinJs, outMinJs);
        if (testData.ExpectedMinJsMap != null)
            Assert.Equal(testData.ExpectedMinJsMap, outMinJsMap);
    }

    [Fact]
    public void TypeScriptParserShouldRejectUnsupportedStage3AccessorDecorators()
    {
        var input = File.ReadAllText("Input/TypeScript/UnsupportedDecorators/stage3-accessor.ts");

        var exception = Assert.Throws<SyntaxError>(() => TypeScriptParser.Parse(input, new Options
        {
            SourceFile = "stage3-accessor.ts",
            SourceType = SourceType.Module
        }));

        Assert.Contains("Stage 3 decorators are not supported", exception.Message);
    }

    [Fact]
    public void TypeScriptParserShouldRejectModuleNamespaceDeclarationsLikeTypeScript7()
    {
        var input = File.ReadAllText("Input/TypeScript/UnsupportedNamespaces/module.ts");

        var exception = Assert.Throws<SyntaxError>(() => TypeScriptParser.Parse(input, new Options
        {
            SourceFile = "module.ts",
            SourceType = SourceType.Module
        }));

        Assert.Contains("The 'module' keyword cannot be used in namespace declarations", exception.Message);
    }

    public static (string outAst, string outNiceJs, string outNiceJsMap, string outMinJs, string outMinJsMap) TypeScriptParserTestCore(
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
        var outNiceJsMap = outNiceJsBuilder.Build(".", ".").ToString();

        var outMinJsBuilder = new SourceMapBuilder();
        toplevel.PrintToBuilder(outMinJsBuilder, new OutputOptions());
        outMinJsBuilder.AddText(
            $"//# sourceMappingURL={PathUtils.ChangeExtension(testData.SourceName, "minjs.map")}");
        var outMinJs = outMinJsBuilder.Content();
        var outMinJsMap = outMinJsBuilder.Build(".", ".").ToString();

        return (outAst, outNiceJs, outNiceJsMap, outMinJs, outMinJsMap);
    }
}
