using System;
using Njsast.AstDump;
using Njsast.Reader;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            var parser = new Parser(new Options(), "6*7");
            var toplevel = parser.Parse();
            var dumper = new DumpAst(new AstDumpWriter(new ConsoleLineSink()));
            dumper.Walk(toplevel);
        }
    }
}
