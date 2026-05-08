using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;
using Njsast;
using Njsast.Ast;

namespace Njsast.Reader;

public sealed partial class Parser
{
    bool IsTypeScript => Options.ParseTypeScript;

    AstStatement TsParseTypeOnlyStatement(Position startLocation)
    {
        TsSkipTypeDeclaration();
        return new AstTypeScriptOnly(SourceFile, startLocation, _lastTokEnd);
    }

    bool TsIsTypeOnlyStatementStart()
    {
        return IsTypeScript && (IsContextual("type") || IsContextual("interface"));
    }

    bool TsIsDeclareStatementStart()
    {
        return IsTypeScript && IsContextual("declare");
    }

    bool TsIsNamespaceStatementStart()
    {
        return IsTypeScript && IsContextual("namespace");
    }

    bool TsIsModuleNamespaceStatementStart()
    {
        return IsTypeScript && IsContextual("module");
    }

    bool TsTryParseNamespaceStatements(out List<AstStatement> statements)
    {
        statements = null!;
        var namespaceStart = Start;
        var isExport = false;
        if (Type == TokenType.Export)
        {
            var index = End.Index;
            while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
            if (!TsTextStartsKeyword(index, "namespace"))
                return false;
            isExport = true;
            Next();
        }

        if (!TsIsNamespaceStatementStart())
            return false;

        Next();
        var name = Type == TokenType.Name ? Value?.ToString() : null;
        if (name == null)
            Raise(Start, "Unexpected token");
        var namespaceName = name!;
        Next();
        Expect(TokenType.BraceL);
        var bodyStart = _lastTokEnd.Index;
        var bodyEnd = bodyStart;
        var depth = 1;
        while (Type != TokenType.Eof && depth > 0)
        {
            if (Type == TokenType.BraceL)
            {
                depth++;
            }
            else if (Type == TokenType.BraceR)
            {
                depth--;
                if (depth == 0)
                {
                    bodyEnd = Start.Index;
                    Next();
                    break;
                }
            }

            if (depth > 0)
                Next();
        }

        if (depth != 0)
            Raise(Start, "Unexpected token");
        Semicolon();

        var body = _input.Substring(bodyStart, bodyEnd - bodyStart);
        statements = TsLowerNamespace(namespaceName, isExport, body, namespaceStart, _lastTokEnd);
        return true;
    }

    List<AstStatement> TsLowerNamespace(string namespaceName, bool isExport, string body, Position start, Position end)
    {
        var parsedBody = TypeScriptParser.Parse(body, new Options
        {
            SourceType = SourceType.Module,
            ParseJSX = Options.ParseJSX,
            SourceFile = SourceFile
        });

        var exportedNames = TsCollectNamespaceExportedNames(parsedBody);
        var result = new List<AstStatement> { TsBuildNamespaceVariable(namespaceName, isExport, start, end) };
        var iifeBody = new StructList<AstNode>();

        for (var i = 0u; i < parsedBody.Body.Count; i++)
        {
            var statement = parsedBody.Body[i];
            if (TsTryLowerNamespaceExportedEnum(parsedBody.Body, ref i, namespaceName, ref iifeBody))
                continue;
            TsLowerNamespaceStatement(statement, namespaceName, exportedNames, ref iifeBody);
        }

        result.Add(TsBuildNamespaceIife(namespaceName, ref iifeBody, start, end));
        return result;
    }

