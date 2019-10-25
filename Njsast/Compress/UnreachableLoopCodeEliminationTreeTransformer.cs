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
            if (_isProcessingSwitchStatement)
            {
                switch (node)
                {
                    case AstCase astCase:
                        return ProcessSwitchCaseNode(astCase);
                    case AstDefault astDefault:
                        return ProcessSwitchDefaultNode(astDefault);
                }
            }

            if (node == _lastCaseExpression || node == _lastTryCatch?.Argname)
                return node;
            
            
            if (node is AstIterationStatement astIterationStatement)
                return ProcessIterationStatement(astIterationStatement);

            if (node == _lastIfAlternative) 
                _isAfterLoopControl = false;

            if (node == _lastTryCatch || node == _lastTryFinally)
                return ProcessCatchOrFinally(node);

            if (_isAfterLoopControl)
                return TryRemoveNode(node);

            switch (node)
            {
                case AstIf astIf:
                    return ProcessIfStatement(astIf);
                case AstSwitch astSwitch:
                    return ProcessSwitch(astSwitch);
                case AstTry astTry:
                    return ProcessTry(astTry);
                case AstStatementWithBody astStatementWithBody:
                    return ProcessStatementWithBody(astStatementWithBody);
                case AstLoopControl astLoopControl:
                    return ProcessLoopControl(astLoopControl);
                default:
                    return null;
            }
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableUnreachableCodeElimination && node is AstIterationStatement;
        }

        AstCase ProcessSwitchCaseNode(AstCase astCase)
        {
            var safeLastCaseExpression = _lastCaseExpression;
            var safeIsAfterLoopControl = _isAfterLoopControl;
            _lastCaseExpression = astCase.Expression;
            Descend();
            _lastCaseExpression = safeLastCaseExpression;
            _isAfterLoopControl = safeIsAfterLoopControl;
            return astCase;
        }

        AstDefault ProcessSwitchDefaultNode(AstDefault astDefault)
        {
            var safeIsAfterLoopControl = _isAfterLoopControl;
            Descend();
            _isAfterLoopControl = safeIsAfterLoopControl;
            return astDefault;
        }

        AstIterationStatement ProcessIterationStatement(AstIterationStatement astIterationStatement)
        {
            if (_isProcessingIterationStatement)
            {
                return astIterationStatement;
            }

            _isProcessingIterationStatement = true;
            Descend();
            _isProcessingIterationStatement = false;
            return astIterationStatement;
        }

        AstNode ProcessCatchOrFinally(AstNode catchOrFinallyNode)
        {
            var safeIsAfterLoopControl = _isAfterLoopControl;
            _isAfterLoopControl = false;
            Descend();
            _isAfterLoopControl = safeIsAfterLoopControl;
            return catchOrFinallyNode;
        }

        AstIf ProcessIfStatement(AstIf astIf)
        {
            var safeLastIfAlternative = _lastIfAlternative;
            _lastIfAlternative = astIf.Alternative;
            Descend();
            _lastIfAlternative = safeLastIfAlternative;
            _isAfterLoopControl = false;
            return astIf;
        }

        AstSwitch ProcessSwitch(AstSwitch astSwitch)
        {
            var safeIsProcessingSwitch = _isProcessingSwitchStatement;
            _isProcessingSwitchStatement = true;
            Descend();
            _isProcessingSwitchStatement = safeIsProcessingSwitch;
            return astSwitch;
        }

        AstTry ProcessTry(AstTry astTry)
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

        AstStatementWithBody ProcessStatementWithBody(AstStatementWithBody astStatementWithBody)
        {
            Descend();
            _isAfterLoopControl = false;
            return astStatementWithBody;
        }

        AstLoopControl ProcessLoopControl(AstLoopControl astLoopControl)
        {
            if (_isProcessingSwitchStatement && astLoopControl is AstBreak)
                return astLoopControl;
            _isAfterLoopControl = true;
            return astLoopControl;
        }
    }
}