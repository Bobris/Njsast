using System;
using Njsast.Ast;
using Njsast.Output;
using Njsast.Reader;

namespace Njsast
{
    public abstract class TreeTransformer : TreeWalkerBase
    {
        class AstRemoveMe : AstNode
        {
            public AstRemoveMe()
            {
            }

            public override void Visit(TreeWalker w)
            {
                throw new InvalidOperationException();
            }

            public override void Transform(TreeTransformer tt)
            {
                throw new InvalidOperationException();
            }

            public override void CodeGen(OutputContext output)
            {
                throw new InvalidOperationException();
            }
        }

        public static readonly AstNode Remove = new AstRemoveMe();

        protected void Descend()
        {
            var top = Stack.Last;
            top.Transform(this);
        }

        /// Before descend if returns non null, descending will be skipped and result directly returned from Transform
        protected abstract AstNode? Before(AstNode node, bool inList);

        /// After descend if returns non null it will be returned from Transform
        protected abstract AstNode? After(AstNode node, bool inList);

        public AstNode? Transform(AstNode? start, bool inList = false)
        {
            if (start == null) return null;
            Stack.Add(start);
            try
            {
                var x = Before(start, inList);
                if (x != null) return x;
                start.Transform(this);
                x = After(start, inList);
                return x ?? start;
            }
            finally
            {
                Stack.Pop();
            }
        }

        internal void TransformList<T>(ref StructList<T> list) where T : AstNode
        {
            for (uint i = 0; i < list.Count; i++)
            {
                var item = (T) Transform(list[i], true);
                if (item == Remove)
                {
                    list.RemoveAt(i);
                    i--;
                }
                else
                {
                    list[i] = item;
                }
            }
        }
    }
}
