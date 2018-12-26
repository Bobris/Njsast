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
                var infile = file.Substring(0, file.Length - 3) + ".txt";
                var intxt = "";
                tests++;
                if (File.Exists(infile))
                {
                    intxt = File.ReadAllText(infile);
                }

                string outast;
                try
                {
                    var parser = new Parser(new Options(), input);
                    var toplevel = parser.Parse();
                    var strSink = new StringLineSink();
                    var dumper = new DumpAst(new AstDumpWriter(strSink));
                    dumper.Walk(toplevel);
                    outast = strSink.ToString();
                }
                catch (SyntaxError e)
                {
                    outast = e.Message;
                }

                if (intxt != outast)
                {
                    errors++;
                    Console.WriteLine("Difference in " + file);
                    var outfile = "Wrong/" + file.Substring(6, file.Length - 6 - 3) + ".txt";
                    Directory.CreateDirectory(Path.GetDirectoryName(outfile));
                    File.WriteAllText(outfile, outast);
                }
            }

            Console.ForegroundColor = errors == 0 ? ConsoleColor.Green : ConsoleColor.Red;
            Console.WriteLine($"Total {errors} differences in {tests} tests");
            Console.ResetColor();
            Environment.ExitCode = errors == 0 ? 0 : 1;
        }

        static void Debug()
        {
            var parser = new Parser(new Options(),
                "var a = 10; var b = 20; function foo() { var a = 20; console.log(a+b);} function bar(a) {var b = 30; console.log(a+b);} foo(); bar(20);");
            var toplevel = parser.Parse();
            var dumper = new DumpAst(new AstDumpWriter(new ConsoleLineSink()));
            dumper.Walk(toplevel);
            var scopeParser = new ScopeParser(new ScopeOptions());
            scopeParser.FigureOutScope(toplevel);
            var outputOptions = new OutputOptions();
            //outputOptions.beautify = true;
            Console.WriteLine(toplevel.PrintToString(outputOptions));
        }

        static void Main()
        {
            RunAllTests();
            //Debug();
        }
    }
}
