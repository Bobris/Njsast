using System;
using System.IO;
using Njsast.Ast;
using Njsast.AstDump;
using Njsast.Bobril;
using Njsast.ConstEval;
using Njsast.Output;
using Njsast.Reader;
using Njsast.Runtime;
using Njsast.Scope;
using Njsast.SourceMap;
using Njsast.Utils;
using Test.ConstEval;

namespace Test
{
    class Program
    {
        static void RunAllTests()
        {
            var tests = 0;
            var errors = 0;
            foreach (var fileDep in Directory.EnumerateFiles("Input", "*.js",
                new EnumerationOptions { RecurseSubdirectories = true }))
            {
                var file = PathUtils.Normalize(fileDep);
                if (file.StartsWith("Input/ConstEval/dep-"))
                    continue;
                var input = File.ReadAllText(file);
                tests++;
                if (file.StartsWith("Input/Parser"))
                {
                    TestParser(file, input, ref errors);
                }
                else if (file.StartsWith("Input/ConstEval"))
                {
                    TestConstEval(file, input, ref errors);
                }
            }

            Console.ForegroundColor = errors == 0 ? ConsoleColor.Green : ConsoleColor.Red;
            Console.WriteLine($"Total {errors} differences in {tests} tests");
            Console.ResetColor();
            Environment.ExitCode = errors == 0 ? 0 : 1;
        }

        static void TestConstEval(string file, string input, ref int errors)
        {
            var innicejs = ReadIn(file, "nicejs");
            var outnicejs = "";
            try
            {
                var files = new TestImportResolver();
                var ctx = new ResolvingConstEvalCtx(file, files);
                var parser = new Parser(new Options(), input);
                var toplevel = parser.Parse();
                new ScopeParser().FigureOutScope(toplevel);
                var lastStatement = ((AstSimpleStatement)toplevel.Body[toplevel.Body.Count - 1]).Body;
                var isConst = lastStatement.IsConstValue(ctx);
                var val = lastStatement.ConstValue(ctx);
                outnicejs = isConst ? "Const\n" : "Not const\n";
                if (val != null)
                {
                    var valAst = TypeConverter.ToAst(val);
                    var outputOptions = new OutputOptions();
                    outputOptions.Beautify = true;
                    outnicejs += valAst.PrintToString(outputOptions);
                }
            }
            catch (SyntaxError e)
            {
                outnicejs = e.Message;
            }

            CheckError(innicejs, outnicejs, ref errors, "const eval", file, "nicejs");
        }

        static void TestParser(string file, string input, ref int errors)
        {
            var inast = ReadIn(file, "txt");
            var inminjs = ReadIn(file, "minjs");
            var inminjsmap = ReadIn(file, "minjs.map");
            var innicejs = ReadIn(file, "nicejs");
            var innicejsmap = ReadIn(file, "nicejs.map");

            //Console.WriteLine(file);
            //Console.WriteLine(input);
            var outast = "";
            var outminjs = "";
            var outminjsmap = "";
            var outnicejs = "";
            var outnicejsmap = "";
            try
            {
                var sourceFile = PathUtils.SplitDirAndFile(file).Item2;
                var parser = new Parser(new Options { SourceFile = sourceFile }, input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                toplevel.FigureOutScope();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outast = strSink.ToString();
                var outminjsBuilder = new SourceMapBuilder();
                var outputOptions = new OutputOptions();
                toplevel.PrintToBuilder(outminjsBuilder, outputOptions);
                outminjsBuilder.AddText($"//# sourceMappingURL={PathUtils.ChangeExtension(sourceFile, "minjs.map")}");
                outminjs = outminjsBuilder.Content();
                outminjsmap = outminjsBuilder.Build(".", ".").ToString();
                var outnicejsBuilder = new SourceMapBuilder();
                outputOptions = new OutputOptions {Beautify = true};
                toplevel.PrintToBuilder(outnicejsBuilder, outputOptions);
                outnicejsBuilder.AddText($"//# sourceMappingURL={PathUtils.ChangeExtension(sourceFile, "nicejs.map")}");
                outnicejs = outnicejsBuilder.Content();
                outnicejsmap = outnicejsBuilder.Build(".", ".").ToString();
                toplevel.Mangle();
            }
            catch (SyntaxError e)
            {
                outast = e.Message;
            }

            CheckError(inast, outast, ref errors, "AST", file, "txt");
            CheckError(inminjs, outminjs, ref errors, "minified js", file, "minjs");
            CheckError(inminjsmap, outminjsmap, ref errors, "minified js map", file, "minjs.map");
            CheckError(innicejs, outnicejs, ref errors, "beautified js", file, "nicejs");
            CheckError(innicejsmap, outnicejsmap, ref errors, "beautified js map", file, "nicejs.map");
        }

        static void CheckError(string intext, string outtext, ref int errors, string whatText, string file, string ext)
        {
            if (intext != outtext)
            {
                errors++;
                Console.WriteLine("Difference in " + whatText + " " + file);
                var outfile = "Wrong/" + file.Substring(6, file.Length - 6 - 3) + "." + ext;
                Directory.CreateDirectory(Path.GetDirectoryName(outfile));
                File.WriteAllText(outfile, outtext);
            }
        }

        static string ReadIn(string file, string ext)
        {
            var infile = file.Substring(0, file.Length - 3) + "." + ext;
            if (File.Exists(infile))
            {
                return File.ReadAllText(infile);
            }

            return "";
        }

        static void Debug()
        {
            var files = new InMemoryImportResolver();
            files.Add("/b", @"""use strict"";
Object.defineProperty(exports, ""__esModule"", { value: true });
exports.exp = 42;
");
            var parser = new Parser(new Options(),
                "var b = require(\"./b\"); b.exp;"
            );
            var toplevel = parser.Parse();
            toplevel.FigureOutScope();
            var lastStatement = ((AstSimpleStatement)toplevel.Body[toplevel.Body.Count - 1]).Body;
            var ctx = new ResolvingConstEvalCtx("/a", files);
            var isConst = lastStatement.IsConstValue(ctx);
            var val = lastStatement.ConstValue(ctx);
            var dumper = new DumpAst(new AstDumpWriter(new ConsoleLineSink()));
            dumper.Walk(toplevel);
            //toplevel.Mangle(new ScopeOptions {TopLevel = true});
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
            var sourceInfo = GatherBobrilSourceInfo.Gather(toplevel, ctx, (IConstEvalCtx myctx, string text) =>
            {
                return PathUtils.Join(PathUtils.Parent(myctx.SourceName), text);
            });

            var builder = new SourceMapBuilder();
            //builder.AddText("// first comment");
            var adder = builder.CreateSourceAdder(source,
                SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            var sourceReplacer = new SourceReplacer();
            var m1 = sourceInfo.Assets[0];
            sourceReplacer.Replace(m1.StartLine, m1.StartCol, m1.EndLine, m1.EndCol, "\""+m1.Name+"\"");
            sourceReplacer.Apply(adder);
            //builder.AddSource(SourceMap.RemoveLinkToSourceMap(File.ReadAllText("Sample/index.js")), SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            Directory.CreateDirectory("Output");
            File.WriteAllText("Output/out.js", builder.Content() + "//# sourceMappingURL=out.js.map");
            File.WriteAllText("Output/out.js.map", builder.Build("..", "..").ToString());
        }

        static void Main()
        {
            RunAllTests();
            //Debug();
            //SourceMapEmitDebug();
        }
    }
}
