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

        public AstScope(Parser parser, Position startPos, Position endPos, ref StructList<AstNode> body) : base(parser,
            startPos, endPos, ref body)
        {
        }

        public AstScope(AstNode from) : base(from)
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

        public virtual void InitScopeVars(AstScope parentScope)
        {
            Variables = new Dictionary<string, SymbolDef>();
            Functions = new Dictionary<string, SymbolDef>();
            UsesWith = false;
            UsesEval = false;
            ParentScope = parentScope;
            Enclosed = new StructList<SymbolDef>();
            Cname = -1;
        }

        public SymbolDef DefVariable(AstSymbol symbol, AstNode init)
        {
            SymbolDef def;
            if (Variables.ContainsKey(symbol.Name))
            {
                def = Variables[symbol.Name];
                def.Orig.Add(symbol);
                if (def.Init != null && (!ReferenceEquals(def.Scope, symbol.Scope) || def.Init is AstFunction))
                {
                    def.Init = init;
                }
            }
            else
            {
                def = new SymbolDef(this, symbol, init);
                Variables.Add(symbol.Name, def);
                def.Global = ParentScope == null;
            }

            return symbol.Thedef = def;
        }

        public SymbolDef DefFunction(AstSymbol symbol, AstNode init)
        {
            var def = DefVariable(symbol, init);
            if (def.Init == null || def.Init is AstDefun) def.Init = init;
            if (!Functions.ContainsKey(symbol.Name))
                Functions.Add(symbol.Name, def);
            return def;
        }

        public SymbolDef FindVariable(AstSymbol symbol)
        {
            return FindVariable(symbol.Name);
        }

        public SymbolDef FindVariable(string name)
        {
            return Variables.ContainsKey(name) ? Variables[name] : ParentScope?.FindVariable(name);
        }

        public virtual AstScope Resolve()
        {
            return ParentScope;
        }
    }
}