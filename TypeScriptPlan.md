# TypeScript Parser Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a TypeScript parser path that accepts TypeScript syntax, strips all type-only constructs from ESM imports/exports without converting module format, and downlevels runtime enums to the same JavaScript shape emitted by TypeScript.

**Architecture:** Extend the existing `Njsast.Reader.Parser` family rather than introducing a second AST. The TypeScript reader should consume TypeScript syntax and directly produce the existing Njsast JavaScript AST; purely type-level syntax never reaches the AST, while runtime TypeScript constructs such as enums and legacy decorators are lowered into normal JavaScript AST nodes before scope analysis and output. Parser syntax is controlled by exactly two booleans: `Options.ParseTypeScript` and `Options.ParseJSX`; TSX means both booleans are true.

**Tech Stack:** C#/.NET 10, xUnit, existing `Njsast.Reader` parser partial classes, existing `Njsast.Ast` nodes, existing `DumpAst`, `OutputOptions`, and parser fixture conventions.

---

## Implementation Progress

Direction update:

- The regex/source-conversion front end is not acceptable as the final implementation because it scales poorly on large files and is fragile around nested syntax.
- New work must migrate TypeScript support into the real parser. Type-only syntax should be skipped by parser helpers. Runtime TypeScript constructs may use temporary TypeScript AST nodes and one or more lowering passes to normal JavaScript AST.
- During migration, the old converter can remain only as a temporary fallback for runtime constructs not yet represented natively, so existing fixtures stay green while big type-only files get a native fast path.

Completed so far:

- TypeScript fixture harness is active in xUnit and the command-line fixture runner.
- `Options.ParseTypeScript` and `Options.ParseJSX` exist; JSX parsing is gated by `ParseJSX`; `.tsx` fixtures set both flags.
- Parser-native TypeScript erasure has been implemented. The legacy source converter is now only a fallback for member-level decorators.
- A temporary `AstTypeScriptOnly` marker plus erase transformer removes parser-skipped type-only statements before the public JavaScript AST is returned.
- `FunctionalTest` has been removed from the solution because it was too slow for this iteration loop.
- Type-only imports/exports are removed, and mixed import/export specifiers preserve runtime ESM specifiers.
- Type aliases, interfaces, `declare` statements, function overload signatures, `import type`/`export type`, and `type` specifiers in mixed imports/exports are handled natively.
- Basic type stripping is implemented for function parameters/returns, variables, arrows, class members, optional/definite markers, generics, `<T>expr` angle-bracket assertions, `as` expressions, `satisfies` expressions, and non-null assertions.
- Generic call expressions `func<T>(args)` are handled natively.
- TSX handling is parser-native: generic disambiguation in `CanStartJsx()`, type stripping inside JSX, `as` expressions in JSX containers, typed callbacks, and generic components.
- String, numeric, exported non-const enum lowering, and conservative `const enum` inlining/lowering are implemented before the parser reaches the legacy fallback.
- Class modifiers (`public`, `private`, `protected`, `readonly`, `override`, `abstract`) are stripped natively; abstract members are removed; `implements` clauses are stripped; fields with TS modifiers are entirely removed.
- Constructor parameter property assignment injection is implemented natively in the parser.
- Namespace/module declarations raise a clear error: "TypeScript namespace lowering is not implemented".
- Type annotations on catch bindings, destructuring patterns, and type predicates are stripped natively.
- Legacy TypeScript decorator lowering is implemented via the legacy fallback for class, method, property, and parameter decorators, emitting global `__decorate`/`__param` calls without helper definitions.

Verification last run:

- `dotnet test Test/Test.csproj --no-restore --filter FullyQualifiedName~TypeScriptParserTest` passed with 24 TypeScript fixtures.
- `dotnet test Njsast.sln --no-restore` passed with 995 tests.
- `dotnet run --project Test.csproj --no-restore` passed with `Total 0 differences in 936 tests`.

Remaining near-term gaps:

- Replace source-conversion fallback for member-level decorators (method/property/parameter) with parser-native lowering in `TypeScriptDecorators.cs`.
- Add explicit unsupported/new decorator syntax fixtures.
- Source map expectations for TypeScript fixtures are still deferred.

