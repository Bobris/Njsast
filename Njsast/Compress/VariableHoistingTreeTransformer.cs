using System;
using System.Collections.Generic;
using Njsast.Ast;
using Njsast.Reader;
using Njsast.Utils;

namespace Njsast.Compress
{
    public class VariableHoistingTreeTransformer : CompressModuleTreeTransformerBase
    {
        class VariableDefinition
        {
            AstBlock ParentBlock { get; }
            AstNode Parent { get; }
            AstVar AstVar { get; }
            public AstVarDef AstVarDef { get; }
            public bool CanMoveInitialization { get; }

            public VariableDefinition(AstBlock parentBlock, AstNode parent, AstVar astVar, AstVarDef astVarDef, bool canMoveInitialization)
            {
                ParentBlock = parentBlock;
                Parent = parent;
                AstVar = astVar;
                CanMoveInitialization = canMoveInitialization;
                AstVarDef = astVarDef;
            }

            public void ConvertToAssignmentAndInsertBeforeVarNode()
            {
                if (AstVarDef.Value == null)
                    throw new InvalidOperationException("Can not convert to assignment if there is no initial value");
                if (Parent != ParentBlock)
                {
                    if (Parent is AstFor astFor)
                    {
                        if (astFor.Init == AstVar)
                        {
                            astFor.Init = ConvertVariableDefinitionToAssignStatement(false);
                            RemoveVarDefFromVar();
                            return;
                        }

                        if (astFor.Init is AstAssign astAssign)
                        {
                            var expressions = new StructList<AstNode>();
                            expressions.Add(astAssign);
                            expressions.Add(ConvertVariableDefinitionToAssignStatement(false));
                            astFor.Init = new AstSequence(null, astAssign.Start, astAssign.End, ref expressions);
                            RemoveVarDefFromVar();
                            return;
                        }

                        if (astFor.Init is AstSequence astSequence)
                        {
                            astSequence.Expressions.Add(ConvertVariableDefinitionToAssignStatement(false));
                            RemoveVarDefFromVar();
                            return;
                        }
                    }
                    throw new NotImplementedException();
                }
                ParentBlock.Body.Insert(ParentBlock.Body.IndexOf(AstVar)) = ConvertVariableDefinitionToAssignStatement();
                RemoveVarDefFromVar();
            }

            public void RemoveVarDefFromVar()
            {
                AstVar.Definitions.RemoveItem(AstVarDef);
                if (AstVar.Definitions.Count == 0 && Parent == ParentBlock)
                {
                    ParentBlock.Body.RemoveItem(AstVar);
                }
            }

            AstNode ConvertVariableDefinitionToAssignStatement(bool wrapToSimpleStatement = true)
            {
                var assignStatement = new AstAssign(
                    null,
                    AstVarDef.Start,
                    AstVarDef.End,
                    new AstSymbolRef((AstSymbol) AstVarDef.Name),
                    AstVarDef.Value!,
                    Operator.Assignment
                );
                return wrapToSimpleStatement ? (AstNode) new AstSimpleStatement(assignStatement) : assignStatement;
            }
        }

        class VariableInitialization
        {
            public AstNode Parent { get; }
            public AstNode Initialization { get; }

            public VariableInitialization(AstNode parent, AstNode initialization)
            {
                Parent = parent;
                Initialization = initialization;
            }
        }

        class ScopeVariableUsageInfo
        {
            public List<VariableDefinition> Definitions { get; } = new List<VariableDefinition>();
            public bool IsUsedInConditionalStatement { get; set; }
            public int UnknownReferencesCount { get; set; }
            public int ReadReferencesCount { get; set; }
            public bool IsPossiblyUsedInCall { get; set; }
            public bool IsUsedOnRightSideOfBinary { get; set; }

            public bool CanMoveInitialization =>
                !IsPossiblyUsedInCall && 
                !IsUsedInConditionalStatement &&
                !IsUsedOnRightSideOfBinary &&
                ReadReferencesCount == 0 && 
                UnknownReferencesCount == 0;

