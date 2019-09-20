using System;
using System.Collections.Generic;
using Njsast.Ast;
using Njsast.Runtime;
using Njsast.Utils;

namespace Njsast.Compress
{
    public class UnreachableCodeEliminationTreeWalker : TreeWalker
    {
        AstBlock? _lastBlock;
        List<ControlFlow>? _controlFlows;
        protected override void Visit(AstNode node)
        {
            if (node is AstBlock astBlock)
            {
                var safeLastBlock = _lastBlock;
                _lastBlock = astBlock;
                Descend();
                _lastBlock = safeLastBlock;
                StopDescending();
            }

            if (node is AstStatementWithBody astStatementWithBody)
            {
                if (_lastBlock == null)
                {
                    throw new SemanticError("Statement with body must be placed within block", astStatementWithBody);
                }
                _controlFlows.Add(new ControlFlow(astStatementWithBody, _lastBlock));
            }
        }

        public IEnumerable<ControlFlow> FindOutControlFlows(AstToplevel astToplevel)
        {
            _controlFlows = new List<ControlFlow>();
            Walk(astToplevel);
            return _controlFlows;
        }

        public static void RemoveUnreachableCode(IEnumerable<ControlFlow> controlFlows)
        {
            foreach (var controlFlow in controlFlows)
            {
                switch (controlFlow.Statement)
                {
                    case AstIf ifStatement:
                        RemoveUnreachableCode(controlFlow.Parent, ifStatement);
                        break;
                    case AstWhile whileStatement:
                        RemoveUnreachableCode(controlFlow.Parent, whileStatement);
                        break;
                    case AstDo doStatement:
                        RemoveUnreachableCode(controlFlow.Parent, doStatement);
                        break;
                    case AstFor forStatement:
                        RemoveUnreachableCode(controlFlow.Parent, forStatement);
                        break;
//                    case AstForOf astForOf:
//                        break;
//                    case AstForIn astForIn:
//                        break;
//                    case AstLabeledStatement astLabeledStatement:
//                        break;
//                    case AstWith astWith:
//                        break;
                    default:
                        // TODO implement other controlFlows
                        throw new NotImplementedException();
                }
            }
        }

        static void RemoveUnreachableCode(AstBlock parent, AstIf ifStatement)
        {
            var conditionValue = ifStatement.Condition.ConstValue();
            if (conditionValue == null)
                return;

            var statement = TypeConverter.ToBoolean(conditionValue)
                ? ifStatement.Body
                : ifStatement.Alternative;

            switch (statement)
            {
                case null:
                case AstEmptyStatement _:
                    parent.Body.RemoveItem(ifStatement);
                    break;
                case AstBlock blockStatement:
                    parent.Body.ReplaceItem(ifStatement, blockStatement.Body);
                    break;
                default:
                    parent.Body.ReplaceItem(ifStatement, statement);
                    break;
            }
        }

        static void RemoveUnreachableCode(AstBlock parent, AstWhile whileStatement)
        {
            if (TypeConverter.ToBoolean(whileStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return;

            parent.Body.RemoveItem(whileStatement);
        }

        static void RemoveUnreachableCode(AstBlock parent, AstDo doStatement)
        {
            if (TypeConverter.ToBoolean(doStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return;

            var treeWalker = new BreakFinderTreeWalker();
            treeWalker.Walk(doStatement);

            if (doStatement.HasBreak)
                return; // if do-while contains break we cannot inline it without more sophisticated inspection

            switch (doStatement.Body)
            {
                case null: // Body should not be null at all
                case AstEmptyStatement _:
                    parent.Body.RemoveItem(doStatement);
                    break;
                case AstBlock blockStatement:
                    parent.Body.ReplaceItem(doStatement, blockStatement.Body);
                    break;
                default:
                    parent.Body.ReplaceItem(doStatement, doStatement.Body);
                    break;
            }
        }

        static void RemoveUnreachableCode(AstBlock parent, AstFor forStatement)
        {
            if (TypeConverter.ToBoolean(forStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return;

            switch (forStatement.Init)
            {
                case null:
                case AstEmptyStatement _:
                    parent.Body.RemoveItem(forStatement);
                    break;
                case AstStatement astStatement:
                    parent.Body.ReplaceItem(forStatement, astStatement);
                    break;
                default:
                    parent.Body.ReplaceItem(forStatement, new AstSimpleStatement(forStatement.Init));
                    break;
            }
        }
    }
}