    bool TsTryLowerNamespaceExportedEnum(StructList<AstNode> statements, ref uint index, string namespaceName,
        ref StructList<AstNode> iifeBody)
    {
        if (index + 1 >= statements.Count)
            return false;
        if (statements[index] is not AstExport { ExportedDefinition: AstVar varStatement })
            return false;
        if (varStatement.Definitions.Count != 1)
            return false;
        var definition = varStatement.Definitions[0];
        if (definition.Value != null || definition.Name is not AstSymbol enumSymbol)
            return false;
        if (!TsLooksLikeEnumIife(statements[index + 1], enumSymbol.Name))
            return false;

        var localDefinitions = new StructList<AstVarDef>();
        localDefinitions.Add(new AstVarDef(definition,
            new AstSymbolLet(new AstSymbolRef(enumSymbol.Source, enumSymbol.Start, enumSymbol.End, enumSymbol.Name)),
            null));
        iifeBody.Add(new AstLet(varStatement.Source, varStatement.Start, varStatement.End, ref localDefinitions));
        iifeBody.Add(new TypeScriptNamespaceEnumIifeTransformer(SourceFile, namespaceName, enumSymbol.Name)
            .Transform(statements[index + 1]));
        index++;
        return true;
    }

    static bool TsLooksLikeEnumIife(AstNode statement, string enumName)
    {
        return statement is AstSimpleStatement
        {
            Body: AstCall
            {
                Args.Count: 1,
                Expression: AstFunction,
                Args.UnsafeBackingArray: var args
            }
        } && args[0] is AstBinary
        {
            Operator: Operator.LogicalOr,
            Left: AstSymbolRef { Name: var leftName }
        } && leftName == enumName;
    }

    AstStatement TsBuildNamespaceVariable(string namespaceName, bool isExport, Position start, Position end)
    {
        var definitions = new StructList<AstVarDef>();
        var symbol = new AstSymbolVar(SourceFile, start, end, namespaceName, null);
        definitions.Add(new AstVarDef(SourceFile, start, end, symbol));
        var varStatement = new AstVar(SourceFile, start, end, ref definitions);
        if (!isExport)
            return varStatement;

        var specifiers = new StructList<AstNameMapping>();
        return new AstExport(SourceFile, start, end, null, varStatement, ref specifiers);
    }

    AstStatement TsBuildNamespaceIife(string namespaceName, ref StructList<AstNode> body, Position start, Position end)
    {
        var args = new StructList<AstNode>();
        args.Add(new AstSymbolFunarg(new AstSymbolRef(SourceFile, start, end, namespaceName), namespaceName));
        var function = new AstFunction(SourceFile, start, end, null, ref args, false, false, ref body);

        var callArgs = new StructList<AstNode>();
        var emptyObject = new AstObject(SourceFile, start, end);
        var namespaceRef = new AstSymbolRef(SourceFile, start, end, namespaceName);
        var namespaceAssign = new AstAssign(SourceFile, start, end, new AstSymbolRef(SourceFile, start, end, namespaceName),
            emptyObject, Operator.Assignment);
        callArgs.Add(new AstBinary(SourceFile, start, end, namespaceRef, namespaceAssign, Operator.LogicalOr));

        var call = new AstCall(SourceFile, start, end, function, ref callArgs);
        return new AstSimpleStatement(SourceFile, start, end, call);
    }

    void TsLowerNamespaceStatement(AstNode statement, string namespaceName, HashSet<string> exportedNames,
        ref StructList<AstNode> iifeBody)
    {
        if (statement is AstExport export)
        {
            TsLowerNamespaceExport(export, namespaceName, exportedNames, ref iifeBody);
            return;
        }

        iifeBody.Add(TsRewriteNamespaceExportReferences(statement, namespaceName, exportedNames));
    }

