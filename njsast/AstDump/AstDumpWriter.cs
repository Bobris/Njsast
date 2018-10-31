using System;
using Njsast.Ast;

namespace Njsast.AstDump
{
    public class AstDumpWriter : IAstDumpWriter
    {
        int _indent;

        public void Indent()
        {
            _indent++;
        }

        public void Dedent()
        {
            _indent--;
        }

        public void Print(AstNode node)
        {
            Console.WriteLine(new String(' ', _indent * 2) + node.GetType().Name.Substring(3) + " " + node.Start.Line +
                              ":" + node.Start.Column + " - " + node.End.Line + ":" + node.End.Column);
        }

        public void PrintProp(string name, string value)
        {
            Console.WriteLine(new String(' ', _indent * 2 + 1) + name + ": " + value);
        }
    }
}