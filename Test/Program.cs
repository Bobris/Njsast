using System;
using System.IO;
using System.Linq;
using Njsast.Bobril;
using Njsast.ConstEval;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
using Test.Bundler;
using Test.Compress;
using Test.ConstEval;
using Test.Reader;

namespace Test
{
    class Program
    {
        static void RunAllTests()
        {
            var tests = 0;
            var errors = 0;
            foreach (var parserData in new ParserTestDataProviderAttribute("Input/Parser").GetParserData())
            {
                tests++;
                var (outAst, outMinJs, outMinJsMap, outNiceJs, outNiceJsMap) = ParserTest.ParseTestCore(parserData);
                var file = parserData.Name;
                CheckError(parserData.ExpectedAst, outAst, ref errors, "AST", file, "txt");
                CheckError(parserData.ExpectedMinJs, outMinJs, ref errors, "minified js", file, "minjs");
                CheckError(parserData.ExpectedMinJsMap, outMinJsMap, ref errors, "minified js map", file, "minjs.map");
                CheckError(parserData.ExpectedNiceJs, outNiceJs, ref errors, "beautified js", file, "nicejs");
                CheckError(parserData.ExpectedNiceJsMap, outNiceJsMap, ref errors, "beautified js map", file,
                    "nicejs.map");
            }

            foreach (var constEvalData in new ConstEvalDataProviderAttribute("Input/ConstEval").GetTypedData())
            {
                var file = constEvalData.Name;
                var outNiceJs = ConstEvalTest.ConstEvalTestCore(constEvalData);
                tests++;
                CheckError(constEvalData.ExpectedNiceJs, outNiceJs, ref errors, "const eval", file, "nicejs");
            }

            foreach (var testData in new ModuleParserDataProviderAttribute("Input/ModuleParser").GetTypedData()
                .Concat(new ModuleParserDataProviderAttribute("Input/ModuleParser", "*.json").GetTypedData()))
            {
                var file = testData.Name;
                var outNiceJs = ModuleParserTest.ModuleParserTestCore(testData);
                tests++;
                CheckError(testData.ExpectedNiceJs, outNiceJs, ref errors, "module parser", file, "nicejs");
            }

            foreach (var compressTestData in new CompressDataProviderAttribute(
                "Input/Compress/UnreachableCode/AnotherOptimizationsEnabled").GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.UnreachableCodeBlocksAndEmptyStatementsCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/UnreachableCode/Only")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.UnreachableCodeBlocksCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/RemoveBlock")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.BlockEliminationCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/EmptyStatement")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.EmptyStatementEliminationCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/BooleanCompress")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) =
                    CompressTest.CompressTestCore(compressTestData, CompressTest.BooleanCompressCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/FunctionReturn")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.FunctionReturnCompressCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/VariableHoisting",
                "*.js", false).GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) =
                    CompressTest.CompressTestCore(compressTestData, CompressTest.VariableHostingCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute(
                "Input/Compress/VariableHoisting/2Passes").GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.VariableHosting2PassesCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/UnusedFunction")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.UnusedFunctionEliminationCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var bundlerTestData in new BundlerDataProviderAttribute("Input/Bundler").GetTypedData())
            {
                var outFiles = BundlerTest.BundlerTestCore(bundlerTestData);
                tests++;
                foreach (var pair in outFiles)
                {
                    CheckError(
                        bundlerTestData.InputContent.TryGetValue("out/" + pair.Key, out var inputContent)
                            ? inputContent
                            : "", pair.Value, ref errors, "bundler result", bundlerTestData.Input + "/out/" + pair.Key,
                        "");
                }
            }

            Console.ForegroundColor = errors == 0 ? ConsoleColor.Green : ConsoleColor.Red;
            Console.WriteLine($"Total {errors} differences in {tests} tests");
            Console.ResetColor();
            Environment.ExitCode = errors == 0 ? 0 : 1;

            void CheckCompressError(CompressTestData compressTestData, string outAst, string outMinJs, string outNiceJs)
            {
                var file = compressTestData.Name;
                tests++;
                CheckError(compressTestData.ExpectedAst, outAst, ref errors, "AST", file, "txt");
                CheckError(compressTestData.ExpectedMinJs, outMinJs, ref errors, "minified js", file, "minjs");
                CheckError(compressTestData.ExpectedNiceJs, outNiceJs, ref errors, "beutified js", file, "nicejs");
            }
        }

        static void CheckError(string inText, string outText, ref int errors, string whatText, string file, string ext)
        {
            if (inText != outText)
            {
                errors++;
                Console.WriteLine("Difference in " + whatText + " " + file);
                var outfile = "Wrong/" + file.Substring(6, file.Length - 6) + (ext != "" ? "." + ext : "");
                Directory.CreateDirectory(Path.GetDirectoryName(outfile));
                File.WriteAllText(outfile, outText);
            }
        }

        static void Debug()
        {
            var parser = new Parser(new Options {EcmaVersion = 6},
                "import(\"i\")"
            );
            var toplevel = parser.Parse();
            toplevel.FigureOutScope();
            var outputOptions = new OutputOptions();
            outputOptions.Beautify = true;
            Console.WriteLine(toplevel.PrintToString(outputOptions));
        }

        static void SourceMapEmitDebug()
        {
            var source = SourceMap.RemoveLinkToSourceMap(File.ReadAllText("Sample/index.js"));
            var parser = new Parser(new Options(),
                source
            );
            var toplevel = parser.Parse();
            toplevel.FigureOutScope();
            var files = new InMemoryImportResolver();
            var ctx = new ResolvingConstEvalCtx("src/a.js", files);
            var sourceInfo = GatherBobrilSourceInfo.Gather(toplevel, ctx,
                (myctx, text) => { return PathUtils.Join(PathUtils.Parent(myctx.SourceName), text); });

            var builder = new SourceMapBuilder();
            //builder.AddText("// first comment");
            var adder = builder.CreateSourceAdder(source,
                SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            var sourceReplacer = new SourceReplacer();
            var m1 = sourceInfo.Assets![0];
            sourceReplacer.Replace(m1.StartLine, m1.StartCol, m1.EndLine, m1.EndCol, "\"" + m1.Name + "\"");
            sourceReplacer.Apply(adder);
            //builder.AddSource(SourceMap.RemoveLinkToSourceMap(File.ReadAllText("Sample/index.js")), SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            Directory.CreateDirectory("Output");
            File.WriteAllText("Output/out.js", builder.Content() + "//# sourceMappingURL=out.js.map");
            File.WriteAllText("Output/out.js.map", builder.Build("..", "..").ToString());
        }

        static void UnreachableCodeDebug()
        {
            var parser = new Parser(new Options(), File.ReadAllText("Input/Compress/UnreachableCode/simpleIf.js"));
            var toplevel = parser.Parse();
            toplevel.FigureOutScope();
            toplevel.Compress();
        }

        static void Main()
        {
            RunAllTests();
            //UnreachableCodeDebug();
            //Debug();
            //SourceMapEmitDebug();
        }
    }
}
