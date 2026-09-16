# ts-sandbox

TypeScript fundamentals — hands-on exercises written while learning TypeScript for Playwright test automation.

## What's inside

| File | Topic |
|------|-------|
| `types-basic.ts` | Primitive types, type annotations, `any` vs explicit typing |
| `type-inference.ts` | How TypeScript infers types without explicit annotations |
| `fn-types.ts` | Function parameter types, return types, optional parameters |
| `fn-types-exercise.ts` | Practice exercise for function typing |
| `unionTypes-and-literalUnions.ts` | Union types (`string \| number`) and literal unions |
| `type-narrowing.ts` | Narrowing union types with `typeof`, truthiness, equality |
| `optional-properties.ts` | Optional object properties, default values |
| `typeAssertions-and-nonNulls.ts` | Type assertions (`as`) and non-null assertion (`!`) |
| `strict-null-checks.ts` | `strictNullChecks`, handling `null` and `undefined` safely |
| `interface-vs-type.ts` | `interface` vs `type` — when to use each |
| `typed-arrays.ts` | Typed arrays, tuples, readonly arrays |
| `typed-classes.ts` | Classes with typed properties, access modifiers, implements |
| `generics.ts` | Generic functions, generic interfaces, constraints |
| `async-types.ts` | Typing `async`/`await`, `Promise<T>` return types |
| `integration.ts` | Block 7 integration exercise — combines all topics above |
| `ts-catch.ts` | Typing `catch` block errors (`unknown` vs `any`) |

## Setup

```bash
npm install
```

## Compile and run

```bash
npx tsc                  # compiles all .ts files to dist/
node dist/<filename>.js  # run any compiled file
```

## Tech

- TypeScript 7
- Node.js
- `strict: true` in tsconfig
