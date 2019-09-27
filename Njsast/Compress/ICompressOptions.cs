namespace Njsast.Compress
{
    public interface ICompressOptions
    {
        bool EnableUnreachableCodeElimination { get; }
        bool EnableEmptyStatementElimination { get; }
        bool EnableBlockElimination { get; }
        bool EnableBooleanCompress { get; }
        uint MaxPasses { get; }
    }
}