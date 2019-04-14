using Njsast.Ast;

namespace Njsast.ConstEval
{
    public interface IConstEvalCtx
    {
        JsModule ResolveRequire(string name);

        /// export will be usually string, could be JsSymbol in ES6
        object ConstValue(JsModule module, object export);

        bool AllowEvalObjectWithJustConstKeys { get; }
    }
}