            public VariableInitialization? FirstHoistableInitialization { get; set; }
        }

        bool _isInScope;
        bool _isInStatementWithBody;
        bool _isAfterCall;
        bool _canPerformMergeDefAndInit;
        bool _isInRightSideOfBinary;
        int _astVarCount;

        Dictionary<string, ScopeVariableUsageInfo> _scopeVariableUsages =
            new Dictionary<string, ScopeVariableUsageInfo>();

        public VariableHoistingTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstScope astScope)
                return ProcessScopeNode(astScope);

            if (node is AstCall && !_isAfterCall)
                SetIsAfterCall();

            if (node is AstBinary astBinary)
                return ProcessBinaryNode(astBinary, inList);

            if (node is AstSymbolRef astSymbolRef)
            {
                ProcessSymbolRefNode(astSymbolRef);
                return null;
            }

            // statement with body (body is conditional)
            if (node is AstIterationStatement || node is AstIf)
                return ProcessStatementWithBody((AstStatementWithBody) node);

            if (node is AstVar astVar)
                return ProcessAstVarNode(astVar);

            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override void ResetState()
        {
            base.ResetState();
            _isAfterCall = false;
            _scopeVariableUsages = new Dictionary<string, ScopeVariableUsageInfo>();
            _isInStatementWithBody = false;
            _isInScope = false;
            _canPerformMergeDefAndInit = false;
            _astVarCount = 0;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableVariableHoisting && node is AstScope && !(node is AstClass);
        }

        void SetIsAfterCall()
        {
            _isAfterCall = true;
            foreach (var scopeVariableUsageInfo in _scopeVariableUsages)
            {
                scopeVariableUsageInfo.Value.IsPossiblyUsedInCall = true;
            }
        }

        AstScope ProcessScopeNode(AstScope astScope)
        {
            if (_isInScope)
            {
                return astScope;
            }

            _isInScope = true;
            Descend();
            _isInScope = false;

            if (_astVarCount == 0 || _astVarCount == 1 && !_canPerformMergeDefAndInit && astScope.Body[0] is AstVar)
            {
                return astScope;
            }

            return HoistVariables(astScope);
        }

        AstBinary ProcessBinaryNode(AstBinary astBinary, bool inList)
        {
            var safeIsInRightSideOfBinary = _isInRightSideOfBinary;
            DescendNode(astBinary.Left);
            _isInRightSideOfBinary = true;
            DescendNode(astBinary.Right);
            _isInRightSideOfBinary = safeIsInRightSideOfBinary;
            return astBinary;

            void DescendNode(AstNode node)
            {
                Stack.Add(node);
                Before(node, inList);
                Stack.Pop();
            }
        }

        void ProcessSymbolRefNode(AstSymbolRef astSymbolRef)
        {
            var name = astSymbolRef.Name;
            if (!_scopeVariableUsages.ContainsKey(name))
                _scopeVariableUsages[name] = new ScopeVariableUsageInfo();

            var scopeVariableInfo = SetCurrentState(_scopeVariableUsages[name]);

            switch (astSymbolRef.Usage)
            {
                case SymbolUsage.Read:
                    scopeVariableInfo.ReadReferencesCount++;
                    break;
                case SymbolUsage.Unknown:
                    scopeVariableInfo.UnknownReferencesCount++;
                    break;
                case SymbolUsage.ReadWrite:
                    scopeVariableInfo.ReadReferencesCount++;
                    break;
                case SymbolUsage.Write:
                    if (scopeVariableInfo.CanMoveInitialization &&
                        scopeVariableInfo.FirstHoistableInitialization == null)
                    {
                        AstSimpleStatement? initSimpleStatement;
                        AstBlock? parentBlock;
                        (parentBlock, initSimpleStatement) = GetInitAndParentNode<AstBlock?, AstSimpleStatement?>();

                        if (parentBlock != null && 
                            initSimpleStatement != null &&
                            parentBlock.Body.IndexOf(initSimpleStatement) != -1 &&
                            initSimpleStatement.Body is AstAssign)
                        {
                            scopeVariableInfo.FirstHoistableInitialization = new VariableInitialization(parentBlock, initSimpleStatement);
                            _canPerformMergeDefAndInit = true;
                            break;
                        }

                        AstBinary? parentNode;
                        AstAssign? initNode;
                        (parentNode, initNode) = GetInitAndParentNode<AstBinary?, AstAssign?>();

                        if (parentNode != null && initNode != null)
                        {
                            scopeVariableInfo.FirstHoistableInitialization = new VariableInitialization(parentNode, initNode);
                            _canPerformMergeDefAndInit = true;
                            break;
                        }

                        throw new NotImplementedException();
                    }

                    break;
            }
        }

