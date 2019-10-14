namespace FunctionalTest.Compress
{
    public class CompressFunctionalTestData
    {
        public string Name { get; set; } = string.Empty;
        public string InputFileName { get; set; } = string.Empty;
        public string Input { get; set; } = string.Empty;
        public string ExpectedStdout { get; set; } = string.Empty;
        public string ExpectedStderr { get; set; } = string.Empty;
        public override string ToString()
        {
            return $"Name: {Name}";
        }
    }
}