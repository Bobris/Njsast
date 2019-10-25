using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableFunctionCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase
    {
        bool _isAfterExit;
        bool _isProcessingLambda;
        
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
            if (node is AstLambda astLambda)
                return ProcessLambda(astLambda);

            if (inList && _isAfterExit) // TODO try to call this without inList restriction
                return TryRemoveNode(node);

            switch (node)
            {
                case AstStatementWithBody astStatementWithBody:
                    return ProcessStatementWithBody(astStatementWithBody);
                case AstExit astExit:
                    return ProcessExit(astExit);
                default:
                    return null;
            }
        }

        AstLambda ProcessLambda(AstLambda astLambda)
        {
            if (_isProcessingLambda)
                return astLambda;
            _isProcessingLambda = true;
            Descend();
            _isProcessingLambda = false;
            return astLambda;
        }

        AstStatementWithBody ProcessStatementWithBody(AstStatementWithBody statementWithBody)
        {
            var safeIsAfterExit = _isAfterExit;
            if (statementWithBody is AstIf astIf && astIf.Alternative != null)
            {
                astIf.Body.Transform(this);
                _isAfterExit = safeIsAfterExit;
                astIf.Alternative.Transform(this);
                _isAfterExit = safeIsAfterExit;
                return astIf;
            }
            Descend();
            _isAfterExit = safeIsAfterExit;
            return statementWithBody;
        }

        AstExit ProcessExit(AstExit astExit)
        {
            _isAfterExit = true;
            return astExit;   
        }
    }
}