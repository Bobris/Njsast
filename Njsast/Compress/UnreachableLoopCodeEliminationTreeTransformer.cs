using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableLoopCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase
    {
        bool _isAfterLoopControl;
        
        public UnreachableLoopCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override void ResetState()
        {
            _isAfterLoopControl = false;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (_isAfterLoopControl)
            {
                return TryRemoveNode(node);
            }

            if (node is AstStatementWithBody)
            {
                Descend();
                _isAfterLoopControl = false;
                return node;
            }

            if (node is AstLoopControl)
            {
                _isAfterLoopControl = true;
                return node;
            }

            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableUnreachableCodeElimination && node is AstIterationStatement;
        }
    }
}