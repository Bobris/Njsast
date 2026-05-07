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
        if (_tsPendingClassDecoratorStatements != null)
        {
            foreach (var decoratorStatement in _tsPendingClassDecoratorStatements)
                topLevel.Body.Add(decoratorStatement);
            _tsPendingClassDecoratorStatements = null;
        }
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

    AstSimpleStatement TsBuildMemberDecorateStatement(List<AstNode> decorators, string className, AstNode key,
        bool @static, bool isProperty)
    {
        var target = TsBuildDecoratorTarget(className, @static, key);
        var args = new StructList<AstNode>();
        args.Add(BuildDecoratorArray(decorators, key));
        args.Add(target);
        args.Add(TsBuildDecoratorKey(key));
        args.Add(isProperty
            ? new AstUnaryPrefix(SourceFile, key.Start, key.End, Operator.Void, new AstNumber(SourceFile, key.Start, key.End, 0, "0"))
            : new AstNull(SourceFile, key.Start, key.End));

        var decorateSym = new AstSymbolRef(SourceFile, key.Start, key.End, "__decorate");
        var call = new AstCall(SourceFile, key.Start, key.End, decorateSym, ref args, false);
        return new AstSimpleStatement(SourceFile, key.Start, key.End, call);
    }

    AstSimpleStatement TsBuildParameterDecorateStatement(List<(int Index, AstNode Decorator)> decorators,
        string className, AstNode key, bool @static)
    {
        var decoratorCalls = new List<AstNode>();
        foreach (var decorator in decorators)
            decoratorCalls.Add(TsBuildParamCall(decorator.Index, decorator.Decorator));
        return TsBuildMemberDecorateStatement(decoratorCalls, className, key, @static, false);
    }

    AstCall TsBuildParamCall(int index, AstNode decorator)
    {
        var args = new StructList<AstNode>();
        args.Add(new AstNumber(SourceFile, decorator.Start, decorator.End, index, index.ToString(System.Globalization.CultureInfo.InvariantCulture)));
        args.Add(decorator);

        var paramSym = new AstSymbolRef(SourceFile, decorator.Start, decorator.End, "__param");
        return new AstCall(SourceFile, decorator.Start, decorator.End, paramSym, ref args, false);
    }

    AstNode TsBuildDecoratorTarget(string className, bool @static, AstNode positionHint)
    {
        var classRef = new AstSymbolRef(SourceFile, positionHint.Start, positionHint.End, className);
        return @static ? classRef : new AstDot(SourceFile, positionHint.Start, positionHint.End, classRef, "prototype");
    }

    AstNode TsBuildDecoratorKey(AstNode key)
    {
        return key switch
        {
            AstSymbol symbol => new AstString(SourceFile, key.Start, key.End, symbol.Name),
            AstString str => new AstString(SourceFile, key.Start, key.End, str.Value),
            AstNumber num => new AstNumber(SourceFile, key.Start, key.End, num.Value, num.Literal),
            _ => key
        };
    }
}
