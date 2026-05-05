using System;
using Njsast.EsmToCjs;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
using Xunit;

namespace Test.EsmToCjs;

public class EsmToCjsTest
{
    [Theory]
    [EsmToCjsDataProvider("Input/EsmToCjs")]
    public void ShouldCorrectlyTransformEsmToCjs(EsmToCjsTestData testData)
    {
        var (outCjs, outCjsMap) = EsmToCjsTestCore(testData);

        Assert.Equal(testData.ExpectedCjs, outCjs);
        AssertMapEqual(testData.ExpectedCjsMap, outCjsMap);
    }

    public static (string outCjs, string outCjsMap) EsmToCjsTestCore(EsmToCjsTestData testData)
    {
        string outCjs;
        string outCjsMap;
        try
        {
            var sourceName = PathUtils.Name(testData.InputFileName);
            var parser = new Parser(
                new Options
                {
                    SourceFile = sourceName,
                    EcmaVersion = 2020,
                    SourceType = SourceType.Module
                },
                testData.InputContent);

            var toplevel = parser.Parse();
            toplevel.FigureOutScope();

            var transformer = new EsmToCjsTreeTransformer();
            transformer.Transform(toplevel);

            toplevel.FigureOutScope();

            var outCjsBuilder = new SourceMapBuilder();
            var outputOptions = new OutputOptions { Beautify = true, Ecma = 6 };
            toplevel.PrintToBuilder(outCjsBuilder, outputOptions);

            outCjs = outCjsBuilder.Content();
            outCjsMap = outCjsBuilder.Build(".", ".").ToString();
        }
        catch (SyntaxError e)
        {
            outCjs = e.Message;
            outCjsMap = "";
        }

        return (outCjs, outCjsMap);
    }

    static void AssertMapEqual(string expected, string actual)
    {
        if (string.IsNullOrEmpty(expected) && string.IsNullOrEmpty(actual))
            return;

        var expectedMap = string.IsNullOrEmpty(expected) ? null : SourceMap.Parse(expected, ".");
        var actualMap = string.IsNullOrEmpty(actual) ? null : SourceMap.Parse(actual, ".");

        if (expectedMap == null && actualMap == null)
            return;
        if (expectedMap == null || actualMap == null)
            throw new Exception($"Source map mismatch: expected {(expectedMap == null ? "null" : "present")}, actual {(actualMap == null ? "null" : "present")}");

        Assert.Equal(expectedMap.version, actualMap.version);
        Assert.Equal(expectedMap.sources.Count, actualMap.sources.Count);
        for (var i = 0; i < expectedMap.sources.Count; i++)
            Assert.Equal(expectedMap.sources[i], actualMap.sources[i]);

        if (expectedMap.names != null || actualMap.names != null)
        {
            Assert.True(expectedMap.names != null && actualMap.names != null, "One source map has names, the other doesn't");
            Assert.Equal(expectedMap.names!.Count, actualMap.names!.Count);
            for (var i = 0; i < expectedMap.names.Count; i++)
                Assert.Equal(expectedMap.names[i], actualMap.names[i]);
        }
    }
}
