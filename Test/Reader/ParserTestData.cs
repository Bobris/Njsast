namespace Test.Reader
{
    public class ParserTestData
    {
        public string Name { get; set; } = string.Empty;
        public bool IsInvalid { get; set; }
        public string Input { get; set; } = string.Empty;
        public string ExpectedAst { get; set; } = string.Empty;
        public string ExpectedNiceJs { get; set; } = string.Empty;
        public string ExpectedNiceJsMap { get; set; } = string.Empty;
        public string ExpectedMinJs { get; set; } = string.Empty;
        public string ExpectedMinJsMap { get; set; } = string.Empty;

        public override string ToString()
        {
            return $"Name: {Name}";
        }
    }
}
