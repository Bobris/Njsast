using Njsast.Ast;

namespace Njsast.ConstEval
{
    public interface IConstEvalCtx
    {
        string SourceName { get; }
        JsModule ResolveRequire(string name);

        /// export will be usually string, could be JsSymbol in ES6
        object ConstValue(JsModule module, object export);

        bool AllowEvalObjectWithJustConstKeys { get; }

        string ConstStringResolver(string str);

        IConstEvalCtx StripPathResolver();

        IConstEvalCtx CreateForSourceName(string sourceName);
    }
}
