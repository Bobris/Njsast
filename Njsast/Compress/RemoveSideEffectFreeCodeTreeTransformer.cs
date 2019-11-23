using Njsast.Ast;
using Njsast.Reader;
using Njsast.Runtime;

namespace Njsast.Compress
{
    public class RemoveSideEffectFreeCodeTreeTransformer : TreeTransformer
    {
        bool NeedValue = true;

        protected override AstNode? Before(AstNode node, bool inList)
        {
            if (NeedValue)
            {
                switch (node)
                {
                    case AstEmptyStatement _:
                    {
                        return inList ? Remove : node;
                    }
                    case AstWith _:
                        return node;
                    case AstAssign assign:
                    {
                        if (assign.Operator == Operator.Assignment)
                        {
                            if (assign.Left.IsSymbolDef()?.NeverRead ?? false)
                            {
                                return Transform(assign.Right);
                            }
                        }

                        return null;
                    }
                    case AstBinary binary:
                    {
                        if (binary.Operator == Operator.LogicalOr)
                        {
                            var b = binary.Left.ConstValue();
                            if (b != null)
                            {
                                if (TypeConverter.ToBoolean(b))
                                {
                                    return Transform(binary.Left);
                                }

                                return Transform(binary.Right);
                            }
                        }
                        if (binary.Operator == Operator.LogicalAnd)
                        {
                            var b = binary.Left.ConstValue();
                            if (b != null)
                            {
                                if (!TypeConverter.ToBoolean(b))
                                {
                                    return Transform(binary.Left);
                                }

                                return Transform(binary.Right);
                            }
                        }

                        return null;
                    }
                    case AstSimpleStatement simple:
                    {
                        NeedValue = false;
                        node.Transform(this);
                        NeedValue = true;
                        return simple.Body == Remove
                            ? inList ? Remove : new AstEmptyStatement(node.Source, node.Start, node.End)
                            : simple;
                    }
                    case AstDefinitions def:
                        NeedValue = false;
                        try
                        {
                            if (inList)
                            {
                                var defsResult = new StructList<AstNode>();
                                defsResult.Reserve(def.Definitions.Count);
                                var wasChange = 0;
                                foreach (var defi in def.Definitions)
                                {
                                    var defo = Transform(defi);
                                    if (defo == Remove)
                                    {
                                        wasChange |= 1;
                                        continue;
                                    }

                                    if (defo != defi) wasChange |= 2;
                                    defsResult.Add(defo);
                                }

                                if (wasChange != 0)
                                {
                                    Modified = true;
                                    if (defsResult.Count == 0)
                                        return Remove;
                                    if (wasChange == 1)
                                    {
                                        def.Definitions.Clear();
                                        foreach (var defi in defsResult)
                                        {
                                            def.Definitions.Add((AstVarDef) defi);
                                        }

                                        return node;
                                    }

                                    for (var i = 0; i < defsResult.Count; i++)
                                    {
                                        var defi = defsResult[i];
                                        if (defi is AstVarDef)
                                        {
                                            var me = (AstDefinitions) node.ShallowClone();
                                            me.Definitions.ClearAndTruncate();
                                            me.Definitions.Add((AstVarDef) defi);
                                            defsResult[i] = me;
                                        }
                                        else
                                        {
                                            defsResult[i] = new AstSimpleStatement(defi);
                                        }
                                    }

                                    return SpreadStructList(ref defsResult);
                                }

                                return node;
                            }
                            else if (def.Definitions.Count == 1)
                            {
                                var defi = def.Definitions[0];
                                var defo = Transform(defi);
                                if (defo == Remove) return Remove;
                                if (defi != defo)
                                {
                                    Modified = true;
                                    return new AstSimpleStatement(defo);
                                }
                            }

                            return node;
                        }
                        finally
                        {
                            NeedValue = true;
                        }
                }

                return null;
            }

            while (true)
            {
                switch (node)
                {
                    case AstConstant _:
                        return Remove;
                    case AstSymbolRef _:
                        return Remove;
                    case AstWith _:
                        return node;
                    case AstObject obj:
                    {
                        var res = new AstSequence(node.Source, node.Start, node.End);
                        foreach (var objProperty in obj.Properties)
                        {
                            if (objProperty is AstObjectKeyVal kv)
                            {
                                if (!(kv.Key is AstSymbolProperty))
                                    res.AddIntelligently(Transform(kv.Key));
                                res.AddIntelligently(Transform(kv.Value));
                            }
                        }

                        return res.Expressions.Count == 0 ? Remove : res;
                    }
                    case AstUnaryPrefix unaryPrefix:
                    {
                        if (unaryPrefix.Operator == Operator.TypeOf || unaryPrefix.Operator == Operator.LogicalNot || unaryPrefix.Operator == Operator.BitwiseNot || unaryPrefix.Operator == Operator.Void)
                        {
                            node = unaryPrefix.Expression;
                            continue;
                        }

                        return node;
                    }
                    case AstFunction function:
                    {
                        if (function.Name == null || function.Name.Thedef!.OnlyDeclared)
                        {
                            return Remove;
                        }

                        return node;
                    }
                    case AstAssign assign:
                    {
                        if (assign.Operator == Operator.Assignment)
                        {
                            if (assign.Left.IsSymbolDef()?.NeverRead ?? false)
                            {
                                node = assign.Right;
                                continue;
                            }
                        }

                        NeedValue = true;
                        assign.Right = Transform(assign.Right);
                        NeedValue = false;

                        return node;
                    }
                    case AstVarDef varDef:
                    {
                        if (varDef.Name.IsSymbolDef()?.OnlyDeclared ?? false)
                        {
                            var value = varDef.Value;
                            if (value == null)
                                return Remove;
                            node = value;
                            continue;
                        }

                        return node;
                    }
                    default:
                        NeedValue = true;
                        node.Transform(this);
                        NeedValue = false;
                        return node;
                }
            }
        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            return null;
        }
    }
}