Files changed in this implementation session:
- `Njsast/Reader/TypeScript.cs` — namespace detection, `TsIsClassFollowing()`, `TsIsClassMemberModifier()`, `TsTrySkipAbstractMember()`, fixed `TsSkipType()` for object type literals, parser-native enum emit helper
- `Njsast/Reader/Statement.cs` — namespace rejection, `abstract class`/`export abstract class` parsing, `implements` clause skipping, class member modifier stripping, abstract member removal, TS-modifier field removal, catch binding type annotation, class field `!`/`:type` markers, decorator interception in `ParseTopLevel`, top-level enum interception
- `Njsast/Reader/Expression.cs` — `as`/`satisfies`/`!`/generic call/`<Type>expr` native handling in `ParseSubscripts()`, `ParseMaybeConditional()`, `ParseMaybeUnary()`; `BuildCallExpression()` helper
- `Njsast/Reader/LVal.cs` — constructor parameter property modifier stripping and parameter-property collection for native assignment injection
- `Njsast/Reader/Jsx.cs` — `TsLooksLikeGenericOrTypeAssertion()` for TSX disambiguation
- `Njsast/Reader/TokenType.cs` — added `Decorator` token type
- `Njsast/Reader/TokenInformation.cs` — added `Decorator` token info
- `Njsast/Reader/Tokenise.cs` — added `@` (case 64) tokenizer support
- `Njsast/Reader/TypeScriptParser.cs` — narrowed `NeedsLegacySourceConversion()` to only trigger for parameter properties and member-level decorators; added focused `const enum` pre-lowering/inlining
- `Njsast/Reader/TypeScriptDecorators.cs` — NEW: class-level decorator parsing and AST lowering
- `Test/Input/TypeScript/Parser/` — added `catch-binding-types`, `destructuring-types`, `type-predicates` fixtures with expected outputs

---

## Target Behavior

- Parse `.ts` sources with the same JavaScript and JSX baseline currently supported by `Njsast.Reader.Parser`.
- Strip type annotations from variables, parameters, returns, properties, catch bindings where supported by TypeScript, arrows, functions, methods, classes, and destructuring patterns.
- Strip type aliases, interfaces, ambient declarations, overload signatures, `declare` statements, type predicates, type assertions, `as` expressions, `satisfies`, non-null assertions, definite assignment assertions, accessibility modifiers, `readonly`, `abstract`, `override`, `implements`, and generic parameter lists.
- Remove `import type` declarations entirely.
- Remove type-only specifiers from mixed imports, preserving runtime specifiers and the original module string.
- Remove `export type` declarations entirely.
- Preserve runtime exports when removing type syntax from exported declarations.
- Preserve ESM imports and exports as ESM. The existing project already has ESM-to-CJS translation, so TypeScript parsing must not convert `import`/`export` to CommonJS.
- Downlevel non-const enums exactly like TypeScript emits for the configured target covered by this project: string enums use property assignment only; numeric enums use reverse mapping; exported enums use `export var Name;` followed by the enum IIFE.
- Inline `const enum` references only when all referenced member values are statically known with the parser's local constant evaluation. If inlining is not possible, automatically parse and lower the `const enum` as a normal non-const enum rather than rejecting it.
- Support TSX type stripping without breaking JSX parsing: generic arrow parameters, `as` expressions in JSX expression containers, typed props, typed callbacks, and type-only declarations before JSX must be stripped while JSX tags remain JSX.
- Support old/legacy TypeScript decorators using TypeScript's pre-standard `experimentalDecorators` emit shape because `bbcore` runs TypeScript with `experimentalDecorators: true`. Decorators are runtime constructs and must not be stripped. Assume all required `tslib` helpers are already available in global scope because `bbcore` uses `noEmitHelpers: true`.
- Keep namespaces low priority. Do not design the parser in a way that makes namespaces impossible later, but do not block initial TypeScript parsing on namespace lowering.
- Do not implement type checking. The parser should only recognize enough TypeScript grammar to produce JavaScript AST.
- Do not add TypeScript-specific AST nodes unless a node is needed as a short-lived internal parse representation. Public output remains JavaScript AST.

## Existing Code Map

