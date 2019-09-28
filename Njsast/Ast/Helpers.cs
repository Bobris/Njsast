using System.Collections.Generic;
using Njsast.Runtime;

namespace Njsast.Ast
{
    public static class Helpers
    {
        public static AstVar EmitVarDefines(IReadOnlyDictionary<string, object> defines)
        {
            var defs = new StructList<AstVarDef>();
            defs.Reserve((uint)defines.Count);
            foreach (var (name, value) in defines)
            {
                defs.Add(new AstVarDef(new AstSymbolVar(name), TypeConverter.ToAst(value)));
            }
            return new AstVar(ref defs);
        }
    }
}