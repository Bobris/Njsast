using System;
using System.Collections.Generic;
using System.Globalization;
using System.Reflection.Metadata.Ecma335;
using System.Text.RegularExpressions;
using System.Xml;
using Njsast.Ast;
using Njsast.Reader;

namespace Njsast.Output
{
    public class OutputContext
    {
        public OutputOptions Options;
        StructList<char> _storage = new StructList<char>();
        StructList<AstNode> _stack = new StructList<AstNode>();
        bool _mightNeedSpace = false;
        bool _mightNeedSemicolon = false;
        bool _mightAddNewline;
        int _currentCol;
        public int _indentation;
        static string _spaces = "                ";

        public OutputContext(OutputOptions options = null)
        {
            Options = options ?? new OutputOptions();
        }

        public override string ToString()
        {
            return new string(_storage.AsSpan());
        }

        public void TruePrint(ReadOnlySpan<Char> text)
        {
            _storage.AddRange(text);
        }

        public void Print(ReadOnlySpan<Char> text)
        {
            TruePrint(text);
        }

        public void PushNode(AstNode node)
        {
            _stack.Add(node);
        }

        public void PopNode()
        {
            _stack.Pop();
        }

        public void Comma()
        {
            Print(",");
            Space();
        }

        public void Space()
        {
            if (Options.beautify)
            {
                Print(" ");
            }
            else
            {
                _mightNeedSpace = true;
            }
        }

        public void Semicolon()
        {
            if (Options.beautify)
            {
                Print(";");
            }
            else
            {
                _mightNeedSemicolon = true;
            }
        }

        public void ForceSemicolon()
        {
            _mightNeedSemicolon = false;
            Print(";");
        }

        public void Newline()
        {
            if (Options.beautify)
            {
                Print("\n");
            }
            else
            {
                if (_currentCol > Options.max_line_len)
                {
                    Print("\n");
                }
                else
                {
                    _mightAddNewline = true;
                }
            }
        }

        public void Indent(bool half = false)
        {
            if (Options.beautify)
            {
                var c = Options.indent_start + _indentation;
                if (half) c -= Options.indent_level / 2;
                while (c >= _spaces.Length)
                {
                    Print(_spaces);
                    c -= _spaces.Length;
                }

                if (c > 0)
                {
                    Print(_spaces.AsSpan(0, c));
                }
            }
        }

        public void Colon()
        {
            Print(":");
            Space();
        }

        public void PrintBraced(in StructList<AstNode> body, bool hasUseStrictDirective)
        {
            if (body.Count > 0)
            {
                Print("{");
                Newline();
                _indentation += Options.indent_level;
                if (hasUseStrictDirective)
                {
                    Indent();
                    Print("\"use strict\"");
                    ForceSemicolon();
                    Newline();
                }

                var last = body.Count - 1;
                for (var i = 0; i <= last; i++)
                {
                    var stmt = body[(uint) i];
                    if (stmt is AstEmptyStatement) continue;
                    Indent();
                    stmt.Print(this);
                    if (i != last)
                        Newline();
                }

                _indentation -= Options.indent_level;
                Indent();
                Print("}");
            }
            else
            {
                Print("{}");
            }
        }

        public void PrintBraced(AstBlock block, bool hasUseStrictDirective)
        {
            PrintBraced(block.Body, hasUseStrictDirective);
        }

        public void MakeBlock(AstStatement stmt)
        {
            if (stmt is AstEmptyStatement)
                Print("{}");
            else if (stmt is AstBlockStatement)
                stmt.Print(this);
            else
            {
                Print("{");
                Newline();
                _indentation += Options.indent_level;
                Indent();
                stmt.Print(this);
                Newline();
                _indentation -= Options.indent_level;
                Indent();
                Print("}");
            }
        }

        public void PrintBody(AstStatement body)
        {
            ForceStatement(body);
        }

        public void ForceStatement(AstStatement body)
        {
            if (Options.braces)
            {
                MakeBlock(body);
            }
            else
            {
                if (body is AstEmptyStatement)
                {
                    ForceSemicolon();
                }
                else
                {
                    body.Print(this);
                }
            }
        }

        class NoinWalker : TreeWalker
        {
            internal bool Parens;

