using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PuppeteerSharp;
using Xunit;

namespace FunctionalTest;

[Collection("Browser collection")]
public abstract class TwoPagesBrowserTestBase : IDisposable
{
    readonly List<string> _stdoutA = new List<string>();
    readonly List<string> _stdoutB = new List<string>();
    readonly List<string> _stderrA = new List<string>();
    readonly List<string> _stderrB = new List<string>();
    readonly TaskCompletionSource<bool> _taskCompletionSourceA = new TaskCompletionSource<bool>();
    readonly TaskCompletionSource<bool> _taskCompletionSourceB = new TaskCompletionSource<bool>();
    protected readonly IPage PageA;
    protected readonly IPage PageB;
    protected IReadOnlyList<string> StdoutA => _stdoutA;
    protected IReadOnlyList<string> StdoutB => _stdoutB;
    protected IReadOnlyList<string> StderrA => _stderrA;
    protected IReadOnlyList<string> StderrB => _stderrB;
    protected Task TaskA => _taskCompletionSourceA.Task;
    protected Task TaskB => _taskCompletionSourceB.Task;

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
        SetPageEvents(PageA, _stdoutA, _stderrA, _taskCompletionSourceA);
        SetPageEvents(PageB, _stdoutB, _stderrB, _taskCompletionSourceB);

        void SetPageEvents(IPage page, List<string> stdout, List<string> stderr, TaskCompletionSource<bool> taskCompletionSource)
        {
            var isAsyncTest = false;
            var isDone = false;
            page.Console += (sender, args) =>
            {
                switch (args.Message.Type)
                {
                    case ConsoleType.Log:
                        if (isDone)
                            throw new Exception("Console output after test finish");
                        stdout.Add(args.Message.Text);
                        if (args.Message.Text == "ASYNC_TEST")
                        {
                            isAsyncTest = true;
                        }
                        else if (isAsyncTest && args.Message.Text == "TEST_ASYNC_FINISH" ||
                                 !isAsyncTest && args.Message.Text == "TEST_FINISH")
                        {
                            taskCompletionSource.SetResult(true);
                            isDone = true;
                        }
                        break;
                    case ConsoleType.Error:
                        stderr.Add(ParseErrorMessage(args.Message.Text));
                        if (args.Message.Text == "TEST_FAIL")
                        {
                            taskCompletionSource.SetResult(false);
                        }
                        break;
                    default:
                        throw new NotSupportedException();
                }
            };

            string ParseErrorMessage(string message)
            {
                var firstLine = message!.Split("\n")[0];
                return firstLine;
            }
        }
    }

    protected static Task PerformCommand(string command, IPage page)
    {
        if (command == string.Empty)
        {
            return Task.CompletedTask;
        }
        if (command.StartsWith("MoveMouse "))
        {
            var data = command.Split(" ");
            return page.Mouse.MoveAsync(decimal.Parse(data[1]), decimal.Parse(data[2]));
        }
        if (command.StartsWith("Click "))
        {
            return page.ClickAsync(command.Substring("Click ".Length));
        }
        if (command.StartsWith("Type "))
        {
            return page.Keyboard.TypeAsync(command.Substring("Type ".Length));
        }

        throw new NotSupportedException();
    }

    public void Dispose()
    {
        PageA.Dispose();
        PageB.Dispose();
    }
}
