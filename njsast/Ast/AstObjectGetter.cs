﻿using Njsast.Reader;

namespace Njsast.Ast
{
    /// An object getter property
    public class AstObjectGetter : AstObjectProperty
    {
        // [string|undefined] the original quote character, if any
        //public string Quote;

        /// [boolean] whether this is a static getter (classes only)
        public bool Static;

        public AstObjectGetter(Parser parser, Position startLoc, Position endLoc, AstNode key, AstNode value, bool @static) : base(parser, startLoc, endLoc, key, value)
        {
            Static = @static;
        }
    }
}
