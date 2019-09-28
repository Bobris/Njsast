using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.Compress
{
    public class BreakFinderTreeWalker : TreeWalker
    {
        protected override void Visit(AstNode node)
        {
            switch (node)
            {
                case AstLambda _:
                    // any nested functions does not need to be visited
                    StopDescending();
                    break;
                case AstIterationStatement iterationStatement:
                    iterationStatement.HasBreak = false;
                    break;
                case AstBreak astBreak when astBreak.Label == null:
                {
                    var parent = FindParent<AstIterationStatement, AstSwitch>();
                    if (parent is AstIterationStatement iteration)
                    {
                        iteration.HasBreak = true;
                        return;
                    }

                    if (parent != null)
                    {
                        return;
                    }

                    throw new SyntaxError("break must be inside loop or switch", node.Start);
                }
                case AstBreak astBreak:
                    var label = astBreak.Label?.Thedef;
                    var upToScope = label?.Scope;
                    foreach (var parent in Parents())
                    {
                        if (parent is AstIterationStatement iterationStatement)
                        {
                            iterationStatement.HasBreak = true;
                        }

                        if (parent == upToScope) break;
                    }

                    break;
            }
        }
    }
}
