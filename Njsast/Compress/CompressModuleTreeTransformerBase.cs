using System;
using Njsast.Ast;

namespace Njsast.Compress
{
    public abstract class CompressModuleTreeTransformerBase : TreeTransformer
    {
        protected readonly ICompressOptions Options;

        protected virtual void ResetState()
        {
        } 

        protected CompressModuleTreeTransformerBase(ICompressOptions options)
        {
            Options = options;
        }

        protected abstract bool CanProcessNode(ICompressOptions options, AstNode node);

        protected override AstNode? After(AstNode node, bool inList)
        {
            throw new NotSupportedException();
        }

        public new AstNode Transform(AstNode start, bool inList = false)
        {
            if (!CanProcessNode(Options, start)) 
                return start;
            ResetState();
            return base.Transform(start, inList);
        }
    }
}