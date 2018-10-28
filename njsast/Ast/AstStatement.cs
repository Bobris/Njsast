﻿using Njsast.Reader;

namespace Njsast.Ast
{
    // Base class of all statements
    public class AstStatement : AstNode
    {
        public AstStatement(Parser parser, Position startPos, Position endPos) : base(parser, startPos, endPos)
        {
        }
    }
}
