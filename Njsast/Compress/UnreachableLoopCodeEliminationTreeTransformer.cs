using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableLoopCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase
    {
        bool _isAfterLoopControl;
        AstNode? _lastIfAlternative;
        
        public UnreachableLoopCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override void ResetState()
        {
            _isAfterLoopControl = false;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node == _lastIfAlternative)
            {
                _isAfterLoopControl = false;
            }
            
            if (_isAfterLoopControl)
            {
                return TryRemoveNode(node);
            }
            
            if (node is AstIf astIf)
            {
                var safeLastIfAlternative = _lastIfAlternative;
                _lastIfAlternative = astIf.Alternative;
                Descend();
                _lastIfAlternative = safeLastIfAlternative;
                _isAfterLoopControl = false;
                return astIf;
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