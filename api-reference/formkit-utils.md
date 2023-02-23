---
title: formkit/utils
---

# @formkit/utils

:PageToc

## Introduction

Commonly shared utility functions between official FormKit packages.

You can add this package by using `npm install @formkit/utils` or `yarn add @formkit/utils`.

## Functions

### assignDeep()

Performs a recursive `Object.assign`
-like operation.

#### Signature

<client-only>

```typescript
assignDeep<A extends Record<PropertyKey, any>, B extends Record<PropertyKey, any>>(a: A, b: B): A & B;
```

</client-only>

#### Parameters

- `a` — An object to be assigned.
- `b` — An object to get values from.

#### Returns

`A & B`

### camel()

This converts kebab-case to camelCase. It ONLY converts from kebab to camel.

#### Signature

<client-only>

```typescript
camel(str: string): string;
```

</client-only>

#### Parameters

- `str` — String to be camel cased.

#### Returns

`string`

### clone()

Perform a recursive clone on a given object. Only intended to be used for simple objects like arrays and POJOs.

#### Signature

<client-only>

```typescript
clone<T extends Record<string, unknown> | unknown[] | null>(obj: T, explicit?: string[]): T;
```

</client-only>

#### Parameters

- `obj` — Object to be cloned.
- `explicit` — Array of items to be explicity cloned.

#### Returns

`T`

### cloneAny()

Clones anything. If the item is scalar, no worries, it passes it back. If it is an object, it performs a (fast/loose) clone operation.

#### Signature

<client-only>

```typescript
cloneAny<T>(obj: T): T;
```

</client-only>

#### Parameters

- `obj` — The value to be cloned.

#### Returns

`T`

### dedupe()

Given 2 arrays, return them as a combined array with no duplicates.

#### Signature

<client-only>

```typescript
dedupe<T extends any[] | Set<any>, X extends any[] | Set<any>>(arr1: T, arr2?: X): any[];
```

</client-only>

#### Parameters

- `arr1` — First array.
- `arr2` — Second array.

#### Returns

`any[]`

### empty()

Determines if a value is empty or not.

#### Signature

<client-only>

```typescript
empty(value: any): boolean;
```

</client-only>

#### Parameters

- `value` — The value to check if it's empty.

#### Returns

`boolean`

### eq()

Compare two values for equality, optionally at depth.

#### Signature

<client-only>

```typescript
eq(valA: any, valB: any, deep?: boolean, explicit?: string[]): boolean;
```

</client-only>

#### Parameters

- `valA` — First value.
- `valB` — Second value.
- `deep` — If it will compare deeply if it's an object.
- `explicit` — An array of keys to explicity check.

#### Returns

`boolean`

### escapeExp()

Escape a string for use in regular expressions.

#### Signature

<client-only>

```typescript
escapeExp(string: string): string;
```

</client-only>

#### Parameters

- `string` — String to be escaped.

#### Returns

`string`

### except()

Return a new (shallow) object with any desired props removed.

#### Signature

<client-only>

```typescript
except(obj: Record<string, any>, toRemove: Array<string | RegExp>): Record<string, any>;
```

</client-only>

#### Parameters

- `obj` — The starting object.
- `toRemove` — The array of properties to remove. Accepts strings or regular expressions.

#### Returns

`Record<string, any>`

### extend()

Recursively merge data from additional into original returning a new object.

#### Signature

<client-only>

```typescript
extend(original: Record<string, any>, additional: Record<string, any> | string | null, extendArrays?: boolean, ignoreUndefined?: boolean): Record<string, any> | string | null;
```

</client-only>

#### Parameters

- `original` — The original array.
- `additional` — The array to merge.
- `extendArrays` — If it will extend/concatenate array values instead of replacing them.
- `ignoreUndefined` — If it will preserve values from the original object even if the additional object has those values set to undefined.

#### Returns

`Record<string, any> | string | null`

### getAt()

Get a specific value via dot notation.

#### Signature

<client-only>

```typescript
getAt(obj: any, addr: string): unknown;
```

</client-only>

#### Parameters

- `obj` — An object to fetch data from.
- `addr` — An "address" in dot notation.

#### Returns

`unknown`

### has()

Checks if the given property exists on the given object.

#### Signature

<client-only>

```typescript
has(obj: {
    [index: string]: any;
    [index: number]: any;
}, property: string | symbol | number): boolean;
```

</client-only>

#### Parameters

- `obj` — An object to check.
- `property` — The property to check.

#### Returns

`boolean`

### init()

Defines an object as an initial value.

#### Signature

<client-only>

```typescript
init<T extends object>(obj: T): T & {
    __init?: true;
};
```

</client-only>

#### Parameters

- `obj` — Object to be added an initial value.

#### Returns

`T & { __init?: true }`

### isObject()

Checks if an object is a simple array or record.

#### Signature

<client-only>

```typescript
isObject(o: unknown): o is Record<PropertyKey, unknown> | unknown[];
```

</client-only>

#### Parameters

- `o` — Value to be checked.

#### Returns

`boolean`

### isPojo()

Attempts to determine if an object is a POJO (Plain Old JavaScript Object). Mostly lifted from is-plain-object: https://github.com/jonschlinkert/is-plain-object Copyright (c) 2014-2017, Jon Schlinkert.

#### Signature

<client-only>

```typescript
isPojo(o: any): o is Record<string, any>;
```

</client-only>

#### Parameters

- `o` — The value to be checked.

#### Returns

`boolean`

### isQuotedString()

