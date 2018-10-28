using Njsast.Reader;

namespace Njsast.Ast
{
    /// A templatestring with a prefix, such as String.raw`foobarbaz`
    public class AstPrefixedTemplateString : AstNode
    {
        /// [AstTemplateString] The template string
        public AstTemplateString TemplateString;

        /// [AstSymbolRef|AstPropAccess] The prefix, which can be a symbol such as `foo` or a dotted expression such as `String.raw`.
        public AstNode Prefix;

        public AstPrefixedTemplateString(Parser parser, Position startLoc, Position endLoc, AstNode prefix, AstTemplateString templateString) : base(parser, startLoc, endLoc)
        {
            TemplateString = templateString;
            Prefix = prefix;
        }
    }
}
