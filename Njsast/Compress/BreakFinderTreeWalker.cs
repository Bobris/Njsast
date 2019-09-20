using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.Compress
{
    public class BreakFinderTreeWalker : TreeWalker
    {
        AstSwitch? _lastSwitchStatement = null;
        AstIterationStatement? _lastIterationStatement = null;
        protected override void Visit(AstNode node)
        {
            if (node is AstIterationStatement astIterationStatement)
            {
                ProcessBreakable(astIterationStatement, null);
                return;
            }

            if (node is AstSwitch astSwitch)
            {
                ProcessBreakable(null, astSwitch);
                return;
            }
            
            if (node is AstBreak astBreak)
            {
                if (_lastIterationStatement != null)
                {
                    _lastIterationStatement.HasBreak = true;
                    return;
                }

                if (_lastSwitchStatement != null)
                {
                    return;
                }
                
                throw new SyntaxError("break must be inside loop or switch", node.Start);
            }

            void ProcessBreakable(AstIterationStatement? astIterationStatement, AstSwitch astSwitch)
            {
                var safeLastIterationStatement = _lastIterationStatement;
                var safeLastSwitchStatement = _lastSwitchStatement;
                _lastIterationStatement = astIterationStatement;
                _lastSwitchStatement = astSwitch;
                Descend();
                _lastIterationStatement = safeLastIterationStatement;
                _lastSwitchStatement = safeLastSwitchStatement;
                StopDescending();
            }
        }
    }
}