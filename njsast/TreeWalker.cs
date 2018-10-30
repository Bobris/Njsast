using Njsast.Ast;

namespace Njsast
{
    public abstract class TreeWalker
    {
        StructList<AstNode> _stack = new StructList<AstNode>();
        bool _stopDescending;

        protected void StopDescending()
        {
            _stopDescending = true;
        }

        protected void Descend()
        {
            var top = _stack[_stack.Count - 1];
            top.Visit(this);
        }

        protected abstract void Visit(AstNode node);

        public void Walk(AstNode start)
        {
            if (start == null) return;
            _stack.Add(start);
            var backupStopDescending = _stopDescending;
            try
            {
                _stopDescending = false;
                Visit(start);
                if (!_stopDescending)
                    Descend();
            }
            finally
            {
                _stopDescending = backupStopDescending;
                _stack.Pop();
            }
        }

        internal void WalkList<T>(in StructList<T> list) where T : AstNode
        {
            for (uint i = 0; i < list.Count; i++)
            {
                Walk(list[i]);
            }
        }
    }
}
