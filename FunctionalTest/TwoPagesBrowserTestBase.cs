using System;
using System.Collections.Generic;
using PuppeteerSharp;
using Xunit;

namespace FunctionalTest
{
    [Collection("Browser collection")]
    public abstract class TwoPagesBrowserTestBase : IDisposable
    {
        readonly List<string> _stdoutA = new List<string>();
        readonly List<string> _stdoutB = new List<string>();
        readonly List<string> _stderrA = new List<string>();
        readonly List<string> _stderrB = new List<string>();
        protected readonly Page PageA;
        protected readonly Page PageB;
        protected IReadOnlyList<string> StdoutA => _stdoutA;
        protected IReadOnlyList<string> StdoutB => _stdoutB;
        protected IReadOnlyList<string> StderrA => _stderrA;
        protected IReadOnlyList<string> StderrB => _stderrB;
        
        public TwoPagesBrowserTestBase(BrowserFixture browserFixture)
        {
            PageA = browserFixture.Browser.NewPageAsync().GetAwaiter().GetResult();
            PageB = browserFixture.Browser.NewPageAsync().GetAwaiter().GetResult();
            SetupPages();
        }
        
        protected abstract string RuntimeTemplate { get; }
        
        protected string InjectScriptToRuntimeTemplate(string testName, string injectCode)
        {
            return RuntimeTemplate
                .Replace("%%TEST_NAME%%", testName)
                .Replace("%%INJECT%%", injectCode);
        }

        void SetupPages()
        {
            SetPageEvents(PageA, _stdoutA, _stderrA);
            SetPageEvents(PageB, _stdoutB, _stderrB);

            void SetPageEvents(Page page, List<string> stdout, List<string> stderr)
            {
                page.Console += (sender, args) =>
                {
                    switch (args.Message.Type)
                    {
                        case ConsoleType.Log:
                            stdout.Add(args.Message.Text);
                            break;
                        case ConsoleType.Error:
                            stderr.Add(ParseErrorMessage(args.Message.Text));
                            break;
                        default:
                            throw new NotSupportedException();
                    }
                };
                
                string ParseErrorMessage(string message)
                {
                    var firstLine = message.Split("\n")[0];
                    return firstLine;
                }
            }
        }

        public void Dispose()
        {
            PageA.Dispose();
            PageB.Dispose();
        }
    }
}