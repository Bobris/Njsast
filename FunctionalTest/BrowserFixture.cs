using System;
using System.Threading.Tasks;
using PuppeteerSharp;

namespace FunctionalTest;

public class BrowserFixture : IDisposable
{
    readonly IBrowser _browser;

    public IBrowser Browser => _browser;

    public BrowserFixture()
    {
        _browser = GetBrowser().GetAwaiter().GetResult();
    }

    async Task<IBrowser> GetBrowser()
    {
        await new BrowserFetcher().DownloadAsync();
        return await Puppeteer.LaunchAsync(new LaunchOptions
        {
            Headless = true
        });
    }

    public void Dispose()
    {
        _browser.Dispose();
    }
}
