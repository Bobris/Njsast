using Njsast.Ast;
using Njsast.Runtime;

namespace Njsast.Compress
{
    public class UnreachableCodeEliminationTreeTransformer : CompressModuleTreeTransformerBase
    {
        public UnreachableCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode Before(AstNode node, bool inList)
        {
            switch (node)
            {
                case AstIf ifStatement:
                    return RemoveUnreachableCode(ifStatement, inList);
                case AstWhile whileStatement:
                    return RemoveUnreachableCode(whileStatement);
                case AstDo doStatement:
                    return RemoveUnreachableCode(doStatement);
                case AstFor forStatement:
                    return RemoveUnreachableCode(forStatement);
                case AstWith withStatement:
                    return RemoveUnreachableCode(withStatement);
                // case AstLabeledStatement _:
                // AstFor statements needs deeper analysis if it could be safely removed so we skip them
                // case AstForOf _:
                // case AstForIn _:
                default:
                    return node;
            }
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableUnreachableCodeElimination && node is AstStatementWithBody;
        }
        
        static readonly LoopControlFinderTreeWalker LoopControlFinderTreeWalker = new LoopControlFinderTreeWalker();

        static AstNode RemoveUnreachableCode(AstIf ifStatement, bool inList)
        {
            var conditionValue = ifStatement.Condition.ConstValue();
            if (conditionValue == null)
                return ifStatement;

            AstStatement? statement;
            AstStatement? falsyStatement;
            if (TypeConverter.ToBoolean(conditionValue))
            {
                statement = ifStatement.Body;
                falsyStatement = ifStatement.Alternative;
            }
            else
            {
                statement = ifStatement.Alternative;
                falsyStatement = ifStatement.Body;
            }

            AstVar? declarations = null;
            if (falsyStatement != null) 
                declarations = GetDeclarations(falsyStatement);

            switch (statement)
            {
                case null:
                    return declarations ?? Remove;
                default:
                    if (declarations == null) 
                        return statement;

                    var statements = new StructList<AstNode>();
                    statements.Add(declarations);
                    statements.Add(statement);
                    
                    return inList 
                        ? SpreadStructList(statements) 
                        : new AstBlock(ifStatement) {Body = statements};
            }
        }

        static AstNode RemoveUnreachableCode(AstWhile whileStatement)
        {
            if (TypeConverter.ToBoolean(whileStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return whileStatement;

            var declarations = GetDeclarations(whileStatement.Body);
            return declarations ?? Remove;
        }

        static AstNode RemoveUnreachableCode(AstDo doStatement)
        {
            if (TypeConverter.ToBoolean(doStatement.Condition.ConstValue() ?? AstTrue.Instance))
                return doStatement;

            LoopControlFinderTreeWalker.Walk(doStatement);

            if (doStatement.HasBreak || doStatement.HasContinue)
                return
                    doStatement; // if do-while contains break or continue we cannot inline it without more sophisticated inspection

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
            if (forStatement.Condition == null ||
                TypeConverter.ToBoolean(forStatement.Condition.ConstValue() ?? AstTrue.Instance))
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

        static AstVar? GetDeclarations(AstNode astNode)
        {
            var declarationCollectorTreeWalker = new DeclarationCollectorTreeWalker();
            declarationCollectorTreeWalker.Walk(astNode);
            return declarationCollectorTreeWalker.GetAllDeclarationsAsVar();
        }
    }
}