    void TsLowerNamespaceExport(AstExport export, string namespaceName, HashSet<string> exportedNames,
        ref StructList<AstNode> iifeBody)
    {
        if (export.ExportedDefinition is AstDefinitions definitions)
        {
            TsLowerNamespaceExportedDefinitions(definitions, namespaceName, exportedNames, ref iifeBody);
            return;
        }

        if (export.ExportedDefinition is AstDefun or AstDefClass)
        {
            var declaration = TsRewriteNamespaceExportReferences(export.ExportedDefinition, namespaceName, exportedNames);
            iifeBody.Add(declaration);
            var name = TsDeclarationName(declaration);
            if (name.Length != 0)
                iifeBody.Add(TsBuildNamespaceExportAssignment(namespaceName, name, new AstSymbolRef(declaration, name), declaration));
            return;
        }

        for (var i = 0u; i < export.ExportedNames.Count; i++)
        {
            var mapping = export.ExportedNames[i];
            var exportedName = mapping.ForeignName?.Name ?? mapping.Name.Name;
            iifeBody.Add(TsBuildNamespaceExportAssignment(namespaceName, exportedName,
                new AstSymbolRef(mapping.Name, mapping.Name.Name), mapping));
        }
    }

    void TsLowerNamespaceExportedDefinitions(AstDefinitions definitions, string namespaceName, HashSet<string> exportedNames,
        ref StructList<AstNode> iifeBody)
    {
        for (var i = 0u; i < definitions.Definitions.Count; i++)
        {
            var definition = definitions.Definitions[i];
            if (definition.Name is not AstSymbol symbol)
            {
                iifeBody.Add(TsRewriteNamespaceExportReferences(definitions, namespaceName, exportedNames));
                continue;
            }

            var value = definition.Value == null
                ? new AstUnaryPrefix(SourceFile, definition.Start, definition.End, Operator.Void,
                    new AstNumber(SourceFile, definition.Start, definition.End, 0, "0"))
                : TsRewriteNamespaceExportReferences(definition.Value, namespaceName, exportedNames);
            iifeBody.Add(TsBuildNamespaceExportAssignment(namespaceName, symbol.Name, value, definition));
        }
    }

    AstSimpleStatement TsBuildNamespaceExportAssignment(string namespaceName, string exportedName, AstNode value,
        AstNode positionHint)
    {
        var left = new AstDot(SourceFile, positionHint.Start, positionHint.End,
            new AstSymbolRef(SourceFile, positionHint.Start, positionHint.End, namespaceName), exportedName);
        var assignment = new AstAssign(SourceFile, positionHint.Start, positionHint.End, left, value, Operator.Assignment);
        return new AstSimpleStatement(SourceFile, positionHint.Start, positionHint.End, assignment);
    }

    AstNode TsRewriteNamespaceExportReferences(AstNode node, string namespaceName, HashSet<string> exportedNames)
    {
        return new TypeScriptNamespaceReferenceTransformer(SourceFile, namespaceName, exportedNames).Transform(node);
    }

    static string TsDeclarationName(AstNode declaration)
    {
        return declaration switch
        {
            AstDefun { Name: { } name } => name.Name,
            AstDefClass { Name: { } name } => name.Name,
            _ => string.Empty
        };
    }

    static HashSet<string> TsCollectNamespaceExportedNames(AstToplevel body)
    {
        var names = new HashSet<string>(StringComparer.Ordinal);
        foreach (var statement in body.Body.AsReadOnlySpan())
        {
            if (statement is not AstExport export)
                continue;

            if (export.ExportedDefinition is AstDefinitions definitions)
            {
                foreach (var definition in definitions.Definitions.AsReadOnlySpan())
                    if (definition.Name is AstSymbol symbol)
                        names.Add(symbol.Name);
            }
            else
            {
                var declarationName = TsDeclarationName(export.ExportedDefinition ?? export.ExportedValue!);
                if (declarationName.Length != 0)
                    names.Add(declarationName);
            }

            foreach (var mapping in export.ExportedNames.AsReadOnlySpan())
                names.Add(mapping.ForeignName?.Name ?? mapping.Name.Name);
        }

        return names;
    }

    sealed class TypeScriptNamespaceReferenceTransformer : TreeTransformer
    {
        readonly string? _sourceFile;
        readonly string _namespaceName;
        readonly HashSet<string> _exportedNames;

