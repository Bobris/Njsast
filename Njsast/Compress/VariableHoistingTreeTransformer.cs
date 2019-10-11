using System;
using System.Collections.Generic;
using Njsast.Ast;
using Njsast.Reader;
using Njsast.Utils;

namespace Njsast.Compress
{
    public class VariableHoistingTreeTransformer : CompressModuleTreeTransformerBase
    {
        class VariableDefinitionInfo
        {
            public AstBlock Parent { get; }
            public AstVar AstVar { get; }
            public AstVarDef AstVarDef { get; }
            public bool CanMoveInitialization { get; }

            public VariableDefinitionInfo(AstBlock parent, AstVar astVar, AstVarDef astVarDef, bool canMoveInitialization)
            {
                Parent = parent;
                AstVar = astVar;
                CanMoveInitialization = canMoveInitialization;
                AstVarDef = astVarDef;
            }
        }

        class VariableAssignInitializationInfo
        {
            public AstBlock Parent { get; }
            public AstSimpleStatement Initialization { get; }

            public VariableAssignInitializationInfo(AstBlock parent, AstSimpleStatement initialization)
            {
                Parent = parent;
                Initialization = initialization;
            }
        }

        class ScopeVariableUsageInfo
        {
            public List<VariableDefinitionInfo> Definitions { get; } = new List<VariableDefinitionInfo>(); 
            public bool IsUsedInConditionalStatement { get; set; }
            public int UnknownReferencesCount { get; set; }
            public int ReadReferencesCount { get; set; }
            public int WriteReferencesCount { get; set; }
            public bool IsPossiblyUsedInCall { get; set; }
            public bool CanMoveInitialization =>
                !IsPossiblyUsedInCall && !IsUsedInConditionalStatement &&
                ReadReferencesCount == 0 && UnknownReferencesCount == 0;
            public VariableAssignInitializationInfo? FirstHoistableInitialization { get; set; }
        }
        
        bool _isInScope;
        bool _isInConditionalStatement;
        bool _isAfterCall;
        
        Dictionary<string, ScopeVariableUsageInfo> _scopeVariableUsages = new Dictionary<string, ScopeVariableUsageInfo>();
        AstBlock? _lastBlock; // TODO replace with usage of FindParent<AstBlock>
        public VariableHoistingTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstScope astScope)
                return ProcessScopeNode(astScope);

            if (node is AstCall && !_isAfterCall) 
                SetIsAfterCall();

            // UsageOfSymbol read or write
            if (node is AstSymbolRef astSymbolRef)
            {
                ProcessSymbolRefNode(astSymbolRef);
                return null;
            }

            // Go to conditionalStatement
            if (node is AstIterationStatement || node is AstIf)
                return ProcessConditionalStatement((AstStatementWithBody) node);

            if (node is AstBlock astBlock)
                return ProcessAstBlock(astBlock);

            if (node is AstVar astVar)
                return ProcessAstVarNode(astVar);

