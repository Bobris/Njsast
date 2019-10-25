using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableLoopCodeEliminationTreeTransformer : UnreachableAfterJumpCodeEliminationTreeTransformerBase
    {
        bool _isAfterLoopControl;
        bool _isProcessingIterationStatement;
        bool _isProcessingSwitchStatement;
        AstNode? _lastIfAlternative;
        AstCatch? _lastTryCatch;
        AstNode? _lastTryFinally;
        AstNode? _lastCaseExpression;

        public UnreachableLoopCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override void ResetState()
        {
            _isAfterLoopControl = false;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (_isProcessingSwitchStatement && node is AstCase astCase)
            {
                var safeLastCaseExpression = _lastCaseExpression;
                var safeIsAfterLoopControl = _isAfterLoopControl;
                _lastCaseExpression = astCase.Expression;
                Descend();
                _lastCaseExpression = safeLastCaseExpression;
                _isAfterLoopControl = safeIsAfterLoopControl;
                return astCase;
            }

            if (_isProcessingSwitchStatement && node is AstDefault)
            {
                var safeIsAfterLoopControl = _isAfterLoopControl;
                Descend();
                _isAfterLoopControl = safeIsAfterLoopControl;
                return node;
            }

            if (node == _lastCaseExpression || node == _lastTryCatch?.Argname)
            {
                return node;
            }
            
            if (node is AstIterationStatement)
            {
                if (_isProcessingIterationStatement)
                {
                    return node;
                }

                _isProcessingIterationStatement = true;
                Descend();
                _isProcessingIterationStatement = false;
                return node;
            }
            
            if (node == _lastIfAlternative)
            {
                _isAfterLoopControl = false;
            }

            if (node == _lastTryCatch || node == _lastTryFinally)
            {
                var safeIsAfterLoopControl = _isAfterLoopControl;
                _isAfterLoopControl = false;
                Descend();
                _isAfterLoopControl = safeIsAfterLoopControl;
                return node;
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

            if (node is AstSwitch)
            {
                var safeIsProcessingSwitch = _isProcessingSwitchStatement;
                _isProcessingSwitchStatement = true;
                Descend();
                _isProcessingSwitchStatement = safeIsProcessingSwitch;
                return node;
            }

            if (node is AstTry astTry)
            {
                var safeLastTryCatch = _lastTryCatch;
                var safeLastTryFinally = _lastTryFinally;
                _lastTryCatch = astTry.Bcatch;
                _lastTryFinally = astTry.Bfinally;
                 Descend();
                _lastTryCatch = safeLastTryCatch;
                _lastTryFinally = safeLastTryFinally;
                return astTry;
            }

            if (node is AstStatementWithBody)
            {
                Descend();
                _isAfterLoopControl = false;
                return node;
            }

            if (node is AstLoopControl)
            {
                if (_isProcessingSwitchStatement && node is AstBreak)
                    return node;
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