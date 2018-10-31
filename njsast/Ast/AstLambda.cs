using Njsast.AstDump;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// Base class for functions
    public class AstLambda : AstScope
    {
        /// [AstSymbolDeclaration?] the name of this function
        public AstSymbolDeclaration Name;

        /// [AstSymbolFunarg|AstDestructuring|AstExpansion|AstDefaultAssign*] array of function arguments, destructurings, or expanding arguments
        public StructList<AstNode> ArgNames;

        /// [boolean/S] tells whether this function accesses the arguments array
        public bool UsesArguments;

        /// [boolean] is this a generator method
        public bool IsGenerator;

        /// [boolean] is this method async
        public bool Async;

        public AstLambda(Parser parser, Position startPos, Position endPos, AstSymbolDeclaration name,
            ref StructList<AstNode> argNames, bool isGenerator, bool async, ref StructList<AstNode> body) : base(parser,
            startPos, endPos)
        {
            Name = name;
            ArgNames.TransferFrom(ref argNames);
            IsGenerator = isGenerator;
            Async = async;
            Body.TransferFrom(ref body);
        }

        public override void Visit(TreeWalker w)
        {
            w.Walk(Name);
            w.WalkList(ArgNames);
            base.Visit(w);
        }

        public override void DumpScalars(IAstDumpWriter writer)
        {
            base.DumpScalars(writer);
            writer.PrintProp("IsGenerator", IsGenerator.ToString());
            writer.PrintProp("Async", Async.ToString());
        }
    }
}
