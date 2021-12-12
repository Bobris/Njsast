using System;
using System.Threading.Tasks;
using PuppeteerSharp;

namespace FunctionalTest;

public class BrowserFixture : IDisposable
{
    readonly Browser _browser;

    public Browser Browser => _browser;

    public BrowserFixture()
    {
        _browser = GetBrowser().GetAwaiter().GetResult();
    }
        
    async Task<Browser> GetBrowser() 
    {
        await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);
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