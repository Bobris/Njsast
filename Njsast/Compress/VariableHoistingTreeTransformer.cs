using System;
using Njsast.Ast;

namespace Njsast.Compress
{
    public class VariableHoistingTreeTransformer : CompressModuleTreeTransformerBase
    {
        bool _isInScope;
        public VariableHoistingTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode Before(AstNode node, bool inList)
        {
            if (node is AstScope astScope)
            {
                if (_isInScope)
                {
                    return astScope;
                }
                _isInScope = true;
                Descend();
                _isInScope = false;
            }
            
            // TODO variable detection => var def move to top, var init leave where it is
            throw new NotImplementedException();
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableVariableHoisting && node is AstScope && !(node is AstClass);
        }
    }
}