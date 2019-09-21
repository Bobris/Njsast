using Njsast.Ast;
using Njsast.Reader;

namespace Njsast
{
    public abstract class TreeTransformer : TreeWalkerBase
    {
        public static readonly AstNode Remove = new AstHole(null, new Position(), new Position());

        protected void Descend()
        {
            var top = Stack[Stack.Count - 1];
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
