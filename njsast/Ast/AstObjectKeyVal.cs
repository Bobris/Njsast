using Njsast.AstDump;
using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A key: value object property
    public class AstObjectKeyVal : AstObjectProperty
    {
        public AstObjectKeyVal(Parser parser, Position startLoc, Position endLoc, string key, AstNode value) : base(
            parser, startLoc, endLoc, key, value)
        {
        }

        public AstObjectKeyVal(Parser parser, Position startLoc, Position endLoc, AstNode key, AstNode value) : base(
            parser, startLoc, endLoc, key, value)
        {
        }

        public override void CodeGen(OutputContext output)
        {
            string GetName(AstSymbol symbol)
            {
                return symbol.Thedef?.MangledName ?? symbol.Thedef?.Name ?? symbol.Name;
            }

            var allowShortHand = output.Options.Shorthand;
            if (allowShortHand &&
                Value is AstSymbol &&
                OutputContext.IsIdentifierString(Key) &&
                GetName((AstSymbol) Value) == (string) Key &&
                OutputContext.IsIdentifier(Key)
            )
            {
                output.PrintPropertyName((string) Key);
            }
            else if (allowShortHand &&
                     Value is AstDefaultAssign defAssign &&
                     defAssign.Left is AstSymbol &&
                     OutputContext.IsIdentifierString(Key) &&
                     GetName((AstSymbol) defAssign.Left) == (string) Key
            )
            {
                output.PrintPropertyName((string) Key);
                output.Space();
                output.Print("=");
                output.Space();
                defAssign.Right.Print(output);
            }
            else
            {
                if (!(Key is AstNode))
                {
                    output.PrintPropertyName(Key as string);
                }
                else
                {
                    output.Print("[");
                    ((AstNode) Key).Print(output);
                    output.Print("]");
                }

                output.Colon();
                Value.Print(output);
            }
        }
    }
}
