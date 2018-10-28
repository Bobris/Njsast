using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class of all AST nodes
    public class AstNode
    {
        /// Start position in Source
        public Position Start;

        /// End position in Source
        public Position End;

        /// Name of original Source Code
        public string Source;

        protected AstNode(Parser parser, Position startLoc, Position endLoc)
        {
            Source = parser.SourceFile;
            Start = startLoc;
            End = endLoc;
        }

        protected AstNode(AstNode node)
        {
            Source = node.Source;
            Start = node.Start;
            End = node.End;
        }
    }
}
