# JSX CreateElement Lowering Design

## Goal

Add an AST transformer that lowers parsed JSX nodes into old-style `createElement` calls while keeping the factory and fragment symbol configurable.

## Design

The transformer is independent from the JSX parser and emitter. It rewrites `AstJsxElement` and `AstJsxFragment` after normal child transformation, leaving users free to parse/print raw JSX or explicitly lower it.

Options provide two dotted expression strings:

- `Factory`, defaulting to `React.createElement`
- `Fragment`, defaulting to `React.Fragment`

For Bobril, callers can set `Factory = "b.createElement"` and `Fragment = "b.Fragment"`.

Lowering rules:

- Lower intrinsic element names to strings: `<div />` -> `b.createElement("div", null)`.
- Lower component/member names to expressions: `<Foo.Bar />` -> `b.createElement(Foo.Bar, null)`.
- Lower namespaced names to strings because they are not valid JavaScript member expressions.
- Lower attributes to a props object; boolean attributes become `true`.
- Lower spread attributes to object spread properties inside the same props object.
- Use `null` props only when there are no attributes.
- Lower JSX expression containers by unwrapping the contained expression.
- Skip empty expression containers.
- Lower JSX spread children to call spread arguments.
- Lower fragments to `Factory(Fragment, null, children...)`.

## Tests

Add focused transformer tests that parse source, run the transformer, and assert the printed JavaScript for:

- configurable Bobril factory and fragment
- intrinsic tags, component tags, and member tags
- normal, boolean, expression, JSX, and spread attributes
- expression children, spread children, and fragments