- Modify `Njsast/Reader/Options.cs`: add `bool ParseTypeScript` and `bool ParseJSX`; do not add a broader syntax mode enum.
- Modify `Njsast/Reader/TokenType.cs`, `TokenInformation.cs`, `Tokenise.cs`, `Identifier.cs`: recognize TypeScript contextual keywords and token cases only where the current tokenizer cannot already represent them.
- Modify `Njsast/Reader/Parser.cs`: expose `ParseTypeScript(string input, Options? options = null)` or `TypeScriptParser.Parse(...)` as the stable entry point.
- Modify `Njsast/Reader/Statement.cs`: handle interfaces, type aliases, enums, declare statements, import/export type forms, class modifiers, and TS-specific statement-level syntax.
- Modify `Njsast/Reader/Expression.cs`: handle `as`, `satisfies`, non-null assertions, generic calls, type assertions, instantiation expressions, and TS-aware arrow/function disambiguation.
- Modify `Njsast/Reader/LVal.cs`: skip type annotations and definite assignment on binding names/patterns.
- Modify `Njsast/Reader/Jsx.cs`: ensure `.tsx` parsing remains compatible with generic syntax disambiguation and JSX expression-container type stripping.
- Create `Njsast/Reader/TypeScript.cs`: focused helpers for skipping types and lowering TypeScript runtime constructs.
- Create `Njsast/Reader/TypeScriptDecorators.cs`: focused helpers for collecting legacy decorators and emitting TypeScript-compatible `__decorate`, `__param`, and related helper calls without injecting helper definitions.
- Create or modify `Test/TypeScript/*`: TypeScript-specific fixture provider and xUnit tests.
- Add fixtures under `Test/Input/TypeScript/Parser`: one `.ts` input per behavior, with expected `.js`, `.txt`, `.nicejs`, and `.minjs` outputs once implementation begins.

## Testing Framework Created In This Change

- `Test/TypeScript/TypeScriptParserTestData.cs` describes `.ts`/`.tsx` fixture inputs and expected normalized Njsast outputs.
- `Test/TypeScript/TypeScriptParserTestDataProviderAttribute.cs` discovers `.ts` files under `Input/TypeScript/Parser`.
- `Test/TypeScript/TypeScriptParserTest.cs` defines the future xUnit comparison test and is skipped until the parser entry point exists.
- Initial red fixtures cover type annotations, type-only imports, string enums, numeric enums, exported enums, and TSX type stripping.

## bbcore TypeScript Transpiler Baseline

This implementation should match the TypeScript behavior that `bbcore` currently depends on:

- `../bbcore/Lib/TSCompiler/bbtsc.ts` starts TypeScript through `ts.transpileModule(input, { compilerOptions, reportDiagnostics: true, fileName })`.
- `../bbcore/Lib/TSCompiler/ProjectOptions.cs` default compiler options include `target = ScriptTarget.Es2019`, `module = ModuleKind.Es2022`, `moduleResolution = ModuleResolutionKind.Bundler`, `jsx = JsxEmit.React`, `reactNamespace = BobrilJsx ? "b" : "React"`, `experimentalDecorators = true`, `noEmitHelpers = true`, `sourceMap = true`, `allowJs = true`, `removeComments = false`, and `strict = true`.
- `../bbcore/Lib/TSCompiler/BuildModuleCtx.cs` clones final compiler options for file transpilation, forces `module = ModuleKind.Commonjs`, clears bundler module resolution, and keeps `sourceMap = true`; this is historical context for TypeScript output, not a requirement for the new parser to perform module conversion.
- The root `../bbcore/tsconfig.json` confirms historical project settings: `experimentalDecorators: true`, `jsx: "react"`, `module: "commonjs"`, `target: "es5"`, `noEmitHelpers: true`, `reactNamespace: "b"`, `sourceMap: true`, and `preserveConstEnums: false`.
- For decorators, the main input is therefore TypeScript legacy decorator emit with helper calls only. The Njsast parser must emit `__decorate`, `__param`, and any later required global helper calls, but it must not emit helper bodies.
- For modules, the main rule is different from `ts.transpileModule`: keep ESM syntax and only erase TypeScript type-only syntax. Existing `Njsast/EsmToCjs` remains responsible for any later CommonJS conversion.

## Task 1: Enable The TypeScript Fixture Harness

**Files:**
- Modify: `Test/TypeScript/TypeScriptParserTest.cs`
- Modify: `Test/Program.cs`
- Create/modify expected files under `Test/Input/TypeScript/Parser`

- [ ] **Step 1: Write the failing test**

Remove the `Skip` argument and wire the test core to the planned entry point:

