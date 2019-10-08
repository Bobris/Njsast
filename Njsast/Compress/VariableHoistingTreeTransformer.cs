using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Compress
{
    public class VariableHoistingTreeTransformer : CompressModuleTreeTransformerBase
    {
        class VariableInfo
        {
            public VariableInfo(AstBlock parent, AstVar astVar)
            {
                Parent = parent;
                AstVar = astVar;
            }

            public AstBlock Parent { get; }
            public AstVar AstVar { get; }
        }
        
        bool _isInScope;
        List<VariableInfo> _scopeVariables = new List<VariableInfo>();
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
                        // TODO for now move on tom just variables without value. Value needs to be checked if it is safe
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

            if (node is AstBlock astBlock)
            {
                _lastBlock = astBlock;
                return null;
            }

            if (node is AstVar astVar)
            {
                _scopeVariables.Add(new VariableInfo(_lastBlock!, astVar));
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
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableVariableHoisting && node is AstScope && !(node is AstClass);
        }
    }
}