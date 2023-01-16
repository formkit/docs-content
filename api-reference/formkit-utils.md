---
title: formkit/utils
---

# @formkit/utils

<page-toc></page-toc>

## Introduction

Commonly shared utility functions between official FormKit packages.

You can add this package by using `npm install @formkit/utils` or `yarn add @formkit/utils`.

## Functions

### assignDeep()

Performs a recursive Object.assign like operation.

#### Signature

```typescript
assignDeep<A extends Record<PropertyKey, any>, B extends Record<PropertyKey, any>>(a: A, b: B): A & B;
```

#### Parameters

* `a` — An object to be assigned
* `b` — An object to get values from

#### Returns

`A & B`

### camel()

This converts kebab-case to camelCase. It ONLY converts from kebab for efficiency stake.

#### Signature

```typescript
camel(str: string): string;
```

#### Parameters

* `str` — String to be camel cased.

#### Returns

`string`

### clone()

Perform a recursive clone on a given object. This only intended to be used for simple objects like arrays and pojos.

#### Signature

```typescript
clone<T extends Record<string, unknown> | unknown[] | null>(obj: T, explicit?: string[]): T;
```

#### Parameters

* `obj` — Object to be cloned
* `explicit` — Array of items to be explicity cloned.

#### Returns

`T`

### cloneAny()

Clones anything. If the item is scalar, no worries, it passes it back. if it is an object, it performs a (fast/loose) clone operation.

#### Signature

```typescript
cloneAny<T>(obj: T): T;
```

#### Parameters

* `obj` — Value to be cloned

#### Returns

`T`

### dedupe()

Given 2 arrays, return them as a combined array with no duplicates.

#### Signature

```typescript
dedupe<T extends any[] | Set<any>, X extends any[] | Set<any>>(arr1: T, arr2?: X): any[];
```

#### Parameters

* `arr1` — First array
* `arr2` — Second array

#### Returns

`any[]`

### empty()

Determines if a value is empty or not.

#### Signature

```typescript
empty(value: any): boolean;
```

#### Parameters

* `value` — Value to check if its empty

#### Returns

`boolean`

### eq()

Compare two values for equality optionally at depth.

#### Signature

```typescript
eq(valA: any, valB: any, deep?: boolean, explicit?: string[]): boolean;
```

#### Parameters

* `valA` — First value
* `valB` — Second value
* `deep` — If it will check deepely for the value if its object
* `explicit` — An array of string to explicity check

#### Returns

`boolean`

### escapeExp()

Escape a string for use in regular expressions.

#### Signature

```typescript
escapeExp(string: string): string;
```

#### Parameters

* `string` — String to be escaped

#### Returns

`string`

### except()

Return a new (shallow) object with all properties from a given object that are present in the array.

#### Signature

```typescript
except(obj: Record<string, any>, toRemove: Array<string | RegExp>): Record<string, any>;
```

#### Parameters

* `obj` — An object to get values from
* `toRemove` — Array of items to got

#### Returns

`Record<string, any>`

### extend()

Recursively merge data from additional into original returning a new object.

#### Signature

```typescript
extend(original: Record<string, any>, additional: Record<string, any> | string | null, extendArrays?: boolean, ignoreUndefined?: boolean): Record<string, any> | string | null;
```

#### Parameters

* `original` — Original array
* `additional` — Array to be used for merge
* `extendArrays` — If it will extend the array
* `ignoreUndefined` — If it will ignore undefined values

#### Returns

`Record<string, any> | string | null`

### getAt()

Get a specific value via dot notation.

#### Signature

```typescript
getAt(obj: any, addr: string): unknown;
```

#### Parameters

* `obj` — An object to fetch data from
* `addr` — An "address" in dot notation

#### Returns

`unknown`

### has()

Checks if the given property exists on the given object.

#### Signature

```typescript
has(obj: {
    [index: string]: any;
    [index: number]: any;
}, property: string | symbol | number): boolean;
```

#### Parameters

* `obj` — An object of to be checked
* `property` — The property to check

#### Returns

`boolean`

### init()

Defines an object as an initial value.

#### Signature

```typescript
init<T extends object>(obj: T): T & {
    __init?: true;
};
```

#### Parameters

* `obj` — Object to be added an initial value.

#### Returns

`T & { __init?: true }`

### isObject()

Checks if an object is a simple array or record.

#### Signature

```typescript
isObject(o: unknown): o is Record<PropertyKey, unknown> | unknown[];
```

#### Parameters

* `o` — Value to be checked

#### Returns

`boolean`

### isPojo()