            protected override void Visit(AstNode node)
            {
                if (Parens || node is AstScope)
                {
                    StopDescending();
                    return;
                }

                if (node is AstBinary binary && binary.Operator == Operator.In)
                {
                    Parens = true;
                    StopDescending();
                }
            }
        }

        public void ParenthesizeForNoin(AstNode node, bool noin)
        {
            var parens = false;
            // need to take some precautions here:
            //    https://github.com/mishoo/UglifyJS2/issues/60
            if (noin)
            {
                var w = new NoinWalker();
                w.Walk(node);
                parens = w.Parens;
            }

            node.Print(this, parens);
        }

        public AstNode Parent(int distance = 0)
        {
            if (distance > _stack.Count - 2)
                return null;
            return _stack[(uint) (_stack.Count - 2 - distance)];
        }

        public void AddMapping(Position position)
        {
            // TODO
        }

        public bool NeedConstructorParens(AstCall call)
        {
            // Always print parentheses with arguments
            if (call.Args.Count > 0) return true;

            return Options.beautify;
        }

        public bool ShouldBreak()
        {
            throw new NotImplementedException();
        }

        public bool NeedDotAfterNumber()
        {
            // TODO
            return false;
        }

        public void PrintName(string name)
        {
            Print(name);
        }

        public static bool OperatorStartsWithPlusOrMinus(Operator op)
        {
            var ch = OperatorToString(op)[0];
            return ch == '+' || ch == '-';
        }

        public static bool OperatorEndsWithPlusOrMinus(Operator op)
        {
            var str = OperatorToString(op);
            var ch = str[str.Length - 1];
            return ch == '+' || ch == '-';
        }

        public static bool OperatorStartsWithLetter(Operator op)
        {
            switch (op)
            {
                case Operator.Delete:
                case Operator.In:
                case Operator.InstanceOf:
                case Operator.Void:
                case Operator.TypeOf:
                    return true;
            }

            return false;
        }

        public static string OperatorToString(Operator op)
        {
            switch (op)
            {
                case Operator.Addition:
                    return "+";
                case Operator.Subtraction:
                    return "-";
                case Operator.Multiplication:
                    return "*";
                case Operator.Division:
                    return "/";
                case Operator.Modulus:
                    return "%";
                case Operator.Power:
                    return "**";
                case Operator.LeftShift:
                    return "<<";
                case Operator.RightShift:
                    return ">>";
                case Operator.RightShiftUnsigned:
                    return ">>>";
                case Operator.BitwiseAnd:
                    return "&";
                case Operator.BitwiseOr:
                    return "|";
                case Operator.BitwiseXOr:
                    return "^";
                case Operator.Equals:
                    return "==";
                case Operator.StrictEquals:
                    return "===";
                case Operator.NotEquals:
                    return "!=";
                case Operator.StrictNotEquals:
                    return "!==";
                case Operator.LessThan:
                    return "<";
                case Operator.LessEquals:
                    return "<=";
                case Operator.GreaterThan:
                    return ">";
                case Operator.GreaterEquals:
                    return ">=";
                case Operator.LogicalAnd:
                    return "&&";
                case Operator.LogicalOr:
                    return "||";
                case Operator.Assignment:
                    return "=";
                case Operator.AdditionAssignment:
                    return "+=";
                case Operator.SubtractionAssignment:
                    return "-=";
                case Operator.MultiplicationAssignment:
                    return "*=";
                case Operator.DivisionAssignment:
                    return "/=";
                case Operator.ModulusAssignment:
                    return "%=";
                case Operator.PowerAssignment:
                    return "**=";
                case Operator.LeftShiftAssignment:
                    return "<<=";
                case Operator.RightShiftAssignment:
                    return ">>=";
                case Operator.RightShiftUnsignedAssignment:
                    return ">>>=";
                case Operator.BitwiseAndAssignment:
                    return "&=";
                case Operator.BitwiseOrAssignment:
                    return "|=";
                case Operator.BitwiseXOrAssignment:
                    return "^=";
                case Operator.Increment:
                case Operator.IncrementPostfix:
                    return "++";
                case Operator.Decrement:
                case Operator.DecrementPostfix:
                    return "--";
                case Operator.BitwiseNot:
                    return "~";
                case Operator.LogicalNot:
                    return "!";
                case Operator.Delete:
                    return "delete";
                case Operator.In:
                    return "in";
                case Operator.InstanceOf:
                    return "instanceof";
                case Operator.Void:
                    return "void";
                case Operator.TypeOf:
                    return "typeof";
                default:
                    throw new ArgumentOutOfRangeException(nameof(op), op, null);
            }
        }

