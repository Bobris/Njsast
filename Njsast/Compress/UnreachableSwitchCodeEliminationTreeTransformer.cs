using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableSwitchCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase
    {
        bool _isAfterBreak;
        public UnreachableSwitchCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override void ResetState()
        {
            _isAfterBreak = false;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstSwitch astSwitch && 
                astSwitch.Body.Count > 0 && 
                astSwitch.Body.Last is AstCase astCase && 
                astCase.Body.Count > 0 &&
                astCase.Body.Last is AstBreak)
            {
                ShouldIterateAgain = true;
                // Remove not necessary break from switch statement
                astCase.Body.RemoveAt(astSwitch.Body.Count - 1);
            }
            
            if (node is AstSwitchBranch)
            {
                _isAfterBreak = false;
                // return node;
            }
            
            if (inList && _isAfterBreak)
            {
                return TryRemoveNode(node);
            }

            if (node is AstBreak)
            {
                _isAfterBreak = true;
            }

            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableUnreachableCodeElimination && node is AstSwitch;
        }
    }
}