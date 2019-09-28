using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Compress
{
    public class CompressTreeTransformer : TreeTransformer
    {
        bool _shouldIterateAgain;
        readonly ICompressOptions _options;
        readonly UnreachableCodeEliminationTreeTransformer _unreachableCodeEliminationTransformer = new UnreachableCodeEliminationTreeTransformer();
        readonly BlockEliminationTreeTransformer _blockEliminationTreeTransformer = new BlockEliminationTreeTransformer();
        readonly EmptyStatementEliminationTreeTransformer _emptyStatementEliminationTreeTransformer = new EmptyStatementEliminationTreeTransformer();
        readonly BooleanConstantsTreeTransformer _booleanConstantsTreeTransformer = new BooleanConstantsTreeTransformer();
        readonly IReadOnlyList<CompressModuleTreeTransformerBase> _compressModules; 

        public CompressTreeTransformer(ICompressOptions options)
        {
            _options = options;
            _compressModules = new List<CompressModuleTreeTransformerBase>
            {
                new UnreachableFunctionCodeEliminationTreeTransformer(_options),
                new UnreachableLoopCodeEliminationTreeTransformer(_options),
                new UnreachableSwitchCodeEliminationTreeTransformer(_options)
            };
        }


        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstToplevel)
            {
                return null;
            }
            var transformed = node;

            if (_options.EnableEmptyStatementElimination && transformed is AstEmptyStatement)
            {
                transformed = _emptyStatementEliminationTreeTransformer.Transform(transformed, inList);
            }

            if (_options.EnableBlockElimination && transformed is AstBlock)
            {
                transformed = _blockEliminationTreeTransformer.Transform(transformed, inList);
            }

            if (_options.EnableUnreachableCodeElimination && (transformed is AstStatementWithBody))
            {
                transformed = _unreachableCodeEliminationTransformer.Transform(transformed, inList);
            }
            
            foreach (var compressModuleTreeTransformer in _compressModules)
            {
                transformed = compressModuleTreeTransformer.Transform(transformed, inList);
                _shouldIterateAgain = _shouldIterateAgain || compressModuleTreeTransformer.ShouldIterateAgain;
            }

            if (_options.EnableBooleanCompress && transformed is AstBoolean)
            {
                transformed = _booleanConstantsTreeTransformer.Transform(transformed, inList);
            }
            
            _shouldIterateAgain = _shouldIterateAgain || transformed != node; 

            return transformed != node ? transformed : null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }

        public AstNode Compress(AstNode start, out bool shouldIterateAgain)
        {
            _shouldIterateAgain = false;
            var transformed = Transform(start);
            shouldIterateAgain = _shouldIterateAgain;
            return transformed;
        }
    }
}