        public void Print(Operator op)
        {
            Print(OperatorToString(op));
        }

        public void PrintString(string str)
        {
            var sq = 0;
            var dq = 0;
            foreach (var ch in str)
            {
                if (ch == '\'')
                    sq++;
                else if (ch == '\"') dq++;
            }

            if (sq > dq)
            {
                Print("\'");
                PrintStringChars(str, QuoteType.Single);
                Print("\'");
            }
            else
            {
                Print("\"");
                PrintStringChars(str, QuoteType.Double);
                Print("\"");
            }
        }

        public void PrintNumber(double value)
        {
            Print(value.ToString("R", CultureInfo.InvariantCulture));
        }

        public void PrintPropertyName(string name)
        {
            if (IsIdentifierString(name))
            {
                PrintName(name);
            }
            else
            {
                PrintString(name);
            }
        }

        static readonly Regex SimpleIdentifierRegex = new Regex("^[a-zA-Z_$][a-zA-Z0-9_$]*$",
            RegexOptions.CultureInvariant | RegexOptions.Compiled);

        public static bool IsIdentifierString(object key)
        {
            if (!(key is string str))
                return false;
            return SimpleIdentifierRegex.IsMatch(str);
        }

        const string KeywordsStr =
            "break case catch class const continue debugger default delete do else export extends finally for function if in instanceof let new return switch throw try typeof var void while with";

        const string KeywordsAtomStr = "false null true";

        static readonly string ReservedWordsStr =
            "enum implements import interface package private protected public static super this " + KeywordsAtomStr +
            " " + KeywordsStr;

        static readonly HashSet<string> ReservedWords = new HashSet<string>();

        static OutputContext()
        {
            foreach (var s in ReservedWordsStr.Split(' '))
            {
                ReservedWords.Add(s);
            }
        }

        public static bool IsIdentifier(object key)
        {
            if (!(key is string str))
                return false;
            return !ReservedWords.Contains(str);
        }

        public void PrintStringChars(string s, QuoteType quoteType)
        {
            // TODO
            Print(s);
        }

        public bool HasParens()
        {
            // TODO
            return false;
        }

        public bool FirstInStatement()
        {
            var node = Parent(-1); // Current Node
            AstNode p;
            for (var i = 0; (p = Parent(i)) != null; i++)
            {
                if (p is IAstStatementWithBody statementWithBody && statementWithBody.GetBody() == node)
                    return true;
                if (p is AstSequence sequence && sequence.Expressions[0] == node ||
                    p.GetType() == typeof(AstCall) && ((AstCall) p).Expression == node ||
                    p is AstDot dot && dot.Expression == node ||
                    p is AstSub sub && sub.Expression == node ||
                    p is AstConditional conditional && conditional.Condition == node ||
                    p is AstBinary binary && binary.Left == node ||
                    p is AstUnaryPostfix unaryPostfix && unaryPostfix.Expression == node
                )
                {
                    node = p;
                }
                else
                {
                    return false;
                }
            }

            return false;
        }

        public static int Precedence(Operator op)
        {
            switch (op)
            {
                case Operator.LogicalOr: return 1;
                case Operator.LogicalAnd: return 2;
                case Operator.BitwiseOr: return 3;
                case Operator.BitwiseXOr: return 4;
                case Operator.BitwiseAnd: return 5;
                case Operator.Equals:
                case Operator.NotEquals:
                case Operator.StrictEquals:
                case Operator.StrictNotEquals:
                    return 6;
                case Operator.LessThan:
                case Operator.GreaterThan:
                case Operator.LessEquals:
                case Operator.GreaterEquals:
                case Operator.In:
                case Operator.InstanceOf:
                    return 7;
                case Operator.RightShift:
                case Operator.LeftShift:
                case Operator.RightShiftUnsigned:
                    return 8;
                case Operator.Addition:
                case Operator.Subtraction:
                    return 9;
                case Operator.Multiplication:
                case Operator.Division:
                case Operator.Modulus:
                    return 10;
                case Operator.Power: return 11;
                default:
                    throw new ArgumentOutOfRangeException("operator", "Must be binary operator: "+op);
            }
        }
    }
}