        (TParent, TInit) GetInitAndParentNode<TParent, TInit>(AstNode? stopNode = null) where TParent : AstNode? where TInit : AstNode?
        {
            var parentNode = default(TParent)!;
            var initNode = default(TInit)!;
            foreach (var currentNode in Parents())
            {
                if (stopNode == currentNode)
                    break;
                if (initNode == null)
                {
                    if (currentNode is TInit tInitNode)
                        initNode = tInitNode;
                    continue;
                }

                if (currentNode is TParent tParentNode)
                    parentNode = tParentNode;
                break;
            }

            return (parentNode, initNode);
        } 

        AstStatementWithBody ProcessStatementWithBody(AstStatementWithBody statementWithBody)
        {
            var safeIsInStatementWithBody = _isInStatementWithBody;
            _isInStatementWithBody = true;
            Descend();
            _isInStatementWithBody = safeIsInStatementWithBody;
            return statementWithBody;
        }

        AstVar ProcessAstVarNode(AstVar astVar)
        {
            _astVarCount++;
            foreach (var astVarDefinition in astVar.Definitions)
            {
                var name = GetAstVarDefinitionName(astVarDefinition);
                if (!_scopeVariableUsages.ContainsKey(name))
                {
                    _scopeVariableUsages[name] = SetCurrentState(new ScopeVariableUsageInfo());
                }

                var usage = _scopeVariableUsages[name];
                var lastBlock = FindParent<AstBlock>();
                var parent = Parent();
                if (parent == null)
                    throw new SemanticError($"Parent for {nameof(AstVar)} node was not found", astVar);
                var variableDefinition =
                    new VariableDefinition(lastBlock, parent, astVar, astVarDefinition, usage.CanMoveInitialization);
                usage.Definitions.Add(variableDefinition);
            }

            return astVar;
        }

        string GetAstVarDefinitionName(AstVarDef astVarDef)
        {
            var name = (astVarDef.Name as AstSymbol)?.Name;
            if (name == null)
                throw new SemanticError($"{nameof(AstVarDef)} contains name which is not {nameof(AstSymbol)}",
                    astVarDef);
            return name;
        }

        ScopeVariableUsageInfo SetCurrentState(ScopeVariableUsageInfo variableUsageInfo)
        {
            variableUsageInfo.IsUsedInConditionalStatement =
                variableUsageInfo.IsUsedInConditionalStatement || _isInStatementWithBody;
            variableUsageInfo.IsPossiblyUsedInCall = _isAfterCall;
            variableUsageInfo.IsUsedOnRightSideOfBinary =
                variableUsageInfo.IsUsedOnRightSideOfBinary || _isInRightSideOfBinary;
            return variableUsageInfo;
        }

