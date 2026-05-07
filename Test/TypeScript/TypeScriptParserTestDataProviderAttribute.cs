using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Njsast.Utils;
using Xunit.Sdk;

namespace Test.TypeScript;

public sealed class TypeScriptParserTestDataProviderAttribute : DataAttribute
{
    static readonly string[] InputFileExtensions = [".ts", ".tsx"];
    const string ExpectedAstFileExtension = ".txt";
    const string ExpectedNiceJsFileExtension = ".nicejs";
    const string ExpectedMinJsFileExtension = ".minjs";

    readonly string _testFileDirectory;
    readonly string _searchPattern;
    readonly bool _searchSubDirectories;

    public TypeScriptParserTestDataProviderAttribute(string testFileDirectory, string searchPattern = "*",
        bool searchSubDirectories = true)
    {
        _testFileDirectory = testFileDirectory;
        _searchPattern = searchPattern;
        _searchSubDirectories = searchSubDirectories;
    }

    IEnumerable<string> InputFiles =>
        Directory
            .EnumerateFiles(_testFileDirectory, _searchPattern,
                _searchSubDirectories ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly)
            .Where(x => InputFileExtensions.Any(x.EndsWith))
            .Select(PathUtils.Normalize);

    public IEnumerable<TypeScriptParserTestData> GetTypeScriptParserData()
    {
        return InputFiles.Select(inputFile =>
        {
            var expectedAstFile = PathUtils.ChangeExtension(inputFile, ExpectedAstFileExtension);
            var expectedNiceJsFile = PathUtils.ChangeExtension(inputFile, ExpectedNiceJsFileExtension);
            var expectedMinJsFile = PathUtils.ChangeExtension(inputFile, ExpectedMinJsFileExtension);

            return new TypeScriptParserTestData
            {
                Name = PathUtils.WithoutExtension(inputFile),
                SourceName = PathUtils.Name(inputFile),
                Input = File.ReadAllText(inputFile),
                ExpectedAst = File.Exists(expectedAstFile) ? File.ReadAllText(expectedAstFile) : "",
                ExpectedNiceJs = File.Exists(expectedNiceJsFile) ? File.ReadAllText(expectedNiceJsFile) : "",
                ExpectedMinJs = File.Exists(expectedMinJsFile) ? File.ReadAllText(expectedMinJsFile) : ""
            };
        });
    }

    public override IEnumerable<object[]> GetData(MethodInfo testMethod)
    {
        return GetTypeScriptParserData().Select(x => new object[] { x });
    }
}
