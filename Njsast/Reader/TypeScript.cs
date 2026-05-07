using System;
using System.Collections.Generic;
using System.Text;
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
        if (Type == TokenType.Export)
        {
            var index = End.Index;
            while (index < _input.Length && char.IsWhiteSpace(_input[index])) index++;
            if (index + 4 > _input.Length || !_input.AsSpan(index, 4).SequenceEqual("enum".AsSpan()) ||
                index + 4 < _input.Length && IsIdentifierChar(_input.Get(index + 4)))
                return false;
            isExport = true;
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
        var parsed = Parser.Parse(TsEmitEnumJavaScript(enumName, isExport, members), new Options { SourceType = SourceType.Module });
        statements = new List<AstStatement>();
        foreach (var statement in parsed.Body.AsReadOnlySpan())
            statements.Add((AstStatement)statement);
        return true;
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
        return value.StartsWith("\"", StringComparison.Ordinal) || value.StartsWith("'", StringComparison.Ordinal);
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
