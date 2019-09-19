﻿using System;
using System.IO;
using Njsast.Bobril;
using Njsast.ConstEval;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;
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
                CheckError(parserData.ExpectedNiceJsMap, outNiceJsMap, ref errors, "beautified js map", file, "nicejs.map");
            }
            foreach (var constEvalData in new ConstEvalDataProviderAttribute("Input/ConstEval").GetTypedData())
            {
                var file = constEvalData.Name;
                var outNiceJs = ConstEvalTest.ConstEvalTestCore(constEvalData);
                tests++;
                CheckError(constEvalData.ExpectedNiceJs, outNiceJs, ref errors, "const eval", file, "nicejs");
            }

            foreach (var unreachableCodeTestData in new UnreachableCodeDataProviderAttribute("Input/Compress/UnreachableCode").GetTypedData())
            {
                var file = unreachableCodeTestData.Name;
                var (outAst, outMinJs, outNiceJs) = UnreachableCodeTest.UnreachableCodeTestCore(unreachableCodeTestData);
                tests++;
                CheckError(unreachableCodeTestData.ExpectedAst, outAst, ref errors, "AST", file, "txt");
                CheckError(unreachableCodeTestData.ExpectedMinJs, outMinJs, ref errors, "minified js", file, "minjs");
                CheckError(unreachableCodeTestData.ExpectedNiceJs, outNiceJs, ref errors, "beutified js", file, "nicejs");
            }

            Console.ForegroundColor = errors == 0 ? ConsoleColor.Green : ConsoleColor.Red;
            Console.WriteLine($"Total {errors} differences in {tests} tests");
            Console.ResetColor();
            Environment.ExitCode = errors == 0 ? 0 : 1;
        }

        static void CheckError(string inText, string outText, ref int errors, string whatText, string file, string ext)
        {
            if (inText != outText)
            {
                errors++;
                Console.WriteLine("Difference in " + whatText + " " + file);
                var outfile = "Wrong/" + file.Substring(6, file.Length - 6) + "." + ext;
                Directory.CreateDirectory(Path.GetDirectoryName(outfile));
                File.WriteAllText(outfile, outText);
            }
        }

        static void Debug()
        {
            var parser = new Parser(new Options { EcmaVersion = 6 },
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
            var sourceInfo = GatherBobrilSourceInfo.Gather(toplevel, ctx, (myctx, text) =>
            {
                return PathUtils.Join(PathUtils.Parent(myctx.SourceName), text);
            });

            var builder = new SourceMapBuilder();
            //builder.AddText("// first comment");
            var adder = builder.CreateSourceAdder(source,
                SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            var sourceReplacer = new SourceReplacer();
            var m1 = sourceInfo.Assets![0];
            sourceReplacer.Replace(m1.StartLine, m1.StartCol, m1.EndLine, m1.EndCol, "\""+m1.Name+"\"");
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
            toplevel.RemoveUnreachableCode();
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