```csharp
[Theory]
[TypeScriptParserTestDataProvider("Input/TypeScript/Parser")]
public void TypeScriptParserShouldProduceExpectedNjsastOutput(TypeScriptParserTestData testData)
{
    var (outAst, outNiceJs, outMinJs) = TypeScriptParserTestCore(testData);

    Assert.Equal(testData.ExpectedAst, outAst);
    Assert.Equal(testData.ExpectedNiceJs, outNiceJs);
    Assert.Equal(testData.ExpectedMinJs, outMinJs);
}
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: FAIL with `NotImplementedException: Wire this to Njsast.Reader.TypeScriptParser.Parse after the parser exists.`

- [ ] **Step 3: Add command-line runner coverage**

In `Test/Program.cs`, add a loop after parser tests:

```csharp
foreach (var typeScriptData in new TypeScriptParserTestDataProviderAttribute("Input/TypeScript/Parser").GetTypeScriptParserData())
{
    tests++;
    var file = typeScriptData.Name;
    if (match != null && !file.Contains(match)) continue;
    var (outAst, outNiceJs, outMinJs) = TypeScriptParserTest.TypeScriptParserTestCore(typeScriptData);
    CheckError(typeScriptData.ExpectedAst, outAst, ref errors, "typescript AST", file, "txt");
    CheckError(typeScriptData.ExpectedNiceJs, outNiceJs, ref errors, "typescript beautified js", file, "nicejs");
    CheckError(typeScriptData.ExpectedMinJs, outMinJs, ref errors, "typescript minified js", file, "minjs");
}
```

Also add `using Test.TypeScript;`.

- [ ] **Step 4: Run command-line tests to verify the runner reaches the harness**

Run: `rtk dotnet run --project Test/Test.csproj type-annotations`

Expected: FAIL until `TypeScriptParserTestCore` is implemented.

## Task 2: Add Parser Entry Points And Syntax Flags

**Files:**
- Modify: `Njsast/Reader/Options.cs`
- Create: `Njsast/Reader/TypeScriptParser.cs`
- Modify: `Test/TypeScript/TypeScriptParserTest.cs`

- [ ] **Step 1: Write the failing test**

Update `TypeScriptParserTestCore` to call the new parser and existing output pipeline:

```csharp
var toplevel = TypeScriptParser.Parse(testData.Input, new Options
{
    SourceFile = testData.SourceName,
    SourceType = testData.SourceName.StartsWith("module-") ? SourceType.Module : SourceType.Script,
    ParseJSX = testData.SourceName.EndsWith(".tsx")
});
```

Expected compile failure: `The name 'TypeScriptParser' does not exist`.

- [ ] **Step 2: Run the focused test**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: build failure naming `TypeScriptParser`.

- [ ] **Step 3: Implement the minimal entry point**

Create `Njsast/Reader/TypeScriptParser.cs`:

```csharp
namespace Njsast.Reader;

public static class TypeScriptParser
{
    public static Ast.AstToplevel Parse(string input, Options? options = null)
    {
        options ??= new Options();
        options.ParseTypeScript = true;
        return Parser.Parse(input, options);
    }

    public static Ast.AstToplevel ParseTsx(string input, Options? options = null)
    {
        options ??= new Options();
        options.ParseTypeScript = true;
        options.ParseJSX = true;
        return Parser.Parse(input, options);
    }
}
```

Add to `Options`:

```csharp
public bool ParseTypeScript;
public bool ParseJSX;
```

- [ ] **Step 4: Run the focused test**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: parser fails on the first TypeScript-only token, proving the harness is active.

## Task 3: Strip Basic Type Annotations

**Files:**
- Modify: `Njsast/Reader/LVal.cs`
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/Expression.cs`
- Create/modify: `Njsast/Reader/TypeScript.cs`
- Fixture: `Test/Input/TypeScript/Parser/type-annotations.ts`

- [ ] **Step 1: Keep the current failing fixture**

Use `type-annotations.ts`:

```typescript
export function add(left: number, right: number): number {
    const total: number = left + right;
    return total;
}

let value: string | undefined = "ready";
value = undefined;
```

- [ ] **Step 2: Run the focused fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~type-annotations"`

Expected: FAIL on `:` after `left`.

- [ ] **Step 3: Add type skipping helpers**

Create helper methods in `Njsast/Reader/TypeScript.cs`:

```csharp
partial class Parser
{
    bool IsTypeScript => Options.ParseTypeScript;

    void TsTrySkipTypeAnnotation()
    {
        if (!IsTypeScript || Type != TokenType.Colon) return;
        Next();
        TsSkipType();
    }

    void TsSkipType()
    {
        var depth = 0;
        while (true)
        {
            if (Type == TokenType.Eof) Unexpected();
            if (depth == 0 && (Type == TokenType.Comma || Type == TokenType.ParenR || Type == TokenType.BraceL ||
                               Type == TokenType.BraceR || Type == TokenType.Eq || Type == TokenType.Semi))
                return;
            if (Type == TokenType.ParenL || Type == TokenType.BracketL || Type == TokenType.BraceL) depth++;
            if (Type == TokenType.ParenR || Type == TokenType.BracketR || Type == TokenType.BraceR) depth--;
            Next();
        }
    }
}
```

Call `TsTrySkipTypeAnnotation()` after parsing binding identifiers, parameters, variable declarator names, function return parameter lists, and class fields.

- [ ] **Step 4: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~type-annotations"`

