using Njsast.Ast;

namespace Njsast.Scope
{
    public class ScopeParser
    {
        private readonly ScopeOptions _options;

        public ScopeParser(ScopeOptions options)
        {
            _options = options;
        }

        public void FigureOutScope(AstToplevel toplevel)
        {
            TreeWalker treeWalker = new SetupScopeChainingAndHandleDefinitionsTreeWalker(_options, toplevel);
            treeWalker.Walk(toplevel);
            treeWalker = new FindBackReferencesAndEvalTreeWalker(_options, toplevel);
            treeWalker.Walk(toplevel);
            if (_options.Ie8)
            {
                treeWalker = new FixUpScopingIssuesWithInternetExplorerTreeWalker(_options, toplevel);
                treeWalker.Walk(toplevel);
            }
        }
    }
}