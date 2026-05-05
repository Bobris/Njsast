using System;
using System.IO;
using Njsast.EsmToCjs;
using Njsast.Output;
using Njsast.Reader;
using Njsast.SourceMap;
using Njsast.Utils;

if (args.Length < 1)
{
    Console.Error.WriteLine("Usage: GenerateExpected <input-dir>");
    return 1;
}

var inputDir = Path.GetFullPath(args[0]);
var jsFiles = Directory.GetFiles(inputDir, "*.js", SearchOption.AllDirectories);

foreach (var jsFile in jsFiles)
{
    var normalized = PathUtils.Normalize(jsFile);
    var name = PathUtils.Name(normalized);
    
    string outCjs, outCjsMap;
    try
    {
        var content = File.ReadAllText(normalized);
        var parser = new Parser(new Options
        {
            SourceFile = name,
            EcmaVersion = 2020,
            SourceType = SourceType.Module
        }, content);
        var toplevel = parser.Parse();
        toplevel.FigureOutScope();

        var transformer = new EsmToCjsTreeTransformer();
        transformer.Transform(toplevel);
        toplevel.FigureOutScope();

        var builder = new SourceMapBuilder();
        toplevel.PrintToBuilder(builder, new OutputOptions { Beautify = true, Ecma = 6 });
        outCjs = builder.Content();
        outCjsMap = builder.Build(".", ".").ToString();
    }
    catch (SyntaxError e)
    {
        outCjs = e.Message;
        outCjsMap = "";
    }

    var cjsFile = PathUtils.ChangeExtension(normalized, ".cjs");
    var cjsMapFile = PathUtils.ChangeExtension(normalized, ".cjs.map");

    File.WriteAllText(cjsFile, outCjs);
    File.WriteAllText(cjsMapFile, outCjsMap);
    Console.WriteLine($"Generated {cjsFile}");
}

return 0;