Expected: PASS for stripped JavaScript, AST, nice output, and min output after expected files are generated.

## Task 4: Remove Type-Only Imports And Exports

**Files:**
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/TypeScript.cs`
- Fixture: `Test/Input/TypeScript/Parser/type-only-imports.ts`

- [ ] **Step 1: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~type-only-imports"`

Expected: FAIL on `import type`.

- [ ] **Step 2: Implement statement-level removal**

When `ParseTypeScript` is true:

```csharp
if (IsContextual("type") && previous token was import)
{
    TsSkipUntilStatementEnd();
    return new AstEmptyStatement(startLocation);
}
```

For mixed named imports:

```typescript
import { createUser, type UserOptions } from "./factory";
```

preserve only `createUser` in the resulting `AstImport`.

Do not rewrite the import to `require`; keep it as an ESM import:

```javascript
import { createUser } from "./factory";
```

- [ ] **Step 3: Add export type removal**

Handle these forms by skipping the statement and emitting no runtime statement:

```typescript
export type Name = string;
export interface Shape { x: number; }
export { type Name } from "./types";
```

For mixed exports, preserve runtime specifiers and the module string:

```typescript
export { runtimeValue, type User } from "./mod";
```

Expected normalized beautified JavaScript:

```javascript
export { runtimeValue } from "./mod";
```

- [ ] **Step 4: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~type-only-imports"`

Expected: PASS with ESM output:

```javascript
import { createUser } from "./factory";
export function build(id, options) {
    return createUser(id, options);
}
```

## Task 5: Strip Type Declarations And Assertions

**Files:**
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/Expression.cs`
- Modify: `Njsast/Reader/TypeScript.cs`
- Add fixtures: `interfaces-and-aliases.ts`, `assertions.ts`, `generic-functions.ts`

- [ ] **Step 1: Add fixture for aliases and interfaces**

```typescript
type Id = string | number;
interface User { id: Id; name?: string; }
const user = { id: 1, name: "Ada" };
```

Expected normalized beautified JavaScript:

```javascript
const user = { id: 1, name: "Ada" };
```

- [ ] **Step 2: Add fixture for assertions**

```typescript
const node = value as HTMLElement;
const id = <string>raw;
const checked = value satisfies Record<string, unknown>;
node!.focus();
```

Expected normalized beautified JavaScript:

```javascript
const node = value;
const id = raw;
const checked = value;
node.focus();
```

- [ ] **Step 3: Add fixture for generics**

```typescript
function first<T>(items: T[]): T {
    return items[0];
}
const value = first<string>(["a"]);
```

Expected normalized beautified JavaScript:

```javascript
function first(items) {
    return items[0];
}
const value = first(["a"]);
```

- [ ] **Step 4: Run the fixtures**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: FAIL on unimplemented TypeScript constructs, then PASS after each helper is added.

## Task 6: Downlevel String Enums

**Files:**
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/TypeScript.cs`
- Fixture: `Test/Input/TypeScript/Parser/string-enum.ts`

- [ ] **Step 1: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~string-enum"`

Expected: FAIL on `enum`.

- [ ] **Step 2: Build enum lowering AST**

Lower:

```typescript
enum Direction {
    Up = "UP",
    Down = "DOWN"
}
```

to:

```javascript
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
```

Use existing AST nodes: `AstVar`, `AstVarDef`, `AstCall`, `AstFunction`, `AstSimpleStatement`, `AstAssign`, `AstSub`, `AstString`, `AstBinary`, `AstObject`.

- [ ] **Step 3: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~string-enum"`

Expected: PASS.

## Task 7: Downlevel Numeric Enums With Reverse Mapping

**Files:**
- Modify: `Njsast/Reader/TypeScript.cs`
- Fixture: `Test/Input/TypeScript/Parser/numeric-enum.ts`

- [ ] **Step 1: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~numeric-enum"`

Expected: FAIL because numeric members are not yet reverse-mapped.

- [ ] **Step 2: Implement numeric member values**

Support implicit auto-increment and literal numeric initializers:

```typescript
enum Status {
    Pending,
    Running = 4,
    Done
}
```

Expected emitted assignments:

```javascript
Status[Status["Pending"] = 0] = "Pending";
Status[Status["Running"] = 4] = "Running";
Status[Status["Done"] = 5] = "Done";
```

- [ ] **Step 3: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~numeric-enum"`

Expected: PASS.

## Task 8: Handle Exported Enums

**Files:**
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/TypeScript.cs`
- Fixture: `Test/Input/TypeScript/Parser/exported-enum.ts`

- [ ] **Step 1: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~exported-enum"`

