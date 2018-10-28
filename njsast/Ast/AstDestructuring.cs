﻿using Njsast.Reader;

namespace Njsast.Ast
{
    /// A destructuring of several names. Used in destructuring assignment and with destructuring function argument names
    public class AstDestructuring : AstNode
    {
        /// [AstNode*] Array of properties or elements
        public StructList<AstNode> Names;

        /// [Boolean] Whether the destructuring represents an object or array
        public bool IsArray;

        public AstDestructuring(Parser parser, Position startLoc, Position endLoc, ref StructList<AstNode> names, bool isArray) : base(parser, startLoc, endLoc)
        {
            Names.TransferFrom(ref names);
            IsArray = isArray;
        }
    }
}
