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