Expected: FAIL because `export enum` is not lowered.

- [ ] **Step 2: Preserve runtime export**

Lower:

```typescript
export enum Mode {
    Read = "read",
    Write = "write"
}
```

to:

```javascript
export var Mode;
(function (Mode) {
    Mode["Read"] = "read";
    Mode["Write"] = "write";
})(Mode || (Mode = {}));
```

- [ ] **Step 3: Run the fixture**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~exported-enum"`

Expected: PASS.

## Task 9: Handle Const Enums Conservatively

**Files:**
- Modify: `Njsast/Reader/TypeScript.cs`
- Add fixtures: `const-enum-inline.ts`, `const-enum-fallback.ts`

- [ ] **Step 1: Add inlinable const enum fixture**

```typescript
const enum Flags {
    None = 0,
    Read = 1,
    Write = 2,
    ReadWrite = Read | Write
}

console.log(Flags.ReadWrite);
```

Expected normalized beautified JavaScript:

```javascript
console.log(3);
```

- [ ] **Step 2: Add fallback const enum fixture**

```typescript
function value(): number {
    return 2;
}

const enum Dynamic {
    A = value()
}

console.log(Dynamic.A);
```

Expected normalized beautified JavaScript:

```javascript
function value() {
    return 2;
}

var Dynamic;

(function(Dynamic) {
    Dynamic[Dynamic["A"] = value()] = "A";
})(Dynamic || (Dynamic = {}));

console.log(Dynamic.A);
```

- [ ] **Step 3: Implement local const enum evaluation**

For `const enum`, attempt parser-local evaluation for string literals, numeric literals, unary numeric expressions, binary numeric/bitwise expressions, and references to earlier members in the same enum. Replace member accesses with literals only when evaluation succeeds for every used member reference in the file.

- [ ] **Step 4: Implement automatic fallback**

If any member initializer cannot be evaluated or if a reference cannot be safely rewritten, lower the declaration exactly like a normal non-const enum. Do not raise an error merely because inlining was impossible.

- [ ] **Step 5: Run const enum fixtures**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~const-enum"`

Expected: PASS.

## Task 10: Add Class And Parameter Property Coverage

**Files:**
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/Expression.cs`
- Add fixtures: `classes.ts`, `parameter-properties.ts`

- [ ] **Step 1: Add class modifier fixture**

```typescript
abstract class Base {
    protected abstract run(value: string): void;
}
class Worker extends Base implements Runnable {
    public readonly name!: string;
    override run(value: string): void {
        console.log(value);
    }
}
```

Expected normalized beautified JavaScript:

```javascript
class Base {}
class Worker extends Base {
    run(value) {
        console.log(value);
    }
}
```

- [ ] **Step 2: Add parameter property fixture**

```typescript
class Point {
    constructor(public x: number, private y: number) {}
}
```

Expected normalized beautified JavaScript:

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
```

- [ ] **Step 3: Implement only syntax stripping first**

Make `public`, `private`, `protected`, `readonly`, `abstract`, and `override` contextual modifiers in TypeScript mode. Skip abstract member declarations that have no body.

- [ ] **Step 4: Implement parameter property assignment injection**

When a constructor parameter has an accessibility modifier or `readonly`, remove the modifier from the parameter and prepend `this.name = name;` to the constructor body.

- [ ] **Step 5: Run class fixtures**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: PASS for class fixtures and existing enum/import fixtures.

## Task 11: Add `.tsx` Compatibility

**Files:**
- Modify: `TypeScriptParserTestDataProviderAttribute.cs`
- Modify: `Njsast/Reader/Jsx.cs`
- Modify: `Njsast/Reader/Expression.cs`
- Fixture: `Test/Input/TypeScript/Parser/tsx-type-stripping.tsx`

- [ ] **Step 1: Extend provider to discover `.tsx`**

Accept both `.ts` and `.tsx` in the TypeScript provider.

- [ ] **Step 2: Add TSX fixture**

```tsx
type Props = { title: string };
export const View = (props: Props) => <h1>{props.title}</h1>;
```

Expected normalized beautified JavaScript:

```javascript
export const View = props => <h1>{props.title}</h1>;
```

- [ ] **Step 3: Run TSX fixture**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: PASS and no regression in existing JSX parser tests.

- [ ] **Step 4: Gate JSX behind `Options.ParseJSX`**

Update `CanStartJsx()` so JSX parsing is enabled only when `Options.ParseJSX` is true. Existing JavaScript parser tests that include JSX must construct `Options { ParseJSX = true }`. TypeScript parsing of `.tsx` sets both `ParseTypeScript = true` and `ParseJSX = true`; TypeScript parsing of `.ts` sets only `ParseTypeScript = true`.

