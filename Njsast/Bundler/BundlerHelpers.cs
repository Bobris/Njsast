using System;
using Njsast.Ast;
using Njsast.Reader;
using Njsast.Utils;

namespace Njsast.Bundler
{
    public class BundlerHelpers
    {
        public static SourceFile BuildSourceFile(string name, string content, SourceMap.SourceMap? sourceMap,
            Func<string, string, string> resolver)
        {
            AstToplevel toplevel;
            AstSymbol symbol;
            if (PathUtils.GetExtension(name) == "json")
            {
                (toplevel, symbol) = Helpers.EmitVarDefineJson(content, name);
                return new SourceFile(name, toplevel) {WholeExport = symbol};
            }

            var commentListener = new Bobril.CommentListener();
            toplevel =
                new Parser(new Options {SourceFile = name, OnComment = commentListener.OnComment}, content).Parse();
            commentListener.Walk(toplevel);
            sourceMap?.ResolveInAst(toplevel);
            toplevel.FigureOutScope();
            if (toplevel.Globals!.ContainsKey("module"))
            {
                (toplevel, symbol) = Helpers.EmitCommonJsWrapper(toplevel);
                return new SourceFile(name, toplevel) {WholeExport = symbol};
            }

            var sourceFile = new SourceFile(name, toplevel);
            new ImportExportTransformer(sourceFile, resolver).Transform(toplevel);
            return sourceFile;
        }
    }
}
