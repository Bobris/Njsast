using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using Njsast.Ast;
using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;
using Njsast.Runtime;
using Njsast.Scope;

namespace Test
{
    class Program
    {
        static void RunAllTests()
        {
            var tests = 0;
            var errors = 0;
            foreach (var fileDep in Directory.EnumerateFiles("Input", "*.js",
                new EnumerationOptions {RecurseSubdirectories = true}))
            {
                var file = fileDep.Replace('\\', '/');
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
                var parser = new Parser(new Options(), input);
                var toplevel = parser.Parse();
                new ScopeParser().FigureOutScope(toplevel);
                var lastStatement = ((AstSimpleStatement)toplevel.Body[toplevel.Body.Count - 1]).Body;
                var isConst = lastStatement.IsConstValue();
                var val = lastStatement.ConstValue();
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
            var parser = new Parser(new Options(),
                "var a = 10; a+2;"
            );
            var toplevel = parser.Parse();
            toplevel.FigureOutScope();
            var lastStatement = ((AstSimpleStatement)toplevel.Body[toplevel.Body.Count - 1]).Body;
            var isConst = lastStatement.IsConstValue();
            var val = lastStatement.ConstValue();
            var dumper = new DumpAst(new AstDumpWriter(new ConsoleLineSink()));
            dumper.Walk(toplevel);
            //toplevel.Mangle(new ScopeOptions {TopLevel = true});
            var outputOptions = new OutputOptions();
            outputOptions.Beautify = true;
            Console.WriteLine(toplevel.PrintToString(outputOptions));
        }

        static void Main()
        {
            RunAllTests();
            //Debug();
        }
    }
}
