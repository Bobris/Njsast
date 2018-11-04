using System;
using System.Diagnostics;
using System.IO;
using Njsast.AstDump;
using Njsast.Reader;

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
                var parser = new Parser(new Options(), input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                var outast = strSink.ToString();
                if (intxt != outast)
                {
                    errors++;
                    Console.WriteLine("Difference in "+file);
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

        static void Main(string[] args)
        {
            RunAllTests();
            return;
            var parser = new Parser(new Options(), "6*7");
            var toplevel = parser.Parse();
            var dumper = new DumpAst(new AstDumpWriter(new ConsoleLineSink()));
            dumper.Walk(toplevel);
        }
    }
}
