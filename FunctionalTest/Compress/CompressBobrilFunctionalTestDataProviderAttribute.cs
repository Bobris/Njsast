using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using Njsast.Utils;
using Xunit.Sdk;

namespace FunctionalTest.Compress
{
    public class CompressBobrilFunctionalTestDataProviderAttribute : DataAttribute
    {
        const string CompiledScriptPath = "dist/a.js";
        const string ExpectedStdoutFileName = "expected.stdout";
        const string ExpectedStderrFileName = "expected.stderr";
        readonly string _testProjectsDirectory;

        IEnumerable<string> InputProjects => Directory.EnumerateDirectories(_testProjectsDirectory).Select(PathUtils.Normalize);

        public CompressBobrilFunctionalTestDataProviderAttribute(string testProjectsDirectory)
        {
            _testProjectsDirectory = testProjectsDirectory;
        }
        
        public IEnumerable<CompressFunctionalTestData> GetTypedData()
        {
            return InputProjects.Select(projectDirectory =>
            {
                var inputFileName = PathUtils.Join(projectDirectory, CompiledScriptPath);
                var stdOutFile = PathUtils.Join(projectDirectory, ExpectedStdoutFileName);
                var stdErrFile = PathUtils.Join(projectDirectory, ExpectedStderrFileName);
                return new CompressFunctionalTestData
                {
                    InputFileName = inputFileName,
                    Name = projectDirectory,
                    Input = File.ReadAllText(inputFileName),
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