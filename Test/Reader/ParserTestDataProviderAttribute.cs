using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Njsast.Utils;
using Xunit.Sdk;

namespace Test.Reader
{
    public class ParserTestDataProviderAttribute : DataAttribute
    {
        const string InputFileExtension = ".js";
        const string OutputFileExtension = ".txt";
        const string NiceJsFileExtension = ".nicejs";
        const string MinJsFileExtension = ".minjs";

        readonly string _testFileDirectory;
        readonly string _searchPattern;
        readonly bool _searchSubDirectories;

        IEnumerable<string> InputFiles =>
            Directory
                .EnumerateFiles(_testFileDirectory, _searchPattern,
                    _searchSubDirectories ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly)
                .Where(x => x.EndsWith(InputFileExtension));

        public ParserTestDataProviderAttribute(string testFileDirectory, string searchPattern = "*",
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
                var outputFile = PathUtils.ChangeExtension(inputFile, OutputFileExtension);
                var niceJsFile = PathUtils.ChangeExtension(inputFile, NiceJsFileExtension);
                var minJsFile = PathUtils.ChangeExtension(inputFile, MinJsFileExtension);
                var isInvalid = !File.Exists(niceJsFile) || !File.Exists(minJsFile);
                if (!File.Exists(outputFile))
                {
                    throw new FileNotFoundException("File with expected result was not found", outputFile);
                }

                var testData = new ParserTestData
                {
                    Name = Path.GetFileNameWithoutExtension(inputFile),
                    Input = File.ReadAllText(inputFile),
                    ExpectedAst = File.ReadAllText(outputFile),
                    IsInvalid = isInvalid
                };
                if (isInvalid) return new object[] {testData};
                testData.ExpectedMinJs = File.ReadAllText(minJsFile);
                testData.ExpectedNiceJs = File.ReadAllText(niceJsFile);

                return new object[] {testData};
            });
        }
    }
}
