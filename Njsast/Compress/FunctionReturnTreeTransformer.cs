using Njsast.Ast;

namespace Njsast.Compress
{
    public class FunctionReturnTreeTransformer : CompressModuleTreeTransformerBase
    {
        bool _isInFunction;
        public FunctionReturnTreeTransformer(ICompressOptions options) : base(options)
        {
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstLambda astLambda)
            {
                if (_isInFunction)
                    return node; // TODO test
                _isInFunction = true;
                Descend();
                _isInFunction = false;
                RemoveLastReturnUndefined(astLambda);
                if (node is AstArrow astArrow)
                {
                    TryInlineArrowFunction(astArrow);
                    return astArrow;
                }
                
                
                return node;
            }

            if (node is AstStatementWithBody astStatementWithBody)
            {
                
                return node;
            }

            if (node is AstReturn astReturn)
            {
                if (astReturn.Value?.ConstValue() is AstUndefined)
                    astReturn.Value = null;

                if (astReturn.Value == null)
                {
                    // Last effective statement => remove
                }
            }

            return null;
        }

        protected override void ResetState()
        {
            base.ResetState();
            _isInFunction = false;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        protected override bool CanProcessNode(ICompressOptions options, AstNode node)
        {
            return options.EnableFunctionReturnCompress && node is AstLambda;
        }

        void RemoveLastReturnUndefined(AstLambda astLambda)
        {
            if (astLambda.Body.Count > 0 && astLambda.Body.Last is AstReturn astReturn && astReturn.Value == null)
            {
                astLambda.Body.RemoveAt(astLambda.Body.Count - 1);
            }
        }

        void TryInlineArrowFunction(AstArrow astArrow)
        {
            if (astArrow.Body.Count == 1 && astArrow.Body.Last is AstReturn astReturn && astReturn.Value != null)
            {
                astArrow.Body[astArrow.Body.Count - 1] = astReturn.Value;
            }
        }
    }
}