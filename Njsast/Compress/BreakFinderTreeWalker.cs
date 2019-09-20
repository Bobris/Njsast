using System;
using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.Compress
{
    public class BreakFinderTreeWalker : TreeWalker
    {
        protected override void Visit(AstNode node)
        {
            if (node is AstBreak astBreak)
            {
                if (astBreak.Label == null)
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
                else
                {
                    throw new NotImplementedException();
                }
            }
        }
    }
}
