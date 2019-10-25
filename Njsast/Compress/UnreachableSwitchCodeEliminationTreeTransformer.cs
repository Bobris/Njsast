using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableSwitchCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase<AstSwitch, AstBreak>
    {
        public UnreachableSwitchCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            // TODO there should be possible very similar logic to base class => refactor this
            if (node is AstSwitch astSwitch &&
                astSwitch.Body.Count > 0 &&
                astSwitch.Body.Last is AstCase astCase &&
                astCase.Body.Count > 0 &&
                astCase.Body.Last is AstBreak)
            {
                ShouldIterateAgain = true;
                // Remove not necessary break from switch statement
                astCase.Body.RemoveAt(^1);
            }

            if (node is AstSwitchBranch)
            {
                IsAfterJump = false;
                // return node;
            }

            if (inList && IsAfterJump)
            {
                return TryRemoveNode(node);
            }

            if (node is AstBreak)
            {
                IsAfterJump = true;
            }

            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableUnreachableCodeElimination && node is AstSwitch;
        }
    }
}
