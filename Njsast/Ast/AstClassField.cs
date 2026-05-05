using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast;

/// A class field, e.g. `static x = 1;` or `y = 2;`
public class AstClassField : AstObjectProperty
{
    public bool Static;

    public AstClassField(string? source, Position startLoc, Position endLoc, AstNode key, AstNode? value,
        bool @static) : base(source, startLoc, endLoc, key, value ?? new AstUndefined(source, startLoc, endLoc))
    {
        Static = @static;
    }

    AstClassField(AstNode key, AstNode value, bool @static) : base(key, value)
    {
        Static = @static;
    }

    public override AstNode ShallowClone()
    {
        return new AstClassField(Key, Value, Static) {Source = Source, Start = Start, End = End};
    }

    public override void CodeGen(OutputContext output)
    {
        if (Static)
        {
            output.Print("static");
            output.Space();
        }

        Key.Print(output);
        if (Value is not AstUndefined)
        {
            output.Space();
            output.Print("=");
            output.Space();
            Value.Print(output);
        }

        output.Print(";");
    }
}
