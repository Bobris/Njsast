using Newtonsoft.Json.Converters;
using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.Compress
{
    public class RemoveSideEffectFreeCodeTreeTransformer: TreeTransformer
    {
        protected override AstNode? Before(AstNode node, bool inList)
        {
            switch (node)
            {
                case AstToplevel _:
                    return null;
            }
            while (true)
            {
                switch (node)
                {
                    case AstSimpleStatement simple:
                    {
                        var newBody = Transform(simple.Body);
                        if (newBody == Remove)
                            return Remove;
                        simple.Body = newBody;
                        return simple;
                    }
                    case AstConstant _:
                        return Remove;
                    case AstSymbolRef _:
                        return Remove;
                    case AstUnary unary:
                        return node;
                    case AstDefinitions def:
                        if (def.Definitions.Count == 1)
                        {
                            if (def.Definitions[0].Name.IsSymbolDef()?.OnlyDeclared ?? false)
                            {
                                var value = def.Definitions[0].Value;
                                if (value == null)
                                    return Remove;
                                node = value;
                                continue;
                            }
                        }
                        return node;
                    default:
                        return node;
                }
            }

        }

        protected override AstNode? After(AstNode node, bool inList)
        {
            if (node is AstSimpleStatement simple)
            {
                if (simple.Body == Remove)
                    return Remove;
            }

            if (Parent() is AstBlock && !(node is AstStatement))
            {
                return new AstSimpleStatement(node);
            }
            return null;
        }
    }
}
