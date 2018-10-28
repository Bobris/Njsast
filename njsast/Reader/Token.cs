namespace Njsast.Reader
{
    public struct Token
    {
        object _value;
        SourceLocation _location;

        public Token(TokenType type, object value, SourceLocation location)
        {
            Type = type;
            this._value = value;
            this._location = location;
        }

        public TokenType Type { get; }
    }
}
