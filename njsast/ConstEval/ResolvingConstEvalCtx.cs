using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.ConstEval
{
    public class ResolvingConstEvalCtx : IConstEvalCtx
    {
        readonly string _currentFilePath;
        readonly IImportResolver _resolver;

        public ResolvingConstEvalCtx(string currentFilePath, IImportResolver resolver)
        {
            _currentFilePath = currentFilePath;
            _resolver = resolver;
        }

        public JsModule ResolveRequire(string name)
        {
            return new JsModule {ImportedFrom = _currentFilePath, Name = name};
        }

        public object ConstValue(JsModule module, object export)
        {
            var fileName = _resolver.ResolveName(module);
            var content = _resolver.LoadContent(fileName);
            if (content == null || !(export is string)) return null;
            try
            {
                var parser = new Parser(new Options(), content);
                var toplevel = parser.Parse();
                toplevel.FigureOutScope();
                var treeWalker = new ExportFinder((string)export);
                treeWalker.Walk(toplevel);
                if (treeWalker.Result == null)
                    return null;
                var ctx = new ResolvingConstEvalCtx(fileName, _resolver);
                return treeWalker.Result.ConstValue(ctx);
            }
            catch
            {
                return null;
            }
        }
    }
}
