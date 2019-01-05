using System;
using System.IO;
using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;
using Njsast.Scope;

namespace Test
{
    class Program
    {
        static void RunAllTests()
        {
            var tests = 0;
            var errors = 0;
            foreach (var file in Directory.EnumerateFiles("Input", "*.js",
                new EnumerationOptions {RecurseSubdirectories = true}))
            {
                var input = File.ReadAllText(file);
                tests++;
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

            Console.ForegroundColor = errors == 0 ? ConsoleColor.Green : ConsoleColor.Red;
            Console.WriteLine($"Total {errors} differences in {tests} tests");
            Console.ResetColor();
            Environment.ExitCode = errors == 0 ? 0 : 1;
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
            var infile = file.Substring(0, file.Length - 3) + "."+ext;
            if (File.Exists(infile))
            {
                return File.ReadAllText(infile);
            }

            return "";
        }

        static void Debug()
        {
            var parser = new Parser(new Options(),
                "var a = 10; var b = 20; function foo() { var a = 20; console.log(a+b);} function bar(a) {var b = 30; console.log(a+b);} foo(); bar(20);"
                );
            var toplevel = parser.Parse();
            var dumper = new DumpAst(new AstDumpWriter(new ConsoleLineSink()));
            dumper.Walk(toplevel);
            toplevel.Mangle(new ScopeOptions { TopLevel = true });
            var outputOptions = new OutputOptions();
            //outputOptions.Beautify = true;
            Console.WriteLine(toplevel.PrintToString(outputOptions));
        }

        static void Main()
        {
            RunAllTests();
            //Debug();
        }
    }
}
