using System.Collections.Generic;
using Njsast.Ast;
using Njsast.Utils;

namespace Njsast.Compress
{
    public class VariableHoistingTreeTransformer : CompressModuleTreeTransformerBase
    {
        class VariableInfo
        {
            public VariableInfo(AstBlock parent, AstVar astVar, AstVarDef astVarDef, bool canMoveInitialization)
            {
                Parent = parent;
                AstVar = astVar;
                CanMoveInitialization = canMoveInitialization;
                AstVarDef = astVarDef;
            }

            public AstBlock Parent { get; }
            public AstVar AstVar { get; }
            public AstVarDef AstVarDef { get; }
            public bool CanMoveInitialization { get; }
        }

        class ScopeVariableUsageInfo
        {
            // bool IsImmediatelyInitialized { get; set; }
            public bool IsUsedInConditionalStatement { get; set; }
            public int UnknownReferencesCount { get; set; }
            public int ReadReferencesCount { get; set; }
            public int WriteReferencesCount { get; set; }
            public bool IsPossiblyUsedInCall { get; set; }
            public AstNode? Initialization { get; set; }
            public AstNode? InitializationParent { get; set; }
        }
        
        bool _isInScope;
        bool _isInConditionalStatement;
        bool _isAfterCall;
        List<VariableInfo> _scopeVariables = new List<VariableInfo>();
        Dictionary<string, ScopeVariableUsageInfo> _scopeVariableUsages = new Dictionary<string, ScopeVariableUsageInfo>();
        AstBlock? _lastBlock;
        public VariableHoistingTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstScope astScope)
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
                
                if (_scopeVariables.Count == 0)
                    return astScope;

                if (_scopeVariables.Count == 1 && _scopeVariables[0].AstVar == astScope.Body[0])
                    return astScope;
                
                var varDefs = new StructList<AstVarDef>();
                foreach (var scopeVariable in _scopeVariables)
                {
                    var toRemove = new StructList<AstVarDef>();
                    foreach (var astVarDefinition in scopeVariable.AstVar.Definitions)
                    {
                        // (astVarDefinition.Name as AstSymbol).Name
                        // TODO for now move on top just variables without value. Value needs to be checked if it is safe
                        if (astVarDefinition.Value == null)
                        {
                            toRemove.Add(astVarDefinition);
                            varDefs.Add(astVarDefinition);
                            ShouldIterateAgain = true;
                        }
                    }
                    foreach (var varDefToRemove in toRemove)
                    {
                        scopeVariable.AstVar.Definitions.RemoveItem(varDefToRemove);
                    }

                    if (scopeVariable.AstVar.Definitions.Count == 0)
                    {
                        scopeVariable.Parent.Body.RemoveItem(scopeVariable.AstVar);
                    }
                }

                if (varDefs.Count == 0)
                    return astScope;

                var variables = new AstVar(ref varDefs);
                astScope.Body.Insert(0) = variables;

                return astScope;
            }

            if (node is AstCall)
            {
                if (!_isAfterCall)
                {
                    _isAfterCall = true;
                    foreach (var scopeVariableUsageInfo in _scopeVariableUsages)
                    {
                        scopeVariableUsageInfo.Value.IsPossiblyUsedInCall = true;
                    }
                }
            }

            if (node is AstSymbolRef astSymbolRef)
            {
                var name = astSymbolRef.Name;
                if (!_scopeVariableUsages.ContainsKey(name))
                {
                    _scopeVariableUsages[name] = new ScopeVariableUsageInfo();
                }

                var scopeVariableInfo = _scopeVariableUsages[name];
                scopeVariableInfo.IsUsedInConditionalStatement =
                    scopeVariableInfo.IsUsedInConditionalStatement || _isInConditionalStatement;

                scopeVariableInfo.IsPossiblyUsedInCall = _isAfterCall;
                if (astSymbolRef.Usage == SymbolUsage.Read)
                {
                    scopeVariableInfo.ReadReferencesCount++;
                }
                else if (astSymbolRef.Usage == SymbolUsage.Unknown)
                {
                    scopeVariableInfo.UnknownReferencesCount++;
                }
                else
                {
                    scopeVariableInfo.WriteReferencesCount++;
                }
                
                // TODO in this scope we should check if we are writing to variable
                // and if it is FIRST usage of that variable if yes then we should initialization node use as init
                
                return null;
            }

            if (node is AstIterationStatement || node is AstIf)
            {
                var safeIsInConditionalStatement = _isInConditionalStatement;
                _isInConditionalStatement = true;
                Descend();
                _isInConditionalStatement = safeIsInConditionalStatement;
                return node;
            }

            if (node is AstBlock astBlock)
            {
                var safeLastBlock = _lastBlock;
                _lastBlock = astBlock;
                Descend();
                _lastBlock = safeLastBlock;
                return astBlock;
            }

            if (node is AstVar astVar)
            {
                foreach (var astVarDefinition in astVar.Definitions)
                {
                    // TODO load information or create one
                    var name = (astVarDefinition.Name as AstSymbol)?.Name;
                    if (name == null)
                        throw new SemanticError($"{nameof(AstVarDef)} contains name which is not {nameof(AstSymbol)}", astVarDefinition);
                    if (!_scopeVariableUsages.ContainsKey(name))
                    {
                        // TODO create key
                        _scopeVariableUsages[name] = new ScopeVariableUsageInfo
                        {
                            IsUsedInConditionalStatement = _isInConditionalStatement,
                            IsPossiblyUsedInCall = _isAfterCall,
                            // TODO READ UNKNOWN WRITE reference
                        };
                    }

                    var usage = _scopeVariableUsages[name];
                    var canMove = !usage.IsPossiblyUsedInCall && !usage.IsUsedInConditionalStatement &&
                                  usage.ReadReferencesCount == 0 && usage.UnknownReferencesCount == 0;
                    _scopeVariables.Add(new VariableInfo(_lastBlock!, astVar, astVarDefinition, canMove));
                    if (canMove && usage.Initialization == null && astVarDefinition.Value != null)
                    {
                        usage.Initialization = astVarDefinition.Value;
                        usage.InitializationParent = astVarDefinition;
                    }
                }
                
                return astVar;
            }
            
            // TODO variable detection => var def move to top, var init leave where it is
            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override void ResetState()
        {
            base.ResetState();
            _scopeVariables = new List<VariableInfo>();
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
    }
}