Determine if the given string is fully quoted.

#### Signature

<client-only>

```typescript
isQuotedString(str: string): boolean;
```

</client-only>

#### Parameters

- `str` — The string to check.

#### Returns

`boolean`

#### Examples

<client-only>

```javascript
hello - false
"hello" - true
'world' - true
"hello"=="world" - false
"hello'this'" - false
"hello"'there' - false
"hello""there" - false
'hello === world' - true
```

</client-only>

### isRecord()

Determines if an object is an object.

#### Signature

<client-only>

```typescript
isRecord(o: unknown): o is Record<PropertyKey, unknown>;
```

</client-only>

#### Parameters

- `o` — The value to be checked.

#### Returns

`boolean`

### kebab()

This converts camel-case to kebab case. It ONLY converts from camel to kebab.

#### Signature

<client-only>

```typescript
kebab(str: string): string;
```

</client-only>

#### Parameters

- `str` — String to be kebabed.

#### Returns

`string`

### nodeProps()

Filters out values from an object that should not be considered "props" of a core node, like "value" and "name".

#### Signature

<client-only>

```typescript
nodeProps(...sets: Array<Record<string, any>>): Record<string, any>;
```

</client-only>

#### Parameters

- `sets` — The arrays to get values filtered out of.

#### Returns

`Record<string, any>`

### nodeType()

Given a FormKit input type, returns the correct lowerCased() type.

#### Signature

<client-only>

```typescript
nodeType(type: string): 'list' | 'group' | 'input';
```

</client-only>

#### Parameters

- `type` — String to return to check for correct type

#### Returns

`'list' | 'group' | 'input'`

### only()

Extracts a set of keys from a given object. Importantly, this will extract values even if they are not set on the original object — they will just have an undefined value.

#### Signature

<client-only>

```typescript
only(obj: Record<string, any>, include: Array<string | RegExp>): Record<string, any>;
```

</client-only>

#### Parameters

- `obj` — The object to get values from.
- `include` — The array of items to get.

#### Returns

`Record<string, any>`

### parseArgs()

Parse a string for comma-separated arguments.

#### Signature

<client-only>

```typescript
parseArgs(str: string): string[];
```

</client-only>

#### Parameters

- `str` — String to parse arguments from.

#### Returns

`string[]`

### regexForFormat()

Given a string date format, return a regex to match against.

#### Signature

<client-only>

```typescript
regexForFormat(format: string): RegExp;
```

</client-only>

#### Parameters

- `format` — String to be transformed to RegExp.

#### Returns

`RegExp`

#### Examples

<client-only>

```javascript
regexForFormat('MM') // returns '(0[1-9]|1[012])'
```

</client-only>

### rmEscapes()

Remove extra escape characters.

#### Signature

<client-only>

```typescript
rmEscapes(str: string): string;
```

</client-only>

#### Parameters

- `str` — String to remove extra escape characters from.

#### Returns

`string`

### setify()

Creates a new set of the specified type and uses the values from an Array or an existing Set.

#### Signature

<client-only>

```typescript
setify<T>(items: Set<T> | T[] | null | undefined): Set<T>;
```

</client-only>

#### Parameters

- `items` — An array or a Set.

#### Returns

`Set<T>`

#### Examples

<client-only>

```javascript
import { setify } from '@formkit/utils'

const tk = setify(['a', 'b'])
// Set(2) {'a', 'b'}
```

</client-only>

### shallowClone()

Shallowly clones the given object.

#### Signature

<client-only>

```typescript
shallowClone<T>(obj: T, explicit?: string[]): T;
```

</client-only>

#### Parameters

- `obj` — Object to be shallowly cloned.
- `explicit` — The array of keys to be explicity cloned.

#### Returns

`T`

### slugify()

Turn any string into a URL/DOM-safe string.

#### Signature

<client-only>

```typescript
slugify(str: string): string;
```

</client-only>

#### Parameters

- `str` — String to be slugified to a URL
  -safe string.

#### Returns

`string`

### spread()

Spreads an object or an array, otherwise returns the same value.

#### Signature

<client-only>

```typescript
spread<T>(obj: T, explicit?: string[]): T;
```

</client-only>

#### Parameters

- `obj` — The object to be spread.
- `explicit` — The array of items to be explicity spread.

#### Returns

`T`

### token()

Generates a random string.

#### Signature

<client-only>

```typescript
token(): string;
```

</client-only>

#### Returns

string

#### Examples

<client-only>

```javascript
import { token } from '@formkit/utils'

const tk = token()
// 'jkbyqnphqm'
```

</client-only>

### undefine()

Determines if the value of a prop that is either present (true) or not present (undefined). For example, the prop disabled should disable by just existing, but what if it is set to the string "false" — then it should not be disabled.

#### Signature

<client-only>

```typescript
undefine(value: unknown): true | undefined;
```

</client-only>

#### Parameters

- `value` — Value to check for undefined.

#### Returns

`true | undefined`

### whenAvailable()

Uses a global mutation observer to wait for a given element to appear in the DOM.

#### Signature

<client-only>

```typescript
whenAvailable(childId: string, callback: (el: Element) => void): void;
```

</client-only>

#### Parameters

- `childId` — The id of the child node.
- `callback` — The callback to call when the child node is found.

## TypeScript

### FormKitDateTokens

The date token strings that can be used for date formatting.

<client-only>

```typescript
type FormKitDateTokens = 'MM' | 'M' | 'DD' | 'D' | 'YYYY' | 'YY'
```

</client-only>
