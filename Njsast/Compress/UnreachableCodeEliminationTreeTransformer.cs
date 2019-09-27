using System;
using Njsast.Ast;
using Njsast.Runtime;

namespace Njsast.Compress
{
    public class UnreachableCodeEliminationTreeTransformer : TreeTransformer
    {
        protected override AstNode Before(AstNode node, bool inList)
        {
            switch (node)
            {
                case AstIf ifStatement:
                    return RemoveUnreachableCode(ifStatement);
                case AstWhile whileStatement:
                    return RemoveUnreachableCode(whileStatement);
                case AstDo doStatement:
                    return RemoveUnreachableCode(doStatement);
                case AstFor forStatement:
                    return RemoveUnreachableCode(forStatement);
                case AstLabeledStatement _:
                // AstFor statements needs deeper analysis if it could be safely removed so we skip them
                case AstForOf _:
                case AstForIn _:
                    return node;
                case AstWith withStatement:
                    return RemoveUnreachableCode(withStatement);
                default:
                    return node;
            }
        }

        protected override AstNode After(AstNode node, bool inList)
        {
            throw new NotSupportedException();
        }
        
        static AstNode RemoveUnreachableCode(AstIf ifStatement)
        {
            var conditionValue = ifStatement.Condition.ConstValue();
            if (conditionValue == null)
                return ifStatement;

            var statement = TypeConverter.ToBoolean(conditionValue)
                ? ifStatement.Body
                : ifStatement.Alternative;

            switch (statement)
            {
                case null:
                    return Remove;
                default:
                    return statement;
            }
        }

        static AstNode RemoveUnreachableCode(AstWhile whileStatement)
        {
            if (TypeConverter.ToBoolean(whileStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return whileStatement;

            return Remove;
        }

        static AstNode RemoveUnreachableCode(AstDo doStatement)
        {
            if (TypeConverter.ToBoolean(doStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return doStatement;

            var treeWalker = new BreakFinderTreeWalker();
            treeWalker.Walk(doStatement);

            if (doStatement.HasBreak)
                return doStatement; // if do-while contains break we cannot inline it without more sophisticated inspection

            switch (doStatement.Body)
            {
                
                case null: // Body should not be null at all
                    return Remove;
                default:
                    return doStatement.Body;
            }
        }

        static AstNode RemoveUnreachableCode(AstFor forStatement)
        {
            if (forStatement.Condition == null || TypeConverter.ToBoolean(forStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return forStatement;

            switch (forStatement.Init)
            {
                case null:
                    return Remove;
                case AstStatement astStatement:
                    return astStatement;
                default:
                    return new AstSimpleStatement(forStatement.Init);
            }
        }
        
        static AstNode RemoveUnreachableCode(AstWith withStatement)
        {
            switch (withStatement.Body)
            {
                case AstEmptyStatement _:
                case AstBlock astBlock when astBlock.Body.Count == 0:
                    return Remove;
                default:
                    return withStatement;
            }
        }
    }
}