            // TODO variable detection => var def move to top, var init leave where it is
            return null;
        }

        AstBlock ProcessAstBlock(AstBlock astBlock)
        {
            var safeLastBlock = _lastBlock;
            _lastBlock = astBlock;
            Descend();
            _lastBlock = safeLastBlock;
            return astBlock;
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
            _isInConditionalStatement = false;
            _lastBlock = null;
            _isInScope = false;
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
            _lastBlock = astScope;
            Descend();
            _isInScope = false;
            _lastBlock = null;

            return HoistVariables(astScope);

//            if (_scopeVariables.Count == 0)
//                return astScope;
//
//            if (_scopeVariables.Count == 1 && _scopeVariables[0].AstVar == astScope.Body[0])
//                return astScope;
//            
//            var varDefs = new StructList<AstVarDef>();
//            foreach (var scopeVariable in _scopeVariables)
//            {
//                var name = GetAstVarDefinitionName(scopeVariable.AstVarDef);
//
//                varDefs.Add(scopeVariable.AstVarDef);
//                if (!scopeVariable.CanMoveInitialization)
//                {
//                    throw new NotImplementedException("we should take initialization and replace place where it is now defined with initialization"); 
//                }
//
//                if (scopeVariable.AstVarDef.Value == null && _scopeVariableUsages[name].Initialization != null)
//                {
//                    scopeVariable.AstVarDef.Value = _scopeVariableUsages[name].Initialization;
//                    switch (_scopeVariableUsages[name].InitializationParent)
//                    {
//                        case AstBlock block:
//
//                            break;
//                        default:
//                            throw new NotImplementedException(); // TODO other cases
//                        
//                    }
//                }
//                
//                
//                var toRemove = new StructList<AstVarDef>();
//                foreach (var astVarDefinition in scopeVariable.AstVar.Definitions)
//                {
//                    // (astVarDefinition.Name as AstSymbol).Name
//                    // TODO for now move on top just variables without value. Value needs to be checked if it is safe
//                    if (astVarDefinition.Value == null)
//                    {
//                        toRemove.Add(astVarDefinition);
//                        varDefs.Add(astVarDefinition);
//                        if (scopeVariable.CanMoveInitialization && )
//                        ShouldIterateAgain = true;
//                    }
//                }
//                foreach (var varDefToRemove in toRemove)
//                {
//                    scopeVariable.AstVar.Definitions.RemoveItem(varDefToRemove);
//                }
//
//                if (scopeVariable.AstVar.Definitions.Count == 0)
//                {
//                    scopeVariable.Parent.Body.RemoveItem(scopeVariable.AstVar);
//                }
//            }
//
//            if (varDefs.Count == 0)
//                return astScope;
//
//            var variables = new AstVar(ref varDefs);
//            astScope.Body.Insert(0) = variables;
//            return astScope;
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
                    scopeVariableInfo.WriteReferencesCount++;
                    break;
                case SymbolUsage.Write:
                    scopeVariableInfo.WriteReferencesCount++;
                    if (scopeVariableInfo.CanMoveInitialization && scopeVariableInfo.FirstHoistableInitialization == null)
                    {
                        // var assign = FindParent<AstAssign>();
                        var simpleStatement = FindParent<AstSimpleStatement>();
                        if (_lastBlock!.Body.IndexOf(simpleStatement) == -1)
                            break;
                        scopeVariableInfo.FirstHoistableInitialization = new VariableAssignInitializationInfo(_lastBlock, simpleStatement);
                    }
                    break;
            }
        }
        
        AstStatementWithBody ProcessConditionalStatement(AstStatementWithBody conditionalStatement)
        {
            var safeIsInConditionalStatement = _isInConditionalStatement;
            _isInConditionalStatement = true;
            Descend();
            _isInConditionalStatement = safeIsInConditionalStatement;
            return conditionalStatement;
        }
        
        AstVar ProcessAstVarNode(AstVar astVar)
        {
            foreach (var astVarDefinition in astVar.Definitions)
            {
                var name = GetAstVarDefinitionName(astVarDefinition);
                if (!_scopeVariableUsages.ContainsKey(name))
                {
                    _scopeVariableUsages[name] = SetCurrentState(new ScopeVariableUsageInfo());
                }

                var usage = _scopeVariableUsages[name];
                var variableDefinition = new VariableDefinitionInfo(_lastBlock!, astVar, astVarDefinition, usage.CanMoveInitialization);
                usage.Definitions.Add(variableDefinition);

                if (astVarDefinition.Value != null)
                {
                    // TODO check if we need to know write references count 
                    usage.WriteReferencesCount++;
                }
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
                variableUsageInfo.IsUsedInConditionalStatement || _isInConditionalStatement;
            variableUsageInfo.IsPossiblyUsedInCall = _isAfterCall;
            return variableUsageInfo;
        }

        AstScope HoistVariables(AstScope astScope)
        {
            // TODO before hoisting we should check if it will have some effect => improve => destruction changes of tree after checked that it has some effect 
            var hoistedVariables = new Dictionary<string, AstVarDef>();
            foreach (var scopeVariableUsageInfo in _scopeVariableUsages)
            {
                var variableName = scopeVariableUsageInfo.Key;
                var isFirst = true;
                foreach (var variableDefinitionInfo in scopeVariableUsageInfo.Value.Definitions)
                {
                    if (isFirst)
                    {
                        // Use initialization value
                        if (variableDefinitionInfo.CanMoveInitialization &&
                            variableDefinitionInfo.AstVarDef.Value != null)
                        {
                            hoistedVariables.Add(variableName, variableDefinitionInfo.AstVarDef);
                            variableDefinitionInfo.AstVar.Definitions.RemoveItem(variableDefinitionInfo.AstVarDef);
                        } 
                        // Use first usable assignment (move assignment to initialization)
                        else if (variableDefinitionInfo.CanMoveInitialization &&
                                 scopeVariableUsageInfo.Value.FirstHoistableInitialization != null)
                        {
                            hoistedVariables.Add(variableName, variableDefinitionInfo.AstVarDef);
                            variableDefinitionInfo.AstVar.Definitions.RemoveItem(variableDefinitionInfo.AstVarDef);

                            if (!(scopeVariableUsageInfo.Value.FirstHoistableInitialization.Initialization.Body is AstAssign assign))
                            {
                                throw new NotImplementedException();
                            }
                            
                            variableDefinitionInfo.AstVarDef.Value = assign.Right;
                            scopeVariableUsageInfo.Value.FirstHoistableInitialization.Parent.Body.RemoveItem(
                                scopeVariableUsageInfo.Value.FirstHoistableInitialization.Initialization);
                        }
                        // Move variable definition to top of scope and assign variable later at same place
                        else if (!variableDefinitionInfo.CanMoveInitialization &&
                                 variableDefinitionInfo.AstVarDef.Value != null)
                        {
                            hoistedVariables.Add(variableName, new AstVarDef(variableDefinitionInfo.AstVarDef.Name));
                            variableDefinitionInfo.AstVar.Definitions.RemoveItem(variableDefinitionInfo.AstVarDef);
                            variableDefinitionInfo.Parent.Body.Insert(
                                    variableDefinitionInfo.Parent.Body.IndexOf(variableDefinitionInfo.AstVar)) =
                                new AstSimpleStatement(
                                    new AstAssign(
                                        null, 
                                        variableDefinitionInfo.AstVarDef.Start,
                                        variableDefinitionInfo.AstVarDef.End, 
                                        new AstSymbolRef(variableDefinitionInfo.AstVarDef.Name, variableName), 
                                        variableDefinitionInfo.AstVarDef.Value, Operator.Assignment
                                    )
                                );
                        }
                        // No initialization value or can not move initialization
                        else if (variableDefinitionInfo.AstVarDef.Value == null)
                        {
                            if (variableDefinitionInfo.AstVarDef.Value != null)
                            {
                                // Based on previous conditions this should never been thrown
                                throw new NotSupportedException();
                            }
                            hoistedVariables.Add(variableName, variableDefinitionInfo.AstVarDef);
                            variableDefinitionInfo.AstVar.Definitions.RemoveItem(variableDefinitionInfo.AstVarDef);
                        }
                        isFirst = false;
                    }
                    else
                    {
                        // Remove redundant variable initialization
                        if (variableDefinitionInfo.AstVarDef.Value == null)
                        {
                            variableDefinitionInfo.AstVar.Definitions.RemoveItem(variableDefinitionInfo.AstVarDef);
                        }
                        else
                        {
                            // TODO refactor this to separate method same as case when cannot move initialization
                            variableDefinitionInfo.Parent.Body.Insert(
                                    variableDefinitionInfo.Parent.Body.IndexOf(variableDefinitionInfo.AstVar)) =
                                new AstSimpleStatement(
                                    new AstAssign(
                                        null, 
                                        variableDefinitionInfo.AstVarDef.Start,
                                        variableDefinitionInfo.AstVarDef.End, 
                                        new AstSymbolRef(variableDefinitionInfo.AstVarDef.Name, variableName), 
                                        variableDefinitionInfo.AstVarDef.Value, Operator.Assignment
                                    )
                                );
                        }
                    }
                    
                    if (variableDefinitionInfo.AstVar.Definitions.Count == 0)
                    {
                        variableDefinitionInfo.Parent.Body.RemoveItem(variableDefinitionInfo.AstVar);
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
    }
}