namespace Njsast.Compress
{
    public interface ICompressOptions
    {
        bool EnableUnreachableCodeElimination { get; }
        bool EnableEmptyStatementElimination { get; }
        bool EnableBlockElimination { get; }
        uint MaxPasses { get; }
    }
}