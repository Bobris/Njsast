using System;
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
            public bool IsLoopReturn { get; set; }
            
            public ReturnInfo(AstReturn returnStatement, AstBlock parentBlock)
            {
                ReturnStatement = returnStatement;
                ParentBlock = parentBlock;
            }
        }
        bool _isInFunction;
        bool _isInLoop;
        bool _isAfterReturn;
        int _efficientStatementsBetweenReturn;
        List<ReturnInfo> _returnInfos = new List<ReturnInfo>(0);
        ReturnInfo? _lastReturn;
        
        public FunctionReturnTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (_isInFunction)
            {
                if (IsNonEfficientCode(node))
                    return node; // TODO test both
                if (!(node is AstReturn))
                {
                    _efficientStatementsBetweenReturn++;
                    if (_lastReturn != null)
                        _lastReturn.IsFollowedByEfficientCode = true;
                }
            }

            if (node is AstLambda astLambda)
            {
                _isInFunction = true;
                Descend();
                _isInFunction = false;

                if (_returnInfos.Count == 0)
                    return astLambda;

                for (int i = 0; i <= _returnInfos.Count - 1; i++)
                {
                    var first = _returnInfos[i];
                    var second = i < _returnInfos.Count - 1 ? _returnInfos[i + 1] : null;
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
                // TODO iteration statement mark
                var safeEfficientStatementsBetweenReturn = _efficientStatementsBetweenReturn;
                var safeIsAfterReturn = _isAfterReturn;
                var safeReturnCount = _returnInfos.Count;
                var safeIsInLoop = _isInLoop;
                if (astStatementWithBody is AstIterationStatement)
                {
                    _isInLoop = true;
                }
                Descend();
                if (safeReturnCount != _returnInfos.Count)
                {
                    // TODO return was found inside nested block
                }
                _isAfterReturn = safeIsAfterReturn;
                _efficientStatementsBetweenReturn = safeEfficientStatementsBetweenReturn;
                _isInLoop = safeIsInLoop;
                return node;
            }

            if (node is AstReturn astReturn)
            {
                if (astReturn.Value?.ConstValue() is AstUndefined)
                    astReturn.Value = null;

                var returnInfo = new ReturnInfo(astReturn, FindParent<AstBlock>())
                {
                    EfficientStatementsBefore = _efficientStatementsBetweenReturn,
                    IsLoopReturn = _isInLoop
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
            _isInLoop = false;
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
            // After return is code with possible side effect
            if (returnToRemove.IsFollowedByEfficientCode) 
                return false;
            // Return is placed inside loop 
            if (returnToRemove.IsLoopReturn)
                return false;
            // if (followedReturn == null && )
            
            // Second does not exist so at end both returns undefined
            if (followedReturn == null && returnToRemove.ReturnStatement.Value == null) 
                return true;
            // Both returns same value
            if (followedReturn != null &&
                HasSameReturnValue(returnToRemove.ReturnStatement, followedReturn.ReturnStatement))
                return true;

            return false;
        }

        bool HasSameReturnValue(AstReturn returnA, AstReturn returnB)
        {
            // Both return undefined
            if (returnA.Value == null && returnB.Value == null)
                return true;
            // Only one of them is undefined
            if (returnA.Value == null || returnB.Value == null)
                return false;
            // Both is SymbolRef
            if (returnA.Value is AstSymbolRef symbolA && returnB.Value is AstSymbolRef symbolB)
                return IsSameReference(symbolA, symbolB);
            // Both is Call
            if (returnA.Value is AstCall callA && returnB.Value is AstCall callB)
                return IsSameCall(callA, callB);
            // Both is constants with same value
            var constReturnA = returnA.Value.ConstValue();
            var constReturnB = returnB.Value.ConstValue();
            return constReturnA != null && constReturnB != null && constReturnA.Equals(constReturnB);
        }

        bool IsSameCall(AstCall callA, AstCall callB)
        {
            // TODO write test for same call check
            if (!(callA.Expression is AstSymbolRef symbolRefA && 
                  callB.Expression is AstSymbolRef symbolRefB) ||
                !IsSameReference(symbolRefA, symbolRefB))
                return false;
            var argsA = TrimEndingUndefined(callA.Args);
            var argsB = TrimEndingUndefined(callB.Args);
            if (argsA.Count != argsB.Count)
                return false;
            for (var i = 0; i < argsA.Count; i++)
            {
                var argA = argsA[i];
                var argB = argsB[i];
                // Constant 
                if (argA is AstConstant && argB is AstConstant)
                {
                    // TODO all possible cases => + tests
                    throw new NotImplementedException();
                }
                // SymbolRef
                if (argA is AstSymbolRef argSymbolRefA && 
                    argB is AstSymbolRef argSymbolRefB)
                {
                    if (IsSameReference(argSymbolRefA, argSymbolRefB))
                        continue;
                    return false;
                } 
                // Call
                if (argA is AstCall argCallA &&
                    argB is AstCall argCallB)
                {
                    if (IsSameCall(argCallA, argCallB)) 
                        continue;
                    return false;
                }
                
                // TODO another cases
                throw new NotImplementedException();
            }

            return true;
        }

        StructList<AstNode> TrimEndingUndefined(StructList<AstNode> list)
        {
            var newList = new StructList<AstNode>(list);
            // TODO remove undefined at end of list
//            for (var i = newList.Count - 1; i >= 0; i--)
//            {
//                var currentNode = newList[i - 1];
//                if (currentNode != undefined) break;
//            }
            return newList;
        } 

        bool IsSameReference(AstSymbolRef symbolRefA, AstSymbolRef symbolRefB)
        {
            return symbolRefA.Name == symbolRefB.Name && symbolRefA.Thedef!.Scope == symbolRefB.Thedef!.Scope;
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