## Task 12: Strip TSX Types Without Consuming JSX

**Files:**
- Modify: `Njsast/Reader/Expression.cs`
- Modify: `Njsast/Reader/Jsx.cs`
- Modify: `Njsast/Reader/TypeScript.cs`
- Add fixtures: `tsx-callback-types.tsx`, `tsx-as-expression.tsx`, `tsx-generic-component.tsx`

- [ ] **Step 1: Add callback type fixture**

```tsx
export const Button = (props: { onClick(value: string): void }) =>
    <button onClick={(event: MouseEvent) => props.onClick(event.type)}>Save</button>;
```

Expected normalized beautified JavaScript:

```javascript
export const Button = props => <button onClick={event => props.onClick(event.type)}>Save</button>;
```

- [ ] **Step 2: Add `as` expression fixture inside JSX**

```tsx
export const Label = (props: { value: unknown }) =>
    <span>{props.value as string}</span>;
```

Expected normalized beautified JavaScript:

```javascript
export const Label = props => <span>{props.value}</span>;
```

- [ ] **Step 3: Add generic component fixture**

```tsx
export function Select<T extends string>(props: { value: T; options: T[] }) {
    return <select value={props.value}>{props.options.map(option => <option>{option}</option>)}</select>;
}
```

Expected normalized beautified JavaScript:

```javascript
export function Select(props) {
    return <select value={props.value}>{props.options.map(option => <option>{option}</option>)}</select>;
}
```

- [ ] **Step 4: Implement TSX disambiguation**

When TypeScript mode and JSX are both active, parse `<T extends Props>(props: T) => ...` as a generic arrow only if the `<...>` list is followed by a parameter list and `=>`. Parse `<h1>` and fragments through existing JSX code. Inside JSX expression containers, allow TypeScript expression suffix stripping (`as`, `satisfies`, `!`) before the closing `}`.

- [ ] **Step 5: Run TSX fixtures**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~tsx"`

Expected: PASS for all TSX fixtures and PASS for existing `Test/Jsx` tests.

## Task 13: Add Legacy TypeScript Decorator Emit

**Files:**
- Create: `Njsast/Reader/TypeScriptDecorators.cs`
- Modify: `Njsast/Reader/Statement.cs`
- Modify: `Njsast/Reader/Expression.cs`
- Add fixtures: `decorator-class.ts`, `decorator-method.ts`, `decorator-property.ts`, `decorator-parameter.ts`

- [ ] **Step 1: Add class decorator fixture**

```typescript
function sealed(target: Function) {}

@sealed
class Service {}
```

Expected normalized beautified JavaScript:

```javascript
var Service = class Service {
};
Service = __decorate([
    sealed
], Service);
```

- [ ] **Step 2: Add method decorator fixture**

```typescript
function logged(target: unknown, key: string, descriptor: PropertyDescriptor) {}

class Service {
    @logged
    run(value: string): void {}
}
```

Expected normalized beautified JavaScript:

```javascript
class Service {
    run(value) {}
}
__decorate([
    logged
], Service.prototype, "run", null);
```

- [ ] **Step 3: Add property decorator fixture**

```typescript
function field(target: unknown, key: string) {}

class Service {
    @field
    name!: string;
}
```

Expected normalized beautified JavaScript:

```javascript
class Service {
}
__decorate([
    field
], Service.prototype, "name", void 0);
```

- [ ] **Step 4: Add parameter decorator fixture**

```typescript
function param(target: unknown, key: string, index: number) {}

class Service {
    run(@param value: string): void {}
}
```

Expected normalized beautified JavaScript:

```javascript
class Service {
    run(value) {}
}
__decorate([
    __param(0, param)
], Service.prototype, "run", null);
```

- [ ] **Step 5: Implement decorator collection**

In TypeScript mode, collect `@expression` lists before class declarations, class methods, class fields, accessors, and constructor/method parameters. Store them as parse-local runtime expressions. Do not add public AST node types for decorators. Match the `bbcore` transpiler baseline for decorator semantics: TypeScript `transpileModule` with `experimentalDecorators = true`, `noEmitHelpers = true`, and `target = Es2019` by default during current builds. Do not copy TypeScript's CommonJS module conversion; preserve ESM and let the existing ESM-to-CJS transformer handle module lowering later.

- [ ] **Step 6: Emit calls to global tslib helpers**

