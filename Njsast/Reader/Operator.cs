﻿namespace Njsast.Reader;

public enum Operator
{
    Addition,
    Subtraction,
    Multiplication,
    Division,
    Modulus,
    Power,
    LeftShift,
    RightShift,
    RightShiftUnsigned,
    BitwiseAnd,
    BitwiseOr,
    BitwiseXOr,

    Equals,
    StrictEquals,
    NotEquals,
    StrictNotEquals,
    LessThan,
    LessEquals,
    GreaterThan,
    GreaterEquals,
    LogicalAnd,
    NullishCoalescing,
    LogicalOr,

    Assignment,
    AdditionAssignment,
    SubtractionAssignment,
    MultiplicationAssignment,
    DivisionAssignment,
    ModulusAssignment,
    PowerAssignment,
    LeftShiftAssignment,
    RightShiftAssignment,
    RightShiftUnsignedAssignment,
    BitwiseAndAssignment,
    BitwiseOrAssignment,
    BitwiseXOrAssignment,
    LogicalAndAssignment,
    NullishCoalescingAssignment,
    LogicalOrAssignment,

    Increment,
    Decrement,
    IncrementPostfix,
    DecrementPostfix,
    BitwiseNot,
    LogicalNot,
    Delete,
    In,
    InstanceOf,
    Void,
    TypeOf,
}
