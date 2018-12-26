﻿using Njsast.Output;
using Njsast.Reader;

namespace Njsast.Ast
{
    /// A `if` statement
    public class AstIf : AstStatementWithBody
    {
        /// [AstNode] the `if` condition
        public AstNode Condition;

        /// [AstStatement?] the `else` part, or null if not present
        public AstStatement Alternative;

        public AstIf(Parser parser, Position startPos, Position endPos, AstNode condition, AstStatement body,
            AstStatement alternative) : base(parser, startPos, endPos, body)
        {
            Condition = condition;
            Alternative = alternative;
        }

        public override void Visit(TreeWalker w)
        {
            w.Walk(Condition);
            base.Visit(w);
            w.Walk(Alternative);
        }

        public override void CodeGen(OutputContext output)
        {
            output.Print("if");
            output.Space();
            Condition.Print(output, true);
            output.Space();
            if (Alternative != null)
            {
                // The squeezer replaces "block"-s that contain only a single
                // statement with the statement itself; technically, the AST
                // is correct, but this can create problems when we output an
                // IF having an ELSE clause where the THEN clause ends in an
                // IF *without* an ELSE block (then the outer ELSE would refer
                // to the inner IF).  This function checks for this case and
                // adds the block braces if needed.
                if (output.Options.Braces)
                {
                    output.MakeBlock(this);
                }
                else if (Body == null)
                {
                    output.ForceSemicolon();
                }
                else
                {
                    var b = Body;
                    while (true)
                    {
                        if (b is AstIf nestedIf)
                        {
                            if (nestedIf.Alternative == null)
                            {
                                output.MakeBlock(Body);
                                break;
                            }

                            b = nestedIf.Alternative;
                        }
                        else if (b is AstStatementWithBody statementWithBody)
                        {
                            b = statementWithBody.Body;
                        }
                        else
                        {
                            output.ForceStatement(Body);
                            break;
                        }
                    }
                }

                output.Space();
                output.Print("else");
                output.Space();
                if (Alternative is AstIf)
                    Alternative.Print(output);
                else
                    output.ForceStatement(Alternative);
            }
            else
            {
                output.PrintBody(this);
            }
        }
    }
}
