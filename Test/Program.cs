using System;
using System.IO;
using System.Linq;
using Njsast.Bobril;
using Njsast.Compress;
using Njsast.ConstEval;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
using Test.Bundler;
using Test.Compress;
using Test.ConstEval;
using Test.Reader;
using Test.SourceInfo;

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

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/RemoveSideEffectFreeCode")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressTest.RemoveSideEffectFreeCodeCompressOptions);
                CheckCompressError(compressTestData, outAst, outMinJs, outNiceJs);
            }

            foreach (var compressTestData in new CompressDataProviderAttribute("Input/Compress/All")
                .GetTypedData())
            {
                var (outAst, outMinJs, outNiceJs) = CompressTest.CompressTestCore(compressTestData,
                    CompressOptions.Default);
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

            foreach (var bundlerTestData in new BobrilSourceInfoDataProviderAttribute("Input/BobrilSourceInfo").GetTypedData())
            {
                var outFiles = BobrilSourceInfoTest.BobrilSourceInfoTestCore(bundlerTestData);
                tests++;
                foreach (var pair in outFiles)
                {
                    CheckError(
                        bundlerTestData.InputContent.TryGetValue("out/" + pair.Key, out var inputContent)
                            ? inputContent
                            : "", pair.Value, ref errors, "bobril sourceinfo result", bundlerTestData.Input + "/out/" + pair.Key,
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
            var tests = 0;
            var errors = 0;
            foreach (var bundlerTestData in new BundlerDataProviderAttribute("Input/Bundler").GetTypedData())
            {
                if (bundlerTestData.Name != "SplitWithAllSharedMain") continue;
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
        }

        static void Main()
        {
            RunAllTests();
            //Debug();
        }
    }
}
