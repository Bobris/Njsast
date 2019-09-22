using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
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

        protected AstNode? Parent()
        {
            if (_stack.Count <= 1)
                return null;
            return _stack[_stack.Count - 2];
        }

        protected AstNode? Parent(int generation)
        {
            if (_stack.Count <= 1 + generation)
                return null;
            return _stack[_stack.Count - 2 - (uint) generation];
        }

        public struct Enumerator : IEnumerator<AstNode>, IEnumerable<AstNode>
        {
            int _position;
            readonly AstNode[] _stack;

            public Enumerator(int start, AstNode[] stack)
            {
                _position = start;
                _stack = stack;
            }

            public bool MoveNext()
            {
                Debug.Assert(_position >= 0);
                _position--;
                return _position >= 0;
            }

            public void Reset()
            {
                throw new NotSupportedException();
            }

            public AstNode Current => _stack[_position];

            object IEnumerator.Current => Current;

            public void Dispose()
            {
            }

            public Enumerator GetEnumerator()
            {
                return this;
            }

            IEnumerator<AstNode> IEnumerable<AstNode>.GetEnumerator()
            {
                return this;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return this;
            }
        }

        public Enumerator Parents()
        {
            return new Enumerator((int) _stack.Count - 1, _stack.UnsafeBackingArray);
        }

        protected T FindParent<T>() where T : AstNode?
        {
            var i = _stack.Count - 2;
            while (i < _stack.Count)
            {
                var p = _stack[i];
                if (p is T node)
                    return node;
                i--;
            }

            return null!;
        }

        protected AstNode? FindParent<T1, T2>() where T1 : AstNode? where T2 : AstNode?
        {
            var i = _stack.Count - 2;
            while (i < _stack.Count)
            {
                var p = _stack[i];
                if (p is T1 || p is T2)
                    return p;
                i--;
            }

            return null;
        }

        protected void Descend()
        {
            var top = _stack[_stack.Count - 1];
            top.Visit(this);
        }

        protected void DescendOnce()
        {
            Descend();
            StopDescending();
        }

        protected abstract void Visit(AstNode node);

        public void Walk(AstNode? start)
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