        public TypeScriptNamespaceReferenceTransformer(string? sourceFile, string namespaceName,
            HashSet<string> exportedNames)
        {
            _sourceFile = sourceFile;
            _namespaceName = namespaceName;
            _exportedNames = exportedNames;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is AstSymbolRef symbolRef && _exportedNames.Contains(symbolRef.Name))
                return new AstDot(_sourceFile, symbolRef.Start, symbolRef.End,
                    new AstSymbolRef(_sourceFile, symbolRef.Start, symbolRef.End, _namespaceName), symbolRef.Name);
            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }
    }

    sealed class TypeScriptNamespaceEnumIifeTransformer : TreeTransformer
    {
        readonly string? _sourceFile;
        readonly string _namespaceName;
        readonly string _enumName;

        public TypeScriptNamespaceEnumIifeTransformer(string? sourceFile, string namespaceName, string enumName)
        {
            _sourceFile = sourceFile;
            _namespaceName = namespaceName;
            _enumName = enumName;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            if (node is AstCall { Args.Count: 1 } call &&
                call.Args[0] is AstBinary { Operator: Operator.LogicalOr } currentArg)
            {
                var emptyObject = currentArg.Right is AstAssign { Right: { } assignedValue }
                    ? assignedValue
                    : currentArg.Right;
                var nsEnum = new AstDot(_sourceFile, currentArg.Start, currentArg.End,
                    new AstSymbolRef(_sourceFile, currentArg.Start, currentArg.End, _namespaceName), _enumName);
                var nsEnumAssign = new AstAssign(_sourceFile, currentArg.Start, currentArg.End,
                    new AstDot(_sourceFile, currentArg.Start, currentArg.End,
                        new AstSymbolRef(_sourceFile, currentArg.Start, currentArg.End, _namespaceName), _enumName),
                    emptyObject, Operator.Assignment);
                var fallback = new AstBinary(_sourceFile, currentArg.Start, currentArg.End, nsEnum, nsEnumAssign,
                    Operator.LogicalOr);
                call.Args[0] = new AstAssign(_sourceFile, currentArg.Start, currentArg.End,
                    new AstSymbolRef(_sourceFile, currentArg.Start, currentArg.End, _enumName), fallback,
                    Operator.Assignment);
            }

            return null;
        }
    }

    bool TsTryParseEnumStatements(out List<AstStatement> statements)
    {
        statements = null!;
        var isExport = false;
        var isConst = false;
        if (Type == TokenType.Export)
        {
            if (!TsExportStartsEnum(out isConst))
                return false;
            isExport = true;
            Next();
        }

        if (Type == TokenType.Const)
        {
            if (!TsTokenFollowedByEnum())
                return false;
            isConst = true;
            Next();
        }

        if (!IsContextual("enum"))
        {
            return false;
        }

        Next();
        var name = Type == TokenType.Name ? Value?.ToString() : null;
        if (name == null)
            Raise(Start, "Unexpected token");
        var enumName = name!;
        Next();
        Expect(TokenType.BraceL);
        var members = new List<(string Name, string? Value)>();
        while (Type != TokenType.BraceR && Type != TokenType.Eof)
        {
            var memberName = Type switch
            {
                TokenType.Name => Value?.ToString(),
                TokenType.String => Value?.ToString(),
                TokenType.Num => Value?.ToString(),
                _ => null
            };
            if (memberName == null)
                Raise(Start, "Unexpected token");
            Next();
            string? value = null;
            if (Eat(TokenType.Eq))
            {
                var valueStart = Start.Index;
                var braceDepth = 0;
                var parenDepth = 0;
                var bracketDepth = 0;
                while (Type != TokenType.Eof)
                {
                    if (braceDepth == 0 && parenDepth == 0 && bracketDepth == 0 &&
                        (Type == TokenType.Comma || Type == TokenType.BraceR))
                        break;

                    if (Type == TokenType.BraceL) braceDepth++;
                    else if (Type == TokenType.BraceR)
                    {
                        if (braceDepth == 0) break;
                        braceDepth--;
                    }
                    else if (Type == TokenType.ParenL) parenDepth++;
                    else if (Type == TokenType.ParenR)
                    {
                        if (parenDepth == 0) break;
                        parenDepth--;
                    }
                    else if (Type == TokenType.BracketL) bracketDepth++;
                    else if (Type == TokenType.BracketR)
                    {
                        if (bracketDepth == 0) break;
                        bracketDepth--;
                    }

                    Next();
                }
                value = _input.Substring(valueStart, Start.Index - valueStart).Trim();
            }

            members.Add((memberName!, value));
            Eat(TokenType.Comma);
        }

        Expect(TokenType.BraceR);
        if (isConst && TsTryEvaluateConstEnumMembers(members, out var values))
        {
            _tsConstEnums ??= new Dictionary<string, Dictionary<string, string>>(StringComparer.Ordinal);
            _tsConstEnums[enumName] = values;
            statements = new List<AstStatement>();
            return true;
        }

        var parsed = Parser.Parse(TsEmitEnumJavaScript(enumName, isExport, members), new Options { SourceType = SourceType.Module });
        statements = new List<AstStatement>();
        foreach (var statement in parsed.Body.AsReadOnlySpan())
            statements.Add((AstStatement)statement);
        return true;
    }

    bool TsExportStartsEnum(out bool isConst)
    {
        isConst = false;
        var index = End.Index;
        while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
        if (TsTextStartsKeyword(index, "enum")) return true;
        if (!TsTextStartsKeyword(index, "const")) return false;
        index += "const".Length;
        while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
        if (!TsTextStartsKeyword(index, "enum")) return false;
        isConst = true;
        return true;
    }

    bool TsTokenFollowedByEnum()
    {
        var index = End.Index;
        while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
        return TsTextStartsKeyword(index, "enum");
    }

    bool TsTextStartsKeyword(int index, string keyword)
    {
        return index + keyword.Length <= _input.Length &&
               _input.AsSpan(index, keyword.Length).SequenceEqual(keyword.AsSpan()) &&
               (index + keyword.Length == _input.Length || !IsIdentifierChar(_input.Get(index + keyword.Length)));
    }

    static bool TsTryEvaluateConstEnumMembers(List<(string Name, string? Value)> members,
        out Dictionary<string, string> values)
    {
        values = new Dictionary<string, string>(StringComparer.Ordinal);
        double next = 0;
        foreach (var member in members)
        {
            if (member.Value == null)
            {
                values[member.Name] = next.ToString(CultureInfo.InvariantCulture);
                next++;
                continue;
            }

            var expression = member.Value;
            foreach (var pair in values)
                expression = Regex.Replace(expression, $@"\b{Regex.Escape(pair.Key)}\b", pair.Value);
            if (TsIsStringLiteral(expression))
            {
                values[member.Name] = expression;
                continue;
            }

            if (!TsTryEvaluateNumericExpression(expression, out var numeric))
                return false;
            values[member.Name] = numeric.ToString(CultureInfo.InvariantCulture);
            next = numeric + 1;
        }

        return true;
    }

    static bool TsTryEvaluateNumericExpression(string expression, out double value)
    {
        value = 0;
        var parts = expression.Split('|', StringSplitOptions.TrimEntries);
        if (parts.Length > 1)
        {
            var aggregate = 0;
            foreach (var part in parts)
            {
                if (!int.TryParse(part, NumberStyles.Integer, CultureInfo.InvariantCulture, out var number))
                    return false;
                aggregate |= number;
            }

            value = aggregate;
            return true;
        }

        return double.TryParse(expression, NumberStyles.Float, CultureInfo.InvariantCulture, out value);
    }

    internal static string TsEmitEnumJavaScript(string name, bool isExport, List<(string Name, string? Value)> members)
    {
        var builder = new StringBuilder();
        if (isExport) builder.Append("export ");
        builder.Append("var ").Append(name).Append(";\n");
        builder.Append("(function (").Append(name).Append(") {\n");
        var nextNumeric = 0d;
        foreach (var member in members)
        {
            var value = member.Value;
            if (value == null)
            {
                value = nextNumeric.ToString(System.Globalization.CultureInfo.InvariantCulture);
                nextNumeric++;
                builder.Append(name).Append('[').Append(name).Append("[\"").Append(member.Name).Append("\"] = ").Append(value).Append("] = \"").Append(member.Name).Append("\";\n");
                continue;
            }

            if (double.TryParse(value, System.Globalization.NumberStyles.Float, System.Globalization.CultureInfo.InvariantCulture, out var numeric))
            {
                nextNumeric = numeric + 1;
                builder.Append(name).Append('[').Append(name).Append("[\"").Append(member.Name).Append("\"] = ").Append(value).Append("] = \"").Append(member.Name).Append("\";\n");
            }
            else if (TsIsStringLiteral(value))
            {
                builder.Append(name).Append("[\"").Append(member.Name).Append("\"] = ").Append(value).Append(";\n");
            }
            else
            {
                builder.Append(name).Append('[').Append(name).Append("[\"").Append(member.Name).Append("\"] = ").Append(value).Append("] = \"").Append(member.Name).Append("\";\n");
            }
        }

        builder.Append("})(").Append(name).Append(" || (").Append(name).Append(" = {}));");
        return builder.ToString();
    }

    static bool TsIsStringLiteral(string value)
    {
        value = value.TrimStart();
        return value.StartsWith("\"", StringComparison.Ordinal) || value.StartsWith("'", StringComparison.Ordinal);
    }

    sealed class TypeScriptConstEnumInlineTransformer : TreeTransformer
    {
        readonly string? _sourceFile;
        readonly Dictionary<string, Dictionary<string, string>> _constEnums;

        public TypeScriptConstEnumInlineTransformer(string? sourceFile,
            Dictionary<string, Dictionary<string, string>> constEnums)
        {
            _sourceFile = sourceFile;
            _constEnums = constEnums;
        }

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (node is not AstDot { Expression: AstSymbolRef enumRef, Property: string memberName } dot)
                return null;
            if (!_constEnums.TryGetValue(enumRef.Name, out var members) ||
                !members.TryGetValue(memberName, out var value))
                return null;
            if (double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out var number))
                return new AstNumber(_sourceFile, dot.Start, dot.End, number, value);
            if (TsIsStringLiteral(value))
                return new AstString(_sourceFile, dot.Start, dot.End, value.Trim()[1..^1]);
            return null;
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }
    }

    bool TsIsClassFollowing()
    {
        var index = End.Index;
        while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
        return index + 5 <= _input.Length && _input.AsSpan(index, 5).SequenceEqual("class".AsSpan()) &&
               (index + 5 == _input.Length || !IsIdentifierChar(_input.Get(index + 5)));
    }

    bool TsIsClassMemberModifier()
    {
        return IsTypeScript && Type == TokenType.Name &&
               (IsContextual("public") || IsContextual("private") || IsContextual("protected") ||
                IsContextual("readonly") || IsContextual("override") || IsContextual("abstract"));
    }

    bool TsTrySkipParameterPropertyModifiers()
    {
        if (!IsTypeScript) return false;
        var skipped = false;
        while (Type == TokenType.Name &&
               (IsContextual("public") || IsContextual("private") || IsContextual("protected") ||
                IsContextual("readonly")))
        {
            skipped = true;
            Next();
        }

        return skipped;
    }

    AstSimpleStatement TsBuildParameterPropertyAssignment(AstSymbol parameter)
    {
        var thisNode = new AstThis(SourceFile, parameter.Start, parameter.End);
        var left = new AstDot(SourceFile, parameter.Start, parameter.End, thisNode, parameter.Name);
        var right = new AstSymbolRef(SourceFile, parameter.Start, parameter.End, parameter.Name);
        var assignment = new AstAssign(SourceFile, parameter.Start, parameter.End, left, right, Operator.Assignment);
        return new AstSimpleStatement(SourceFile, parameter.Start, parameter.End, assignment);
    }

    bool TsTrySkipAbstractMember()
    {
        if (!IsTypeScript) return false;
        var index = Start.Index;
        while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
        if (index >= _input.Length) return false;

        var startOfLine = index;
        while (index < _input.Length)
        {
            var ch = _input[index];
            if (ch == '{') return false;
            if (ch == ';')
            {
                while (Start.Index <= index && Type != TokenType.Eof) Next();
                Eat(TokenType.Semi);
                return true;
            }
            index++;
        }
        return false;
    }

    bool TsTryParseFunctionOverloadStatement(Position startLocation, out AstStatement typeOnlyStatement)
    {
        typeOnlyStatement = null!;
        if (!IsTypeScript) return false;
        var index = Start.Index;
        var brace = _input.IndexOf('{', index);
        var semi = _input.IndexOf(';', index);
        if (semi < 0 || brace >= 0 && brace < semi) return false;

        TsSkipUntilStatementEnd();
        typeOnlyStatement = new AstTypeScriptOnly(SourceFile, startLocation, _lastTokEnd);
        return true;
    }

    AstStatement TsParseDeclareStatement(Position startLocation)
    {
        Next();
        if (Type == TokenType.Class)
        {
            TsSkipClassLikeDeclaration();
        }
        else
        {
            TsSkipUntilStatementEnd();
        }

        return new AstTypeScriptOnly(SourceFile, startLocation, _lastTokEnd);
    }

    bool TsTrySkipFunctionOverloadSignature(Position startLocation)
    {
        if (!IsTypeScript) return false;
        var index = Start.Index;
        while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
        if (index >= _input.Length || _input[index] != '(' && _input[index] != '<') return false;
        var paren = _input.IndexOf('(', index);
        if (paren < 0) return false;
        var close = TsFindMatching(paren, '(', ')');
        if (close < 0) return false;
        var after = close + 1;
        while (after < _input.Length && char.IsWhiteSpace(_input[after])) after++;
        if (after < _input.Length && _input[after] == ':')
        {
            after++;
            var typeEnd = TsSkipTypeInText(after);
            after = typeEnd;
            while (after < _input.Length && char.IsWhiteSpace(_input[after])) after++;
        }

        if (after >= _input.Length || _input[after] != ';') return false;
        while (Start.Index <= after && Type != TokenType.Eof) Next();
        Eat(TokenType.Semi);
        return true;
    }

    void TsTrySkipTypeParameters()
    {
        if (!IsTypeScript || Type != TokenType.Relational || !"<".Equals(Value)) return;
        TsSkipBalancedTokenType(TokenType.Relational, "<", ">");
    }

    void TsTrySkipTypeAnnotation()
    {
        if (!IsTypeScript || !Eat(TokenType.Colon)) return;
        TsSkipType();
    }

    void TsTrySkipOptionalOrDefiniteBindingMarker()
    {
        if (!IsTypeScript) return;
        if (Type == TokenType.Question || Type == TokenType.Prefix && "!".Equals(Value)) Next();
    }

    void TsSkipTypeDeclaration()
    {
        if (IsContextual("interface"))
        {
            Next();
            while (Type != TokenType.BraceL && Type != TokenType.Eof) Next();
            if (Type == TokenType.BraceL) TsSkipBalancedTokenType(TokenType.BraceL, "{", "}");
            Eat(TokenType.Semi);
            return;
        }

        TsSkipUntilStatementEnd();
    }

    void TsSkipClassLikeDeclaration()
    {
        while (Type != TokenType.BraceL && Type != TokenType.Semi && Type != TokenType.Eof) Next();
        if (Type == TokenType.BraceL) TsSkipBalancedTokenType(TokenType.BraceL, "{", "}");
        Eat(TokenType.Semi);
    }

    void TsSkipUntilStatementEnd()
    {
        var brace = 0;
        var paren = 0;
        var bracket = 0;
        while (Type != TokenType.Eof)
        {
            if (Type == TokenType.Semi && brace == 0 && paren == 0 && bracket == 0)
            {
                Next();
                return;
            }

            if (Type == TokenType.BraceL) brace++;
            else if (Type == TokenType.BraceR)
            {
                if (brace == 0) return;
                brace--;
            }
            else if (Type == TokenType.ParenL) paren++;
            else if (Type == TokenType.ParenR)
            {
                if (paren == 0) return;
                paren--;
            }
            else if (Type == TokenType.BracketL) bracket++;
            else if (Type == TokenType.BracketR)
            {
                if (bracket == 0) return;
                bracket--;
            }

            Next();
        }
    }

    void TsSkipType()
    {
        var angle = 0;
        var brace = 0;
        var paren = 0;
        var bracket = 0;
        var startedType = false;
        while (Type != TokenType.Eof)
        {
            if (angle == 0 && brace == 0 && paren == 0 && bracket == 0 &&
                (Type == TokenType.Comma || Type == TokenType.ParenR ||
                 (Type == TokenType.BraceL && startedType) ||
                 Type == TokenType.BraceR || Type == TokenType.Eq || Type == TokenType.Semi ||
                 Type == TokenType.Arrow))
                return;

            startedType = true;
            if (Type == TokenType.Relational && "<".Equals(Value)) angle++;
            else if (Type == TokenType.Relational && ">".Equals(Value) && angle > 0) angle--;
            else if (Type == TokenType.BraceL) brace++;
            else if (Type == TokenType.BraceR)
            {
                if (brace == 0) return;
                brace--;
            }
            else if (Type == TokenType.ParenL) paren++;
            else if (Type == TokenType.ParenR)
            {
                if (paren == 0) return;
                paren--;
            }
            else if (Type == TokenType.BracketL) bracket++;
            else if (Type == TokenType.BracketR)
            {
                if (bracket == 0) return;
                bracket--;
            }

            Next();
        }
    }

    void TsSkipBalancedTokenType(TokenType openType, string openValue, string closeValue)
    {
        var depth = 0;
        while (Type != TokenType.Eof)
        {
            if (Type == openType && openValue.Equals(Value)) depth++;
            else if (Type == TokenType.Relational && closeValue.Equals(Value) ||
                     Type == TokenType.BraceR && closeValue == "}" ||
                     Type == TokenType.ParenR && closeValue == ")" ||
                     Type == TokenType.BracketR && closeValue == "]")
            {
                depth--;
                Next();
                if (depth <= 0) return;
                continue;
            }

            Next();
        }
    }

    int TsSkipTypeInText(int index)
    {
        var angle = 0;
        var brace = 0;
        var paren = 0;
        var bracket = 0;
        while (index < _input.Length)
        {
            var ch = _input[index];
            if (angle == 0 && brace == 0 && paren == 0 && bracket == 0 && (ch == ';' || ch == '=' || ch == '{'))
                return index;
            switch (ch)
            {
                case '<': angle++; break;
                case '>': if (angle > 0) angle--; break;
                case '{': brace++; break;
                case '}': if (brace > 0) brace--; break;
                case '(': paren++; break;
                case ')': if (paren > 0) paren--; break;
                case '[': bracket++; break;
                case ']': if (bracket > 0) bracket--; break;
            }
            index++;
        }

        return index;
    }

    int TsFindMatching(int index, char open, char close)
    {
        var depth = 0;
        for (var i = index; i < _input.Length; i++)
        {
            if (_input[i] == open) depth++;
            else if (_input[i] == close && --depth == 0) return i;
        }

        return -1;
    }
}
