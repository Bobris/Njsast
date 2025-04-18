using Njsast.ConstEval;
using Njsast.Reader;

namespace Njsast.Ast;

/// Symbol used as key in object { key: ... }
public class AstSymbolProperty : AstSymbol
{
    public AstSymbolProperty(string? source, Position startLoc, Position endLoc, string name) : base(source, startLoc, endLoc, name)
    {
    }

    public AstSymbolProperty(AstSymbol symbol) : base(symbol)
    {
    }

    public override AstNode ShallowClone()
    {
        return new AstSymbolProperty(Source, Start, End, Name);
    }

    public override object? ConstValue(IConstEvalCtx? ctx = null)
    {
        return Name;
    }

    public override bool IsStructurallyEquivalentTo(AstNode? with)
    {
        if (with is AstSymbolProperty astSymbolProperty)
        {
            return Name == astSymbolProperty.Name;
        }

        return false;
    }

    public override bool IsConstantLike(bool forbidPropWrite)
    {
        return true;
    }
}
