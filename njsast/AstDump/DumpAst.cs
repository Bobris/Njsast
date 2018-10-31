using Njsast.Ast;

namespace Njsast.AstDump
{
    public class DumpAst : TreeWalker
    {
        readonly IAstDumpWriter _writer;

        public DumpAst(IAstDumpWriter writer)
        {
            _writer = writer;
        }

        protected override void Visit(AstNode node)
        {
            _writer.Print(node);
            node.DumpScalars(_writer);
            StopDescending();
            _writer.Indent();
            Descend();
            _writer.Dedent();
        }
    }
}
