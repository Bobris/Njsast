using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
using Xunit;

namespace Test.Reader
{
    public class ParserTest
    {
        const string SimpleVarStatement = "var a = 1";

        const string SimpleVarStatementAst =
            "Toplevel 1:1 - 1:10\n  Var 1:1 - 1:10\n    VarDef 1:5 - 1:10\n      SymbolVar 1:5 - 1:6\n        Name: a\n      Number 1:9 - 1:10\n        Value: 1\n        Literal: 1\n";

        const string SimpleVarStatementMultilineAst =
            "Toplevel 1:1 - 4:2\n  Var 1:1 - 4:2\n    VarDef 2:1 - 4:2\n      SymbolVar 2:1 - 2:2\n        Name: a\n      Number 4:1 - 4:2\n        Value: 1\n        Literal: 1\n";

        [Theory]
        [ParserTestDataProvider("Input/Parser")]
        public void ParserShouldProduceExpectedResultOrSyntaxError(ParserTestData testData)
        {
            var (outAst, outMinJs, outMinJsMap, outNiceJs, outNiceJsMap) = ParseTestCore(testData);

            Assert.Equal(testData.ExpectedAst, outAst);
            Assert.Equal(testData.ExpectedMinJs, outMinJs);
            Assert.Equal(testData.ExpectedMinJsMap, outMinJsMap);
            Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
            Assert.Equal(testData.ExpectedNiceJsMap, outNiceJsMap);
        }

        public static (string outAst, string outMinJs, string outMinJsMap, string outNiceJs, string outNiceJsMap) ParseTestCore(
            ParserTestData testData)
        {
            string outAst;
            var outMinJs = string.Empty;
            var outMinJsMap = string.Empty;
            var outNiceJs = string.Empty;
            var outNiceJsMap = string.Empty;
            try
            {
                var parser = new Parser(
                    new Options {SourceFile = testData.SourceName, EcmaVersion = testData.EcmaScriptVersion},
                    testData.Input);
                var toplevel = parser.Parse();
                if (testData.InputSourceMap != null)
                {
                    SourceMap.Parse(testData.InputSourceMap, ".").ResolveInAst(toplevel);
                }
                var strSink = new StringLineSink();
                toplevel.FigureOutScope();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outAst = strSink.ToString();
                var outMinJsBuilder = new SourceMapBuilder();
                var outputOptions = new OutputOptions();
                toplevel.PrintToBuilder(outMinJsBuilder, outputOptions);
                outMinJsBuilder.AddText($"//# sourceMappingURL={PathUtils.ChangeExtension(testData.SourceName, "minjs.map")}");
                outMinJs = outMinJsBuilder.Content();
                outMinJsMap = outMinJsBuilder.Build(".", ".").ToString();
                var outNiceJsBuilder = new SourceMapBuilder();
                outputOptions = new OutputOptions {Beautify = true};
                toplevel.PrintToBuilder(outNiceJsBuilder, outputOptions);
                outNiceJsBuilder.AddText(
                    $"//# sourceMappingURL={PathUtils.ChangeExtension(testData.SourceName, "nicejs.map")}");
                outNiceJs = outNiceJsBuilder.Content();
                outNiceJsMap = outNiceJsBuilder.Build(".", ".").ToString();
                toplevel.Mangle();
            }
            catch (SyntaxError e)
            {
                outAst = e.Message;
            }

            return (outAst, outMinJs, outMinJsMap, outNiceJs, outNiceJsMap);
        }

        [Theory]
        // More info about white space characters https://en.wikipedia.org/wiki/Whitespace_character
        [InlineData('\u0009' /*CHARACTER TABULATION*/, SimpleVarStatementAst)]
        [InlineData('\u000b' /*LINE TABULATION*/, SimpleVarStatementAst)]
        [InlineData('\u000c' /*FORM FEED*/, SimpleVarStatementAst)]
        [InlineData('\u0020' /*SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u00a0' /*NO-BREAK SPACE*/, SimpleVarStatementAst)]
        [InlineData('\ufeff' /*ZERO WIDTH NO-BREAK SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u1680' /*OGHAM SPACE MARK*/, SimpleVarStatementAst)]
        [InlineData('\u2000' /*EN QUAD*/, SimpleVarStatementAst)]
        [InlineData('\u2001' /*EM QUAD*/, SimpleVarStatementAst)]
        [InlineData('\u2002' /*EN SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2003' /*EM SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2004' /*THREE-PER-EM SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2005' /*FOUR-PER-EM SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2006' /*SIX-PER-EM SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2007' /*FIGURE SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2008' /*PUNCTUATION SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u2009' /*THIN SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u200A' /*HAIR SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u202F' /*NARROW NO-BREAK SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u205F' /*MEDIUM MATHEMATICAL SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u3000' /*IDEOGRAPHIC SPACE*/, SimpleVarStatementAst)]
        [InlineData('\u180e' /*MONGOLIAN VOWEL SEPARATOR*/, "Unexpected character '\u180e' (1:4)")]
        [InlineData('\u200b' /*ZERO WIDTH SPACE*/, "Unexpected character '\u200b' (1:4)")]
        [InlineData('\u200c' /*ZERO WIDTH NON-JOINER*/, "Unexpected character '\u200c' (1:8)")]
        [InlineData('\u200d' /*ZERO WIDTH JOINER*/, "Unexpected character '\u200d' (1:8)")]
        [InlineData('\u2060' /*WORD JOINER*/, "Unexpected character '\u2060' (1:4)")]
        [InlineData('\u0085' /*NEXT LINE*/, "Unexpected character '\u0085' (1:4)")]
        [InlineData('\u000a' /*LINE FEED*/, SimpleVarStatementMultilineAst)]
        [InlineData('\u000d' /*CARRIAGE RETURN*/, SimpleVarStatementMultilineAst)]
        [InlineData('\u2028' /*LINE SEPARATOR*/, SimpleVarStatementMultilineAst)]
        [InlineData('\u2029' /*PARAGRAPH SEPARATOR*/, SimpleVarStatementMultilineAst)]
        public void ParserShouldSkipAllowedUnicodeWhiteSpaceCharactersOrProduceSyntaxError(char whiteSpaceChar,
            string expectedAst)
        {
            var input = SimpleVarStatement.Replace(' ', whiteSpaceChar);
            string outAst;
            try
            {
                var parser = new Parser(new Options(), input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outAst = strSink.ToString();
            }
            catch (SyntaxError e)
            {
                outAst = e.Message;
            }

            Assert.Equal(expectedAst, outAst);
        }
    }
}
