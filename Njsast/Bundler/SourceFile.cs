using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Bundler
{
    public class SourceFile
    {
        internal string Name;
        internal AstToplevel Ast;
        internal StructList<string> Requires = new StructList<string>();
        internal StructList<string> LazyRequires = new StructList<string>();
        internal AstSymbol? WholeExport;
        internal StructList<SelfExport> SelfExports = new StructList<SelfExport>();
        internal IDictionary<string, AstNode>? Exports = null;

        internal SourceFile(string name, AstToplevel ast)
        {
            Name = name;
            Ast = ast;
        }
    }

    abstract class SelfExport
    {
    }

    class SimpleSelfExport : SelfExport
    {
        internal readonly string Name;
        internal readonly AstSymbol Symbol;

        internal SimpleSelfExport(string name, AstSymbol symbol)
        {
            Name = name;
            Symbol = symbol;
        }
    }

    class ExportStarSelfExport : SelfExport
    {
        internal readonly string SourceName;

        internal ExportStarSelfExport(string sourceName)
        {
            SourceName = sourceName;
        }
    }
}
