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
        while (Type != TokenType.Eof)
        {
            if (angle == 0 && brace == 0 && paren == 0 && bracket == 0 &&
                (Type == TokenType.Comma || Type == TokenType.ParenR || Type == TokenType.BraceL ||
                 Type == TokenType.BraceR || Type == TokenType.Eq || Type == TokenType.Semi ||
                 Type == TokenType.Arrow))
                return;

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
