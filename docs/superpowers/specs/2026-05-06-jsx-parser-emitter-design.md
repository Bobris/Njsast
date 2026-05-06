# JSX Parser And Emitter Design

## Goal

Add JSX parser and emitter support to Njsast without lowering JSX to React or another runtime. JSX should round-trip through AST, printer, source maps, cloning, walking, and scope setup while preserving existing JavaScript parser behavior.

## Scope

Supported syntax:

- JSX elements: `<div />`, `<div>text</div>`, nested elements.
- JSX fragments: `<>...</>`.
- JSX expression containers: `{expr}`.
- JSX spread children: `{...expr}`.
- JSX attributes: `name`, `name="value"`, `name={expr}`, `name=<nested />`.
- JSX spread attributes: `{...props}`.
- JSX names: identifiers, member names such as `<Foo.Bar />`, namespaced names such as `<svg:path />`.
- JSX text with normal JSX entity preservation for emitter round-trip.

Out of scope for this pass:

- Transforming JSX into `React.createElement`, `jsx`, or any runtime calls.
- TypeScript-only JSX syntax such as type arguments in tag heads.
- JSX-specific compression optimizations.

## AST Shape

Add JSX-specific AST nodes rather than overloading object/call/template nodes:

- `AstJsxElement`: opening name, attributes, children, self-closing flag.
- `AstJsxFragment`: children.
- `AstJsxName`: simple JSX identifier text.
- `AstJsxMemberName`: object/property JSX name.
- `AstJsxNamespacedName`: namespace/name JSX name.
- `AstJsxAttribute`: attribute name and optional value.
- `AstJsxSpreadAttribute`: spread expression.
- `AstJsxExpression`: expression container, with nullable expression for empty comments.
- `AstJsxSpreadChild`: spread child expression.
- `AstJsxText`: raw text.

All expression-bearing JSX nodes visit and transform their contained expressions so existing scope and compressor walks can see JavaScript identifiers.

## Parser

JSX activates only in expression context when `<` is followed by a JSX tag start or `>`, avoiding conflicts with relational operators. The parser will use dedicated JSX routines instead of global token mode changes where possible.

The first implementation should parse JSX character-by-character for tag heads and text, while delegating `{...}` expression content back to the normal JavaScript expression parser. This keeps the tokenizer impact narrow and avoids introducing Acorn-style JSX token contexts across the whole parser.

The parser validates matching closing names for elements. Fragments use `<>` and `</>`.

## Emitter

The printer emits JSX syntax directly. Minified output may remove unnecessary whitespace between tags and attributes, but must preserve text nodes exactly enough for semantic round-trip. Beautified output should remain readable and follow existing indentation behavior where practical.

No runtime conversion is emitted.

## Tests

Use parser snapshot fixtures plus targeted unit tests:

- basic element and self-closing element;
- nested elements with text;
- fragments;
- attributes, expression attributes, spread attributes;
- member and namespaced tag names;
- expression containers and spread children;
- closing-tag mismatch error;
- round-trip source maps through printer.

Compressor tests should initially assert pass-through behavior for JSX with embedded expressions rather than JSX-specific optimization.

## Risks

The largest risk is ambiguity with `<` as relational operator or generic-looking syntax. To reduce blast radius, JSX parsing should only start from expression atom parsing when the next characters can form a JSX tag, and existing non-JSX tests must remain unchanged.

Another risk is text/entity handling. The first pass will preserve raw JSX text for emitter round-trip instead of trying to normalize entities.