        AstScope HoistVariables(AstScope astScope)
        {
            var hoistedVariables = new Dictionary<string, AstVarDef>();
            foreach (var scopeVariableUsageInfo in _scopeVariableUsages)
            {
                var variableName = scopeVariableUsageInfo.Key;
                var isFirst = true;
                foreach (var variableDefinitionInfo in scopeVariableUsageInfo.Value.Definitions)
                {
                    if (isFirst)
                    {
                        HoistFirstVariableDefinition(variableDefinitionInfo, scopeVariableUsageInfo.Value,
                            hoistedVariables, variableName);
                        isFirst = false;
                    }
                    else
                    {
                        HoistOtherVariableDefinition(variableDefinitionInfo);
                    }
                }
            }

            if (hoistedVariables.Count == 0)
                return astScope;
            ShouldIterateAgain = true;

            var varDefs = new StructList<AstVarDef>();
            foreach (var hoistedVariablesValue in hoistedVariables.Values)
            {
                varDefs.Add(hoistedVariablesValue);
            }

            var astVar = new AstVar(ref varDefs);

            if (astScope.Body.Count == 0)
            {
                astScope.Body.Add(astVar);
                return astScope;
            }

            astScope.Body.Insert(0) = astVar;
            return astScope;
        }

        static void HoistFirstVariableDefinition(
            VariableDefinition variableDefinition,
            ScopeVariableUsageInfo scopeVariableUsageInfo,
            IDictionary<string, AstVarDef> hoistedVariables,
            string variableName)
        {
            // Use initialization value
            if (variableDefinition.CanMoveInitialization &&
                variableDefinition.AstVarDef.Value != null)
            {
                hoistedVariables.Add(variableName, variableDefinition.AstVarDef);
                variableDefinition.RemoveVarDefFromVar();
            }
            // Use first usable assignment (move assignment to initialization)
            else if (variableDefinition.CanMoveInitialization &&
                     scopeVariableUsageInfo.FirstHoistableInitialization != null)
            {
                hoistedVariables.Add(variableName, variableDefinition.AstVarDef);
                variableDefinition.RemoveVarDefFromVar();

                var hoistableInitialization = scopeVariableUsageInfo.FirstHoistableInitialization;

                if (hoistableInitialization.Parent is AstBlock parentBlock &&
                    hoistableInitialization.Initialization is AstSimpleStatement initSimpleStatement &&
                    initSimpleStatement.Body is AstAssign simpleStatementAssign)
                {
                    variableDefinition.AstVarDef.Value = simpleStatementAssign.Right;
                    parentBlock.Body.RemoveItem(initSimpleStatement);
                    return;
                }

                if (hoistableInitialization.Parent is AstBinary parentBinary &&
                    hoistableInitialization.Initialization is AstAssign initAssign)
                {
                    variableDefinition.AstVarDef.Value = initAssign.Right;
                    if (parentBinary.Left == initAssign)
                        parentBinary.Left = initAssign.Left;
                    else if (parentBinary.Right == initAssign)
                        parentBinary.Right = initAssign.Left;
                    else
                        throw new NotImplementedException();
                    return;
                }

                throw new NotImplementedException();
            }
            // Move variable definition to top of scope and assign variable later at same place
            else if (!variableDefinition.CanMoveInitialization &&
                     variableDefinition.AstVarDef.Value != null)
            {
                hoistedVariables.Add(variableName, new AstVarDef(variableDefinition.AstVarDef.Name));
                variableDefinition.ConvertToAssignmentAndInsertBeforeVarNode();
            }
            // No initialization value or can not move initialization
            else
            {
                if (variableDefinition.AstVarDef.Value != null)
                {
                    // Based on previous conditions this should never been thrown
                    throw new NotSupportedException();
                }

                hoistedVariables.Add(variableName, variableDefinition.AstVarDef);
                variableDefinition.RemoveVarDefFromVar();
            }
        }

        static void HoistOtherVariableDefinition(VariableDefinition variableDefinition)
        {
            // Remove redundant variable definition
            if (variableDefinition.AstVarDef.Value == null)
            {
                variableDefinition.RemoveVarDefFromVar();
            }
            // Replace var initialization with assign statement
            else
            {
                variableDefinition.ConvertToAssignmentAndInsertBeforeVarNode();
            }
        }
    }
}