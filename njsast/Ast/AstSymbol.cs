using Njsast.AstDump;
using Njsast.Reader;
using Njsast.Scope;

namespace Njsast.Ast
{
    /// Base class for all symbols
    public class AstSymbol : AstNode
    {
        /// [AstScope/S] the current scope (not necessarily the definition scope)
        public AstScope Scope;

        /// [string] name of this symbol
        public string Name;

        /// [SymbolDef/S] the definition of this symbol
        public SymbolDef Thedef;

        public AstSymbol(Parser parser, Position startLoc, Position endLoc, string name) : base(parser, startLoc,
            endLoc)
        {
            Name = name;
        }

        protected AstSymbol(AstSymbol symbol) : base(symbol)
        {
            Name = symbol.Name;
        }

        protected AstSymbol(Position startLoc, Position endLoc, string name) : base(startLoc, endLoc)
        {
            Name = name;
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("Name", Name);
        }

        public void MarkEnclosed(ScopeOptions options)
        {
            for (var s = Scope; s != null; s = s.ParentScope)
            {
                s.Enclosed.AddUnique(Thedef);
                if (options.KeepFunctionNames)
                {
                    foreach (var keyValuePair in s.Functions)
                    {
                        Thedef.Scope.Enclosed.AddUnique(keyValuePair.Value);
                    }
                }

                if (s == Thedef.Scope) break;
            }
        }

        public void Reference(ScopeOptions options)
        {
            Thedef.References.Add(this);
            MarkEnclosed(options);
        }
    }
}