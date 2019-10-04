using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Njsast.Utils;
using Xunit.Sdk;

namespace FunctionalTest.Compress
{
    public class CompressSimpleFunctionalTestDataProviderAttribute : DataAttribute
    {
        const string StdoutFileExtension = ".stdout";
        const string StderrFileExtension = ".stderr";
        readonly string _testFileDirectory;
        readonly string _searchPattern;
        readonly bool _searchSubDirectories;
        
        IEnumerable<string> InputFiles => Directory.EnumerateFiles(_testFileDirectory, _searchPattern,
                _searchSubDirectories ? SearchOption.AllDirectories : SearchOption.TopDirectoryOnly)
            .Select(PathUtils.Normalize);

        public CompressSimpleFunctionalTestDataProviderAttribute(string testFileDirectory,
            string searchPattern = "*.js", bool searchSubDirectories = true)
        {
            _testFileDirectory = testFileDirectory;
            _searchPattern = searchPattern;
            _searchSubDirectories = searchSubDirectories;
        }
        
        public IEnumerable<CompressSimpleFunctionalTestData> GetTypedData()
        {
            return InputFiles.Select(inputFile =>
            {
                var stdOutFile = PathUtils.ChangeExtension(inputFile, StdoutFileExtension);
                var stdErrFile = PathUtils.ChangeExtension(inputFile, StderrFileExtension);
                return new CompressSimpleFunctionalTestData
                {
                    InputFileName = inputFile,
                    Name = PathUtils.WithoutExtension(inputFile),
                    Input = File.ReadAllText(inputFile),
                    ExpectedStdout = TryReadAllText(stdOutFile),
                    ExpectedStderr = TryReadAllText(stdErrFile)
                };
            });
        }

        static string TryReadAllText(string name)
        {
            return File.Exists(name) ? File.ReadAllText(name) : "";
        }
        
        public override IEnumerable<object[]> GetData(MethodInfo testMethod)
        {
            return GetTypedData().Select(x => new object[] {x});
        }
    }
}