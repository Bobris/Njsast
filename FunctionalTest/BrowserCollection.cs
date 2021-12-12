using Xunit;

namespace FunctionalTest;

[CollectionDefinition("Browser collection")]
public class BrowserCollection : ICollectionFixture<BrowserFixture>
{
}