Assume `__decorate`, `__param`, and any later required decorator helpers already exist in global scope. The TypeScript parser must emit calls to those helpers, but must not inject helper definitions, import `tslib`, or modify `Njsast/Bundler/JsHeaders/tslib.js`. This is required because `bbcore` uses `noEmitHelpers: true`.

- [ ] **Step 7: Implement legacy emit order**

Emit class member decorator calls after the class declaration. Emit class decorator assignment after member decorators. For static members use `ClassName`; for instance members use `ClassName.prototype`. Use `null` descriptor for methods/accessors and `void 0` for fields, matching TypeScript legacy output.

- [ ] **Step 8: Run decorator fixtures**

Run: `rtk dotnet test Test/Test.csproj --filter "FullyQualifiedName~TypeScriptParserTest&DisplayName~decorator"`

Expected: PASS.

- [ ] **Step 9: Add explicit unsupported-decorator tests**

Add fixtures that should fail with a clear syntax error for Stage 3 decorators if the source uses syntax unsupported by old TypeScript decorators. This prevents silently producing incorrect output for a different decorator proposal.

## Task 14: Keep Namespace Support Deferred But Possible

**Files:**
- Modify only if namespace parsing would otherwise be blocked by earlier grammar choices.
- Add future fixtures under `Test/Input/TypeScript/Parser/namespace-*.ts` when namespace lowering is implemented.

- [ ] **Step 1: Reserve namespace grammar intentionally**

Do not treat `namespace` or `module Foo {}` as ordinary JavaScript identifiers in statement-start TypeScript mode. If encountered before namespace support exists, raise a clear syntax error such as `TypeScript namespace lowering is not implemented`.

- [ ] **Step 2: Avoid AST design dead ends**

Keep enum and decorator lowering helpers independent from declaration parsing so a future namespace implementation can reuse them for nested runtime declarations.

- [ ] **Step 3: Document low priority**

Namespaces are runtime TypeScript and should eventually lower to TypeScript-compatible IIFEs, but they are lower priority than type stripping, type imports, enums, decorators, and TSX.

## Task 15: Source Locations And Source Maps

**Files:**
- Modify: `Test/TypeScript/TypeScriptParserTest.cs`
- Modify: `Njsast/Reader/TypeScript.cs`
- Add `.nicejs.map` and `.minjs.map` expectations

- [ ] **Step 1: Extend test core to emit source maps**

Mirror `ParserTest.ParseTestCore` and include `.nicejs.map` and `.minjs.map` fields in `TypeScriptParserTestData`.

- [ ] **Step 2: Verify stripped spans**

Use the original TypeScript `SourceFile` and preserve node locations for runtime tokens. Type-only tokens should not appear in output mappings.

- [ ] **Step 3: Run full parser tests**

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~ParserTest`

Expected: PASS.

Run: `rtk dotnet test Test/Test.csproj --filter FullyQualifiedName~TypeScriptParserTest`

Expected: PASS.

## Task 16: Regression And Compatibility Pass

**Files:**
- Modify only files needed by failures found in this task.

- [ ] **Step 1: Run all unit tests**

Run: `rtk dotnet test Njsast.sln`

Expected: PASS.

- [ ] **Step 2: Run command-line test runner**

Run: `rtk dotnet run --project Test/Test.csproj`

Expected: `Total 0 differences in ... tests`.

- [ ] **Step 3: Add targeted fixtures for every fixed bug**

For every TypeScript parser bug found after this point, add a minimal `.ts` or `.tsx` fixture before changing parser code.

## Open Design Decisions

- `const enum` is decided: inline only when parser-local constant evaluation can prove the member values; otherwise automatically lower it as a normal non-const enum.
- Namespaces should be supported later, but are explicitly low priority. The initial implementation should reject them clearly without preventing future lowering.
- Decorators should follow `bbcore`'s TypeScript legacy decorator input: `experimentalDecorators = true`, `noEmitHelpers = true`, helper calls assumed global.
- Parser mode is not open-ended: use exactly `Options.ParseTypeScript` and `Options.ParseJSX`. TSX is represented by both being true.
- Expected JavaScript is decided: tests must match normalized Njsast printer outputs (`.nicejs` and `.minjs`) rather than TypeScript's raw whitespace or statement formatting.

## Self-Review

- Spec coverage: type stripping, type import removal, enum downleveling, TSX type stripping, and legacy decorator emit are each covered by initial fixtures or dedicated implementation tasks.
- Placeholder scan: no task depends on a vague implementation step without a concrete fixture, command, and expected result.
- Type consistency: the plan consistently uses `TypeScriptParser`, `TypeScriptParserTestData`, `Options.ParseTypeScript`, and `Options.ParseJSX`.
