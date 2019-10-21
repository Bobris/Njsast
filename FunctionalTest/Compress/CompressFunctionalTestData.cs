using System.Collections.Generic;

namespace FunctionalTest.Compress
{
    public class CompressFunctionalTestData
    {
        public string Name { get; set; } = string.Empty;
        public string InputFileName { get; set; } = string.Empty;
        public string Input { get; set; } = string.Empty;
        public string ExpectedStdout { get; set; } = string.Empty;
        public string ExpectedStderr { get; set; } = string.Empty;
        public IReadOnlyList<string> Commands { get; set; } = EmptyList;
        public override string ToString()
        {
            return $"Name: {Name}";
        }
        
        static readonly IReadOnlyList<string> EmptyList = new string[0];
    }
}