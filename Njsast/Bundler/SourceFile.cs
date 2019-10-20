using System.Collections;
using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Bundler
{
    public class SourceFile
    {
        internal string Name;
        public AstToplevel Ast;
        public StructList<string> Requires = new StructList<string>();
        public StructList<string> LazyRequires = new StructList<string>();
        public AstSymbol? WholeExport;
        public StructList<SelfExport> SelfExports = new StructList<SelfExport>();
        public IDictionary<string, AstNode>? Exports = null;
        public StructList<string> PlainJsDependencies = new StructList<string>();
        public string? PartOfBundle;

        internal SourceFile(string name, AstToplevel ast)
        {
            Name = name;
            Ast = ast;
        }
    }

    public abstract class SelfExport
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

        public override string ToString()
        {
            return $"{Name}: {Symbol.PrintToString()}";
        }
    }

    class ExportStarSelfExport : SelfExport
    {
        internal readonly string SourceName;

        internal ExportStarSelfExport(string sourceName)
        {
            SourceName = sourceName;
        }

        public override string ToString()
        {
            return $"*: {SourceName}";
        }
    }
}
