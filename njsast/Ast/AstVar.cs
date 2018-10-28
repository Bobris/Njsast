﻿using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `var` statement
    public class AstVar : AstDefinitions
    {
        public AstVar(Parser parser, Position startPos, Position endPos, ref StructList<AstVarDef> definitions) : base(parser, startPos, endPos, ref definitions)
        {
        }
    }
}
