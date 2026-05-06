# JSX Parser Emitter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add JSX parser and direct JSX emitter support without transforming JSX to runtime calls.

**Architecture:** Add dedicated JSX AST nodes, a narrow parser entry from `ParseExpressionAtom`, character-level JSX parsing helpers, and direct `CodeGen` methods. Keep JSX expression containers connected to normal JS expression parsing so scope and transformers can walk embedded expressions.

**Tech Stack:** C#/.NET, Njsast AST/Reader/Output, xUnit parser snapshot tests.

---

### Task 1: JSX AST Nodes

**Files:**
- Create: `Njsast/Ast/AstJsxName.cs`
- Create: `Njsast/Ast/AstJsxElement.cs`
- Create: `Njsast/Ast/AstJsxAttribute.cs`
- Create: `Njsast/Ast/AstJsxText.cs`
- Modify: `Njsast/Njsast.csproj` if needed for SDK compile inclusion; SDK projects include `.cs` automatically.
- Test: `Test/Reader/ParserTest.cs`

- [ ] **Step 1: Write failing AST construction/parser smoke test**

Add a test method that parses `const x = <div id="a">Hi</div>;` through `ParserTest.ParseTestCore` and asserts emitted JSX text appears in minified and beautified output.

- [ ] **Step 2: Run failing test**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~ParserShouldParseAndPrintBasicJsx"`

Expected: fail with `Unexpected token` at `<`.

- [ ] **Step 3: Add JSX AST nodes**

Create:

- `AstJsxName`, `AstJsxMemberName`, `AstJsxNamespacedName` for tag/attribute names.
- `AstJsxElement` with `Name`, `Attributes`, `Children`, `SelfClosing`.
- `AstJsxFragment` with `Children`.
- `AstJsxAttribute`, `AstJsxSpreadAttribute`.
- `AstJsxExpression`, `AstJsxSpreadChild`.
- `AstJsxText`.

Each node must implement `Visit`, `Transform`, `ShallowClone`, and `CodeGen`.

- [ ] **Step 4: Build**

Run: `rtk dotnet build Njsast/Njsast.csproj`

Expected: build passes.

### Task 2: Basic JSX Element Parser

**Files:**
- Modify: `Njsast/Reader/Expression.cs`
- Add: `Njsast/Reader/Jsx.cs`
- Test: `Test/Reader/ParserTest.cs`

- [ ] **Step 1: Add parser entry**

In `ParseExpressionAtom`, before the switch, detect current token `TokenType.Relational` with value `<` and call `ParseJsxElementOrFragment`.

- [ ] **Step 2: Implement basic JSX parser helpers**

Add `Jsx.cs` partial parser methods:

- `CanStartJsx()`
- `ParseJsxElementOrFragment(Position startLocation)`
- `ParseJsxElement(Position startLocation)`
- `ParseJsxName()`
- `ReadJsxTextUntilSpecial()`

Implement tag names, self-closing elements, closing-tag validation, and text children.

- [ ] **Step 3: Run basic JSX test**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~ParserShouldParseAndPrintBasicJsx"`

Expected: pass.

### Task 3: JSX Attributes And Expressions

**Files:**
- Modify: `Njsast/Reader/Jsx.cs`
- Test: `Test/Reader/ParserTest.cs`

- [ ] **Step 1: Add failing test for attributes and expression containers**

Add a test for:

```js
const view = <Foo.Bar id="x" count={n} disabled {...props}>{label}{...items}</Foo.Bar>;
```

Assert minified output contains:

```js
<Foo.Bar id="x" count={n} disabled {...props}>{label}{...items}</Foo.Bar>
```

- [ ] **Step 2: Run failing test**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~ParserShouldParseAndPrintJsxAttributesAndExpressions"`

Expected: fail because attributes/expressions are not implemented.

- [ ] **Step 3: Implement attributes**

Support boolean attributes, string attributes, expression attributes, nested JSX attribute values, and spread attributes.

- [ ] **Step 4: Implement expression children**

Support `{expr}`, `{...expr}`, and empty expression containers as `AstJsxExpression` with null expression.

- [ ] **Step 5: Run tests**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~ParserShouldParseAndPrintJsx"`

Expected: JSX parser tests pass.

### Task 4: Fragments, Namespaces, And Error Cases

**Files:**
- Modify: `Njsast/Reader/Jsx.cs`
- Test: `Test/Reader/ParserTest.cs`

- [ ] **Step 1: Add failing tests**

Add tests for:

```js
const f = <><svg:path data-id="1" /></>;
```

and mismatch:

```js
const x = <div></span>;
```

The mismatch should throw `SyntaxError` containing `Expected closing JSX tag`.

- [ ] **Step 2: Implement fragments and namespaced names**

Support `<>`, `</>`, and `name:name` in `ParseJsxName`.

- [ ] **Step 3: Implement mismatch error**

Compare opening and closing name string forms.

- [ ] **Step 4: Run tests**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~ParserShouldParseAndPrintJsx|FullyQualifiedName~ParserShouldRejectMismatchedJsxClosingTag"`

Expected: pass.

### Task 5: Snapshot Fixture And Full Verification

**Files:**
- Add fixture files under `Test/Input/Parser/Standard/` for JSX if useful.
- Modify: `README.md` to remove or qualify the “does NOT parse JSX” sentence.

- [ ] **Step 1: Add parser fixture**

Create `Test/Input/Parser/Standard/simple-jsx.js` with a combined JSX example. Generate expected output using the existing `Test` updater if needed.

- [ ] **Step 2: Update README**

Change the JSX note to say JSX parser/emitter is supported, but JSX-to-JS runtime lowering is not.

- [ ] **Step 3: Run parser suite**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~Test.Reader.ParserTest"`

Expected: pass.

- [ ] **Step 4: Run all tests**

Run: `rtk dotnet test Test/Test.csproj`

Expected: all tests pass.

- [ ] **Step 5: Commit**

Run:

```bash
rtk git add Njsast Test README.md docs/superpowers/plans/2026-05-06-jsx-parser-emitter.md
rtk git commit -m "Add JSX parser and emitter"
```
