using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableFunctionCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase
    {
        bool _isAfterExit;
        
        public UnreachableFunctionCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override void ResetState()
        {
            _isAfterExit = false;
        }

        protected override bool CanProcessNode(ICompressOptions compressOptions, AstNode node)
        {
            return compressOptions.EnableUnreachableCodeElimination && node is AstLambda;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (inList && _isAfterExit)
            {
                return TryRemoveNode(node);
            }

            if (node is AstStatementWithBody)
            {
                var safeIsAfterExit = _isAfterExit;
                if (node is AstIf astIf && astIf.Alternative != null)
                {
                    astIf.Body.Transform(this);
                    _isAfterExit = safeIsAfterExit;
                    astIf.Alternative.Transform(this);
                    _isAfterExit = safeIsAfterExit;
                    return astIf;
                }
                Descend();
                _isAfterExit = safeIsAfterExit;
                return node;
            }

            if (node is AstExit)
            {
                _isAfterExit = true;
                return node;
            }

            return null;
        }
    }
}