Attempts to determine if an object is a plain object. Mostly lifted from is-plain-object: https://github.com/jonschlinkert/is-plain-object Copyright (c) 2014-2017, Jon Schlinkert.

#### Signature

```typescript
isPojo(o: any): o is Record<string, any>;
```

#### Parameters

* `o` — Value to be checked

#### Returns

`boolean`

### isQuotedString()

Determine if the given string is fully quoted.

#### Signature

```typescript
isQuotedString(str: string): boolean;
```

#### Parameters

* `str` — String to check

#### Returns

`boolean`

#### Examples

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

### isRecord()

Determines if an object is an object or not.

#### Signature

```typescript
isRecord(o: unknown): o is Record<PropertyKey, unknown>;
```

#### Parameters

* `o` — Value to be checked

#### Returns

`boolean`

### kebab()

This converts camel-case to kebab case. It ONLY converts from camel to kebab.

#### Signature

```typescript
kebab(str: string): string;
```

#### Parameters

* `str` — String to be kebabed

#### Returns

`string`

### nodeProps()

Filters out values from an object that should not be considered "props" of a core node, like "value" and "name".

#### Signature

```typescript
nodeProps(...sets: Array<Record<string, any>>): Record<string, any>;
```

#### Parameters

* `sets` — Arrays to be used to get values filtered out of

#### Returns

`Record<string, any>`

### nodeType()

Given a FormKit input type returns the correct type

#### Signature

```typescript
nodeType(type: string): 'list' | 'group' | 'input';
```

#### Parameters

* `type` — String to return to check for correct type

#### Returns

`'list' | 'group' | 'input'`

### only()

Extracts a set of keys from a given object. Importantly, this will extract values even if they are not set on the original object they will just have an undefined value.

#### Signature

```typescript
only(obj: Record<string, any>, include: Array<string | RegExp>): Record<string, any>;
```

#### Parameters

* `obj` — An object to get values from
* `include` — Array of items to got

#### Returns

`Record<string, any>`

### parseArgs()

Parse a string for comma-separated arguments

#### Signature

```typescript
parseArgs(str: string): string[];
```

#### Parameters

* `str` — String to parse arguments from

#### Returns

`string[]`

### regexForFormat()

Given a string format (date) return a regex to match against.

#### Signature

```typescript
regexForFormat(format: string): RegExp;
```

#### Parameters

* `format` — String to be transformed to RegExp

#### Returns

`RegExp`

### rmEscapes()

Remove extra escape characters.

#### Signature

```typescript
rmEscapes(str: string): string;
```

#### Parameters

* `str` — String to be removed

#### Returns

`string`

### setify()

Creates a new set of the specified type and uses the values from an Array or an existing Set.

#### Signature

```typescript
setify<T>(items: Set<T> | T[] | null | undefined): Set<T>;
```

#### Parameters

* `items` — An array or a Set.

#### Returns

`Set<T>`

#### Examples

```javascript
import { setify } from '@formkit/utils'

const tk = setify(['a', 'b'])
// Set(2) {'a', 'b'}
```

### shallowClone()

Very shallowly clones the given object.

#### Signature

```typescript
shallowClone<T>(obj: T, explicit?: string[]): T;
```

#### Parameters

* `obj` — Object to be shallow cloned
* `explicit` — Array of items to be explicity cloned.

#### Returns

`T`

### slugify()

Turn any string into a URL/DOM safe string.

#### Signature

```typescript
slugify(str: string): string;
```

#### Parameters

* `str` — String to be slugfied to a url safe string.

#### Returns

`string`

### spread()

Spreads an object or an array, otherwise returns the same value.

#### Signature

```typescript
spread<T>(obj: T, explicit?: string[]): T;
```

#### Parameters

* `obj` — Object to be spreaded
* `explicit` — Array of items to be explicity spread.

#### Returns

`T`

### token()

Generates a random string.

#### Signature

```typescript
token(): string;
```

#### Returns

 string

#### Examples

```javascript
import { token } from '@formkit/utils'

const tk = token()
// 'jkbyqnphqm'
```

### undefine()

Determines if the value of a prop that is either present (true) or not present (undefined). For example the prop disabled should disable by just existing, but what if it is set to the string "false" — then it should not be disabled.

#### Signature

```typescript
undefine(value: unknown): true | undefined;
```

#### Parameters

* `value` — Value to check for undefined.

#### Returns

`true | undefined`

## TypeScript

### FormKitDateTokens

The date token strings that can be used for date formatting.

```typescript
type FormKitDateTokens = 'MM' | 'M' | 'DD' | 'D' | 'YYYY' | 'YY';
```