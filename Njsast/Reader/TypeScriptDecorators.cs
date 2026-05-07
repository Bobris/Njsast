using System.Collections.Generic;
using Njsast.Ast;

namespace Njsast.Reader;

public sealed partial class Parser
{
    List<AstNode> TsParseDecorators()
    {
        var decorators = new List<AstNode>();
        while (Type == TokenType.Decorator)
        {
            Next();
            decorators.Add(ParseExpression(Start));
        }
        return decorators;
    }

    void TsEmitDecoratedClass(AstToplevel topLevel, List<AstNode> decorators, AstDefClass classDecl)
    {
        var name = classDecl.Name!;
        var nameRef = new AstSymbolRef(SourceFile, name.Start, name.End, name.Name);

        var classNameSym = new AstSymbolDefClass(name);
        var classBody = new StructList<AstNode>();
        classBody.TransferFrom(ref classDecl.Properties);

        var classExpr = new AstClassExpression(SourceFile, classDecl.Start, classDecl.End,
            classNameSym, classDecl.Extends, ref classBody);

        var varSym = new AstSymbolVar(SourceFile, name.Start, name.End, name.Name, null);
        var varDef = new AstVarDef(SourceFile, classDecl.Start, classDecl.End, varSym, classExpr);

        var declarations = new StructList<AstVarDef>();
        declarations.Add(varDef);
        var varStmt = new AstVar(SourceFile, classDecl.Start, classDecl.End, ref declarations);

        var decoratorArray = BuildDecoratorArray(decorators, name);
        var decoratorCall = BuildDecorateCall(decoratorArray, nameRef);
        var assign = new AstAssign(SourceFile, classDecl.Start, classDecl.End, nameRef, decoratorCall, Operator.Assignment);
        var assignStmt = new AstSimpleStatement(SourceFile, classDecl.Start, classDecl.End, assign);

        topLevel.Body.Add(varStmt);
        topLevel.Body.Add(assignStmt);
    }

    AstArray BuildDecoratorArray(List<AstNode> decorators, AstNode positionHint)
    {
        var elements = new StructList<AstNode>();
        elements.Reserve((uint)decorators.Count);
        foreach (var d in decorators)
            elements.Add(d);
        return new AstArray(SourceFile, positionHint.Start, positionHint.End, ref elements);
    }

    AstCall BuildDecorateCall(AstArray decoratorArray, AstSymbolRef target)
    {
        var args = new StructList<AstNode>();
        args.Add(decoratorArray);
        args.Add(target);

        var decorateSym = new AstSymbolRef(SourceFile, target.Start, target.End, "__decorate");
        return new AstCall(SourceFile, target.Start, target.End, decorateSym, ref args, false);
    }
}
