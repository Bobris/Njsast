using System.Collections.Generic;
using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for all statements introducing a lexical scope
    public class AstScope : AstBlock
    {
        /// [Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope
        public Dictionary<string, SymbolDef> Variables;

        /// [Object/S] like `variables`, but only lists function declarations
        public Dictionary<string, SymbolDef> Functions;

        public bool HasUseStrictDirective;

        /// [boolean/S] tells whether this scope uses the `with` statement
        public bool UsesWith;

        /// [boolean/S] tells whether this scope contains a direct call to the global `eval`
        public bool UsesEval;

        /// [AstScope?/S] link to the parent scope
        public AstScope ParentScope;

        /// [SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes
        public StructList<SymbolDef> Enclosed;

        /// [integer/S] current index for mangling variables (used internally by the mangler)
        public int Cname;

        public AstScope(Parser parser, Position startPos, Position endPos) : base(parser, startPos, endPos)
        {
        }

        public AstScope SetUseStrict(bool useStrict)
        {
            HasUseStrictDirective = useStrict;
            return this;
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("HasUseStrictDirective", HasUseStrictDirective);
        }
    }
}
