using System.Collections.Generic;
using Njsast.Ast;
using Xunit;

namespace Test.Ast
{
    public class HelpersTests
    {
        [Fact]
        public void EmitVarDefinesTest()
        {
            var ast = Helpers.EmitVarDefines(new Dictionary<string, object> {{"DEBUG", true}, {"answer", 42}});
            var toplevel = new AstToplevel();
            toplevel.Body.Add(ast);
            Assert.Equal("var DEBUG=true,answer=42", toplevel.PrintToString());
        }

        [Fact]
        public void EmitVarDefineJsonTest()
        {
            var (toplevel, symbol) = Helpers.EmitVarDefineJson("[42]", null);
            Assert.Equal("content", symbol.Name);
            Assert.Equal("var content=[42]", toplevel.PrintToString());
        }
    }
}
