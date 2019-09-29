using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Compress
{
    public class FunctionReturnTreeTransformer : CompressModuleTreeTransformerBase
    {
        class ReturnInfo
        {
            public AstBlock ParentBlock { get; }
            public AstReturn ReturnStatement { get; }
            public bool IsFollowedByEfficientCode { get; set; }
            public int EfficientStatementsBefore { get; set; }
            
            public ReturnInfo(AstReturn returnStatement, AstBlock parentBlock)
            {
                ReturnStatement = returnStatement;
                ParentBlock = parentBlock;
            }
        }
        bool _isInFunction;
        bool _isAfterReturn;
        int _efficientStatementsBetweenReturn;
        List<ReturnInfo> _returnInfos = new List<ReturnInfo>(0);
        ReturnInfo? _lastReturn;
        
        public FunctionReturnTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (_isInFunction && IsNonEfficientCode(node))
            {
                if (IsNonEfficientCode(node))
                    return node; // TODO test both
                _efficientStatementsBetweenReturn++;
                if (_lastReturn != null)
                    _lastReturn.IsFollowedByEfficientCode = true;
            }

            if (node is AstLambda astLambda)
            {
                _isInFunction = true;
                Descend();
                _isInFunction = false;

                if (_returnInfos.Count == 0)
                    return astLambda;

                for (int i = 0; i < _returnInfos.Count - 1; i++)
                {
                    var first = _returnInfos[i];
                    var second = i < _returnInfos.Count - 2 ? _returnInfos[i + 1] : null;
                    if (ShouldRemoveFirstReturn(first, second))
                    {
                        first.ParentBlock.Body.RemoveItem(first.ReturnStatement);
                    }
                }
                // TODO remove
                
                
                RemoveLastReturnUndefined(astLambda); // TODO this will be performed by deeper analysis
                if (node is AstArrow astArrow)
                {
                    TryInlineArrowFunction(astArrow);
                    // return astArrow;
                }
                
                
                return node;
            }

            if (node is AstStatementWithBody astStatementWithBody)
            {
                var safeEfficientStatementsBetweenReturn = _efficientStatementsBetweenReturn;
                var safeIsAfterReturn = _isAfterReturn;
                var safeReturnCount = _returnInfos.Count;
                Descend();
                if (safeReturnCount != _returnInfos.Count)
                {
                    // TODO return was found inside nested block
                }
                _isAfterReturn = safeIsAfterReturn;
                return node;
            }

            if (node is AstReturn astReturn)
            {
                if (astReturn.Value?.ConstValue() is AstUndefined)
                    astReturn.Value = null;

                var returnInfo = new ReturnInfo(astReturn, FindParent<AstBlock>())
                {
                    EfficientStatementsBefore = _efficientStatementsBetweenReturn - 1
                };
                _efficientStatementsBetweenReturn = 0;
                _lastReturn = returnInfo;
                _returnInfos.Add(returnInfo);
                _isAfterReturn = true;
                return astReturn;
//                if (astReturn.Value == null)
//                {
//                    // Last effective statement => remove
//                }
            }

            return null;
        }

        protected override void ResetState()
        {
            base.ResetState();
            _isInFunction = false;
            _isAfterReturn = false;
            _returnInfos = new List<ReturnInfo>();
            _efficientStatementsBetweenReturn = 0;
            _lastReturn = null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableFunctionReturnCompress && node is AstLambda;
        }

        void RemoveLastReturnUndefined(AstLambda astLambda)
        {
            if (astLambda.Body.Count > 0 && astLambda.Body.Last is AstReturn astReturn && astReturn.Value == null)
            {
                astLambda.Body.RemoveAt(astLambda.Body.Count - 1);
            }
        }

        void TryInlineArrowFunction(AstArrow astArrow)
        {
            if (astArrow.Body.Count == 1 && astArrow.Body.Last is AstReturn astReturn && astReturn.Value != null)
            {
                astArrow.Body[astArrow.Body.Count - 1] = astReturn.Value;
            }
        }

        bool ShouldRemoveFirstReturn(ReturnInfo returnToRemove, ReturnInfo? followedReturn)
        {
            // after return is code with possible side effect
            if (returnToRemove.IsFollowedByEfficientCode) 
                return false;
            // Second does not exist so at end both returns undefined
            if (followedReturn == null && returnToRemove.ReturnStatement.Value == null) 
                return true;
            // Both returns undefined
            if (followedReturn != null && followedReturn.ReturnStatement.Value == null && returnToRemove.ReturnStatement.Value == null) 
                return true;
            // Both returns same value
            if (followedReturn != null && followedReturn.ReturnStatement.Value != null && returnToRemove.ReturnStatement.Value != null)
            {
                var returnToRemoveValue = returnToRemove.ReturnStatement.Value.ConstValue();
                var followedReturnValue = followedReturn.ReturnStatement.Value.ConstValue();
                // Both is constants
                if (returnToRemoveValue != null && followedReturnValue != null &&
                    returnToRemove.Equals(followedReturnValue))
                    return true;
                // Both use same symbol ref
                if (returnToRemove.ReturnStatement.Value is AstSymbolRef returnToRemoveSymbolRef &&
                    followedReturn.ReturnStatement.Value is AstSymbolRef followedReturnSymbolRef &&
                    returnToRemoveSymbolRef.Name == followedReturnSymbolRef.Name)
                    return true; // TODO write test
            }

            return false;
        }

        bool IsNonEfficientCode(AstNode node)
        {
            switch (node)
            {
                case AstLambda _:
                    return true;
                case AstDefinitions definitions:
                {
                    foreach (var astVarDef in definitions.Definitions)
                    {
                        // We check if it is performed only definition without initialization
                        ShouldIterateAgain = true;
                        if (astVarDef.Value != null)
                        {
                            return false;
                        }

                        if (astVarDef.Name is AstSymbol symbol &&
                            (symbol.Usage == SymbolUsage.Write || symbol.Usage == SymbolUsage.ReadWrite))
                        {
                            return false;
                        }
                    }
                    return true;
                }
                default:
                    return false;
            }
        }
    }
}