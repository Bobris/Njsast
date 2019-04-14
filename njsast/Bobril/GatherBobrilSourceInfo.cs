using Njsast.Ast;
using Njsast.ConstEval;
using System.Collections.Generic;
using System.Linq;

namespace Njsast.Bobril
{
    public class GatherBobrilSourceInfo
    {
        public static SourceInfo Gather(AstNode toplevel, IConstEvalCtx ctx)
        {
            var evalCtx = new BobrilSpecialEval(ctx);
            var gatherer = new GatherTreeWalker(evalCtx);
            gatherer.Walk(toplevel);
            return gatherer.SourceInfo;
        }

        public class BobrilSpecialEval : IConstEvalCtx
        {
            readonly IConstEvalCtx _ctx;

            public BobrilSpecialEval(IConstEvalCtx ctx)
            {
                _ctx = ctx;
            }

            public JsModule ResolveRequire(string name)
            {
                return _ctx.ResolveRequire(name);
            }

            public object ConstValue(JsModule module, object export)
            {
                if (module.Name == "bobril" && export is string expName)
                {
                    if (expName == "asset" || expName == "styleDef" || expName == "styleDefEx" || expName == "sprite") return new JsModuleExport(module.Name, expName);
                }

                if (module.Name == "bobril-g11n" && export is string expName2)
                {
                    if (expName2 == "t" || expName2 == "f" || expName2 == "dt")
                        return new JsModuleExport(module.Name, expName2);
                }
                return _ctx.ConstValue(module, export);
            }

            public bool AllowEvalObjectWithJustConstKeys => true;
        }

        class GatherTreeWalker : TreeWalker
        {
            IConstEvalCtx _evalCtx;
            internal SourceInfo SourceInfo;

            public GatherTreeWalker(IConstEvalCtx evalCtx)
            {
                _evalCtx = evalCtx;
                SourceInfo = new SourceInfo();
            }

            protected override void Visit(AstNode node)
            {
                if (node is AstCall call)
                {
                    if (call.Expression.IsConstValue(_evalCtx))
                    {
                        var fn = call.Expression.ConstValue(_evalCtx);
                        if (fn is JsModuleExport exp)
                        {
                            if (exp.ModuleName == "bobril-g11n")
                            {
                                if (exp.ExportName == "t" && call.Args.Count >= 1 && call.Args.Count <= 3)
                                {
                                    var tr = new SourceInfo.Translation();
                                    var messageArg = call.Args[0];
                                    tr.StartLine = messageArg.Start.Line;
                                    tr.StartCol = messageArg.Start.Column;
                                    tr.EndLine = messageArg.End.Line;
                                    tr.EndCol = messageArg.End.Column;
                                    tr.Message = messageArg.ConstValue(_evalCtx) as string;
                                    if (call.Args.Count >= 2)
                                    {
                                        var paramsArg = call.Args[1].ConstValue(_evalCtx);
                                        if (!(paramsArg is AstNull) && !(paramsArg is AstUndefined))
                                        {
                                            tr.WithParams = true;
                                            var pars = paramsArg as IDictionary<object, object>;
                                            if (pars != null)
                                            {
                                                tr.KnownParams = pars.Keys.Select(a => a as string).Where(a => a != null).ToList();
                                            }
                                        }
                                    }
                                    tr.WithParams = call.Args.Count >= 2;
                                    if (call.Args.Count >= 3)
                                    {
                                        var hintArg = call.Args[2];
                                        tr.StartHintLine = hintArg.Start.Line;
                                        tr.StartHintCol = hintArg.Start.Column;
                                        tr.EndHintLine = hintArg.End.Line;
                                        tr.EndHintCol = hintArg.End.Column;
                                        var hintStr = hintArg.ConstValue(_evalCtx) as string;
                                        tr.Hint = hintStr;
                                    }
                                    if (SourceInfo.Translations == null)
                                        SourceInfo.Translations = new List<SourceInfo.Translation>();
                                    SourceInfo.Translations.Add(tr);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
