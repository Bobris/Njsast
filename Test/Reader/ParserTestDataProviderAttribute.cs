using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.RegularExpressions;
using Njsast.Reader;
using Njsast.Utils;
using Xunit.Sdk;

namespace Test.Reader
{
    public class ParserTestDataProviderAttribute : DataAttribute
    {
        const string InputFileExtension = ".js";
        const string OutputFileExtension = ".txt";
        const string NiceJsFileExtension = ".nicejs";
        const string NiceJsMapFileExtension = ".nicejs.map";
        const string MinJsFileExtension = ".minjs";
        const string MinJsMapFileExtension = ".minjs.map";

        readonly Regex EcmaScriptVersion = new Regex("es([0-9]+)");
        readonly string _testFileDirectory;
        readonly string _searchPattern;
        readonly bool _searchSubDirectories;

        private IEnumerable<string> InputFiles =>
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
                var niceJsMapFile = PathUtils.ChangeExtension(inputFile, NiceJsMapFileExtension);
                var minJsFile = PathUtils.ChangeExtension(inputFile, MinJsFileExtension);
                var minJsMapFile = PathUtils.ChangeExtension(inputFile, MinJsMapFileExtension);
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
                    IsInvalid = isInvalid,
                    EcmaScriptVersion = GetEcmaVersion(inputFile)
                };
                if (isInvalid) return new object[] {testData};
                testData.ExpectedMinJs = File.ReadAllText(minJsFile);
                testData.ExpectedMinJsMap = File.ReadAllText(minJsMapFile);
                testData.ExpectedNiceJs = File.ReadAllText(niceJsFile);
                testData.ExpectedNiceJsMap = File.ReadAllText(niceJsMapFile);

                return new object[] {testData};
            });
        }

        private int GetEcmaVersion(string fileName)
        {
            var match = EcmaScriptVersion.Match(fileName);
            if (!match.Success)
            {
                return Options.DefaultEcmaVersion;
            }
            return int.Parse(match.Groups[1].Value);
        }
    }
}
