using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using Njsast.Ast;
using Njsast.AstDump;
using Njsast.ConstEval;
using Njsast.Output;
using Njsast.Reader;
using Njsast.Runtime;
using Njsast.Scope;
using Njsast.SourceMap;
using Njsast.Utils;

namespace Test
{
    class Program
    {
        public class TestImportResolver : IImportResolver
        {
            public string ResolveName(JsModule module)
            {
                if (module.Name.StartsWith("./", StringComparison.Ordinal))
                {
                    return PathUtils.Join(PathUtils.Parent(module.ImportedFrom), module.Name);
                }

                throw new NotSupportedException("TestImportResolver supports only relative paths " +
                                                module.ImportedFrom + " " + module.Name);
            }

            public string LoadContent(string fileName)
            {
                return File.ReadAllText(fileName + ".js");
            }
        }

        static void RunAllTests()
        {
            var tests = 0;
            var errors = 0;
            foreach (var fileDep in Directory.EnumerateFiles("Input", "*.js",
                new EnumerationOptions {RecurseSubdirectories = true}))
            {
                var file = fileDep.Replace('\\', '/');
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
                var lastStatement = ((AstSimpleStatement) toplevel.Body[toplevel.Body.Count - 1]).Body;
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
            var innicejs = ReadIn(file, "nicejs");

            //Console.WriteLine(file);
            //Console.WriteLine(input);
            var outast = "";
            var outminjs = "";
            var outnicejs = "";
            try
            {
                var parser = new Parser(new Options(), input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                toplevel.FigureOutScope();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                outast = strSink.ToString();
                var outputOptions = new OutputOptions();
                outminjs = toplevel.PrintToString(outputOptions);
                outputOptions = new OutputOptions();
                outputOptions.Beautify = true;
                outnicejs = toplevel.PrintToString(outputOptions);
                toplevel.Mangle();
            }
            catch (SyntaxError e)
            {
                outast = e.Message;
            }

            CheckError(inast, outast, ref errors, "AST", file, "txt");
            CheckError(inminjs, outminjs, ref errors, "minified js", file, "minjs");
            CheckError(innicejs, outnicejs, ref errors, "beautified js", file, "nicejs");
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
            var lastStatement = ((AstSimpleStatement) toplevel.Body[toplevel.Body.Count - 1]).Body;
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
            var builder = new SourceMapBuilder();
            //builder.AddText("// first comment");
            var adder = builder.CreateSourceAdder(SourceMap.RemoveLinkToSourceMap(File.ReadAllText("Sample/index.js")),
                SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            adder.Add(0,0,int.MaxValue,0);
            //builder.AddSource(SourceMap.RemoveLinkToSourceMap(File.ReadAllText("Sample/index.js")), SourceMap.Parse(File.ReadAllText("Sample/index.js.map"), "../Sample"));
            Directory.CreateDirectory("Output");
            File.WriteAllText("Output/out.js", builder.Content()+"//# sourceMappingURL=out.js.map");
            File.WriteAllText("Output/out.js.map", builder.Build("..", "..").ToString());
        }

        static void Main()
        {
            //RunAllTests();
            //Debug();
            SourceMapEmitDebug();
        }
    }
}
