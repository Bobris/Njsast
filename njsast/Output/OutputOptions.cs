using System.Runtime.InteropServices;

namespace Njsast.Output
{
    public class OutputOptions
    {
        public bool beautify = false;
        public int ecma = 5;
        public int indent_level = 4;
        public int indent_start = 0;
        public bool inline_script = true;
        public int max_line_len = 32000;
        public bool safari10 = true;
        public bool webkit = false;
        public int width = 80;
        public bool wrap_iife = false;
        public bool braces = false;
        public bool shorthand = false;
    }
}
