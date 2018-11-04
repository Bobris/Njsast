using System;
using System.IO;
using Njsast.AstDump;
using Njsast.Reader;

namespace Test
{
    class Program
    {
        static void RunAllTests()
        {
            foreach (var file in Directory.EnumerateFiles("Input", "*.js",
                new EnumerationOptions {RecurseSubdirectories = true}))
            {
                var input = File.ReadAllText(file);
                var parser = new Parser(new Options(), input);
                var toplevel = parser.Parse();
                var strSink = new StringLineSink();
                var dumper = new DumpAst(new AstDumpWriter(strSink));
                dumper.Walk(toplevel);
                var outast = strSink.ToString();
                var outfile = "Wrong/" + file.Substring(6, file.Length - 6 - 3) + ".txt";
                Directory.CreateDirectory(Path.GetDirectoryName(outfile));
                File.WriteAllText(outfile, outast);
            }
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
