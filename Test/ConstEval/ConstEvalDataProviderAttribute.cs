using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Njsast.Utils;
using Xunit.Sdk;

namespace Test.ConstEval
{
    public class ConstEvalDataProviderAttribute : DataAttribute
    {
        const string NiceJsFileExtension = ".nicejs";

        readonly string _testFileDirectory;
        readonly string _searchPattern;
        readonly bool _searchSubDirectories;

        IEnumerable<string> InputFiles => Directory.EnumerateFiles(_testFileDirectory, _searchPattern,
                _searchSubDirectories ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly)
            .Where(x => !Path.GetFileNameWithoutExtension(x).StartsWith("dep-"));

        public ConstEvalDataProviderAttribute(string testFileDirectory, string searchPattern = "*.js",
            bool searchSubDirectories = true)
        {
            _testFileDirectory = testFileDirectory;
            _searchPattern = searchPattern;
            _searchSubDirectories = searchSubDirectories;
        }

        public override IEnumerable<object[]> GetData(MethodInfo testMethod)
        {
            return InputFiles.Select(inputFile =>
            {
                var niceJsFile = PathUtils.ChangeExtension(inputFile, NiceJsFileExtension);
                return new object[]
                {
                    new ConstEvalTestData
                    {
                        InputContent = File.ReadAllText(inputFile),
                        InputFileName = inputFile,
                        Name = Path.GetFileNameWithoutExtension(inputFile),
                        ExpectedNiceJs = File.ReadAllText(niceJsFile)
                    }
                };
            });
        }
    }
}