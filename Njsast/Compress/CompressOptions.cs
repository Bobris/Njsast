namespace Njsast.Compress
{
    public class CompressOptions : ICompressOptions
    {
        public bool EnableUnreachableCodeElimination { get; set; }
        public bool EnableEmptyStatementElimination { get; set; }
        public bool EnableBlockElimination { get; set; }
        public uint MaxPasses { get; set; }

        public static readonly ICompressOptions Default = new CompressOptions
        {
            EnableUnreachableCodeElimination = true,
            EnableEmptyStatementElimination = true,
            EnableBlockElimination = true,
            MaxPasses = 10
        };
    }
}