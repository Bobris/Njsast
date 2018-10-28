﻿using Njsast.Reader;

namespace Njsast.Ast
{
    /// A number literal
    public class AstNumber : AstConstant
    {
        /// [number] the numeric value
        public double Value;

        /// [string] numeric value as string (optional)
        public string Literal;

        public AstNumber(Parser parser, Position startLoc, Position endLoc, double value, string literal) : base(parser, startLoc, endLoc)
        {
            Value = value;
            Literal = literal;
        }
    }
}
