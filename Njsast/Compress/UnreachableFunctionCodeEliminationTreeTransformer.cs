using Njsast.Ast;

namespace Njsast.Compress
{
    public class UnreachableFunctionCodeEliminationTreeTransformer : CompressModuleTreeTransformerBase
    {
        bool _isAfterExit;

        protected override void ResetState()
        {
            _isAfterExit = false;
        }

        protected override bool CanProcessNode(ICompressOptions compressOptions, AstNode node)
        {
            return compressOptions.EnableUnreachableCodeElimination && node is AstLambda;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (inList && _isAfterExit)
            {
                return TryRemoveNode(node);
            }
            
            if (node is AstStatementWithBody)
            {
                if (_isAfterExit)
                {
                    return Remove;
                }
                Descend();
                _isAfterExit = false;
            }

            if (node is AstExit)
            {
                _isAfterExit = true;
                return node;
            }

            return null;
        }

        AstNode TryRemoveNode(AstNode node)
        {
            if (!_isAfterExit)
                return node;
            switch (node)
            {
                case AstLambda _:
                    return node;
                case AstDefinitions definitions:
                {
                    foreach (var astVarDef in definitions.Definitions)
                    {
                        // We can safely remove write and value because assignment is preformed after exit
                        if (astVarDef.Name is AstSymbol symbol)
                        {
                            symbol.Usage = SymbolUsage.Unknown;
                        }
                        astVarDef.Value = null; 
                    }

                    return node;
                }
                default:
                    return Remove;
            }
        }
        
        public UnreachableFunctionCodeEliminationTreeTransformer(ICompressOptions options) : base(options)
        {
        }
    }
}