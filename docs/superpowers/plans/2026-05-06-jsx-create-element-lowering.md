# JSX CreateElement Lowering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a JSX-to-`createElement` AST transformer with configurable factory and fragment expressions.

**Architecture:** Implement a small independent transformer under `Njsast/Jsx` that rewrites only JSX AST nodes. Tests parse JSX input, run the transformer, and compare the printed JS output.

**Tech Stack:** C#, Njsast AST/TreeTransformer, xUnit.

---

### Task 1: Transformer Tests

**Files:**
- Create: `Test/Jsx/JsxToCreateElementTest.cs`

- [ ] Write failing tests for Bobril factory/fragment, props object spread, expression children, spread children, and component/member tags.
- [ ] Run `rtk dotnet test Test/Test.csproj --filter JsxToCreateElementTest` and verify the tests fail because the transformer type does not exist.

### Task 2: Transformer Implementation

**Files:**
- Create: `Njsast/Jsx/JsxToCreateElementOptions.cs`
- Create: `Njsast/Jsx/JsxToCreateElementTreeTransformer.cs`

- [ ] Add options for `Factory` and `Fragment`.
- [ ] Add dotted-name parsing into `AstSymbolRef` and `AstDot`.
- [ ] Lower JSX tags, attributes, fragments, expression children, and spread children according to the design.
- [ ] Run `rtk dotnet test Test/Test.csproj --filter JsxToCreateElementTest` and verify the new tests pass.

### Task 3: Documentation And Full Verification

**Files:**
- Modify: `README.md`

- [ ] Document the transformer briefly in the feature list.
- [ ] Run `rtk dotnet test Test/Test.csproj` and verify the full suite passes.

