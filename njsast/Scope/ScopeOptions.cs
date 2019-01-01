using System;
using System.Collections.Generic;

namespace Njsast.Scope
{
    public class ScopeOptions
    {
        public bool KeepFunctionNames = false;
        public bool KeepClassNames = true;
        public bool TopLevel;
        public bool IgnoreEval;
        public HashSet<string> Reserved = new HashSet<string>();

        public ScopeOptions()
        {
            Reserved.Add("arguments");
        }

        public char[] Chars;

        public string Base54(uint idx)
        {
            Span<char> buf = stackalloc char[8];
            var chars = Chars;
            buf[0] = chars[idx % 54];
            idx = idx / 54;
            var resIdx = 1;

            while (idx > 0)
            {
                idx--;
                buf[resIdx++] = chars[idx % 64];
                idx = idx / 64;
            }

            return new string(buf.Slice(0, resIdx));
        }
    }
}
