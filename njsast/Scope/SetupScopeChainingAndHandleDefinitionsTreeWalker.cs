using Njsast.Ast;

namespace Njsast.Scope
{
    public class SetupScopeChainingAndHandleDefinitionsTreeWalker : TreeWalker
    {
        private readonly ScopeOptions _options;
        private AstScope _currentScope;
        private AstScope _defun;

        public SetupScopeChainingAndHandleDefinitionsTreeWalker(ScopeOptions options, AstToplevel astToplevel)
        {
            _options = options;
            _currentScope = astToplevel.ParentScope = null;
            _defun = null;
        }

        protected override void Visit(AstNode node)
        {
            if (node is AstCatch astCatch)
            {
                var saveScope = _currentScope;
                _currentScope = new AstScope(astCatch);
                _currentScope.InitScopeVars(saveScope);
                StopDescending();
                Descend();
                _currentScope = saveScope;
                return;
            }

            if (node is AstScope astScope)
            {
                astScope.InitScopeVars(_currentScope);
                var saveScope = _currentScope;
                var saveDefun = _defun;
                _defun = _currentScope = astScope;
                StopDescending();
                Descend();
                _defun = saveDefun;
                _currentScope = saveScope;
                return;
            }

            if (node is AstWith)
            {
                for (var s = _currentScope; _currentScope != null; s = s.ParentScope)
                {
                    s.UsesWith = true;
                }

                return;
            }

            if (node is AstSymbol astSymbol)
            {
                astSymbol.Scope = _currentScope;
            }

            if (node is AstLabel astLabel)
            {
                // TODO check behavior
                astLabel.Thedef =
                    new SymbolDef(astLabel.Scope, astLabel, astLabel); // TODO convert astSymbol to SymbolDef
                astLabel.References = new StructList<AstLoopControl>();
            }

            if (node is AstSymbolDefun astSymbolDefun)
            {
                // This should be defined in the parent scope, as we encounter the
                // AstDefun node before getting to its AstSymbol.
                (astSymbolDefun.Scope = _defun.ParentScope.Resolve()).DefFunction(astSymbolDefun, _defun);
            }
            else if (node is AstSymbolLambda astSymbolLambda)
            {
                var def = _defun.DefFunction(astSymbolLambda, astSymbolLambda.Name == "arguments" ? null : _defun);
                if (_options.Ie8) def.Defun = _defun.ParentScope.Resolve();
            }
            else if (node is AstSymbolVar astSymbolVar)
            {
                _defun.DefVariable(astSymbolVar, null);
                if (_defun != _currentScope)
                {
                    astSymbolVar.MarkEnclosed(_options);
                    var def = _currentScope.FindVariable(astSymbolVar);
                    astSymbolVar.Thedef = def;
                    astSymbolVar.Reference(_options);
                }
            }
            else if (node is AstSymbolCatch astSymbolCatch)
            {
                _currentScope.DefVariable(astSymbolCatch, null).Defun = _defun;
            }

            // TODO add lexical scope parsing for > ES2016 (let, const, arrow,...)
        }
    }
}