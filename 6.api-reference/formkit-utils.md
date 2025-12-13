---
title: formkit/utils
---

# @formkit/utils


## Introduction

Commonly shared utility functions between official FormKit packages.

You can add this package by using `npm install @formkit/utils` or `yarn add @formkit/utils`.

## Functions

::api-entry{name="assignDeep()" type="function"}
Performs a recursive `Object.assign`-like operation.

#### Signature


```typescript
assignDeep<A extends Record<PropertyKey, any>, B extends Record<PropertyKey, any>>(a: A, b: B): A & B;
```

#### Parameters

- `a` — An object to be assigned.
- `b` — An object to get values from.

#### Returns

 `A & B`
::

::api-entry{name="camel()" type="function"}
This converts kebab-case to camelCase. It ONLY converts from kebab to camel.

#### Signature


```typescript
camel(str: string): string;
```

#### Parameters

- `str` — String to be camel cased.

#### Returns

 `string`
::

::api-entry{name="clone()" type="function"}
Perform a recursive clone on a given object. Only intended to be used for simple objects like arrays and POJOs.

#### Signature


```typescript
clone<T extends Record<string, unknown> | unknown[] | null>(obj: T, explicit?: string[]): T;
```

#### Parameters

- `obj` — Object to be cloned.
- `explicit` *optional* — Array of items to be explicity cloned.

#### Returns

 `T`
::

::api-entry{name="cloneAny()" type="function"}
Clones anything. If the item is scalar, no worries, it passes it back. If it is an object, it performs a (fast/loose) clone operation.

#### Signature


```typescript
cloneAny<T>(obj: T): T;
```

#### Parameters

- `obj` — The value to be cloned.

#### Returns

 `T`
::

::api-entry{name="dedupe()" type="function"}
Given 2 arrays, return them as a combined array with no duplicates.

#### Signature


```typescript
dedupe<T extends any[] | Set<any>, X extends any[] | Set<any>>(arr1: T, arr2?: X): any[];
```

#### Parameters

- `arr1` — First array.
- `arr2` *optional* — Second array.

#### Returns

 `any[]`
::

::api-entry{name="empty()" type="function"}
Determines if a value is empty or not.

#### Signature


```typescript
empty(value: any): boolean;
```

#### Parameters

- `value` — The value to check if it's empty.

#### Returns

 `boolean`
::

::api-entry{name="eq()" type="function"}
Compare two values for equality, optionally at depth.

#### Signature


```typescript
eq(valA: any, valB: any, deep?: boolean, explicit?: string[]): boolean;
```

#### Parameters

- `valA` — First value.
- `valB` — Second value.
- `deep` *optional* — If it will compare deeply if it's an object.
- `explicit` *optional* — An array of keys to explicity check.

#### Returns

 `boolean`
::

::api-entry{name="eqRegExp()" type="function"}
A regular expression to test for a valid date string.

#### Signature


```typescript
eqRegExp(x: RegExp, y: RegExp): boolean;
```

#### Parameters

- `x` — A RegExp to compare.
- `y` — A RegExp to compare.
::

::api-entry{name="escapeExp()" type="function"}
Escape a string for use in regular expressions.

#### Signature


```typescript
escapeExp(string: string): string;
```

#### Parameters

- `string` — String to be escaped.

#### Returns

 `string`
::

::api-entry{name="except()" type="function"}
Return a new (shallow) object with any desired props removed.

#### Signature


```typescript
except(obj: Record<string, any>, toRemove: Array<string | RegExp>): Record<string, any>;
```

#### Parameters

- `obj` — The starting object.
- `toRemove` — The array of properties to remove. Accepts strings or regular expressions.

#### Returns

 `Record<string, any>`
::

::api-entry{name="extend()" type="function"}
Recursively merge data from additional into original returning a new object.

#### Signature


```typescript
extend(original: Record<string, any>, additional: Record<string, any> | string | null, extendArrays?: boolean, ignoreUndefined?: boolean): Record<string, any> | string | null;
```

#### Parameters

- `original` — The original array.
- `additional` — The array to merge.
- `extendArrays` *optional* — If it will extend/concatenate array values instead of replacing them.
- `ignoreUndefined` *optional* — If it will preserve values from the original object even if the additional object has those values set to undefined.

#### Returns

 `Record<string, any> | string | null`
::

::api-entry{name="getAt()" type="function"}
Get a specific value via dot notation.

#### Signature


```typescript
getAt(obj: any, addr: string): unknown;
```

#### Parameters

- `obj` — An object to fetch data from.
- `addr` — An "address" in dot notation.

#### Returns

 `unknown`
::

::api-entry{name="has()" type="function"}
Checks if the given property exists on the given object.

#### Signature


```typescript
has(obj: {
    [index: string]: any;
    [index: number]: any;
}, property: string | symbol | number): boolean;
```

#### Parameters

- `obj` — An object to check.
- `property` — The property to check.

#### Returns

 `boolean`
::

::api-entry{name="init()" type="function"}
Defines an object as an initial value.

#### Signature


```typescript
init<T extends object>(obj: T): T & {
    __init?: true;
};
```

#### Parameters

- `obj` — Object to be added an initial value.

#### Returns

 `T & { __init?: true }`
::

::api-entry{name="isObject()" type="function"}
Checks if an object is a simple array or record.

#### Signature


```typescript
isObject(o: unknown): o is Record<PropertyKey, unknown> | unknown[];
```

#### Parameters

- `o` — Value to be checked.

#### Returns

 `boolean`
::

::api-entry{name="isPojo()" type="function"}
Attempts to determine if an object is a POJO (Plain Old JavaScript Object). Mostly lifted from is-plain-object: https://github.com/jonschlinkert/is-plain-object Copyright (c) 2014-2017, Jon Schlinkert.

#### Signature


```typescript
isPojo(o: any): o is Record<string, any>;
```

#### Parameters

- `o` — The value to be checked.

#### Returns

 `boolean`
::

::api-entry{name="isQuotedString()" type="function"}
Determine if the given string is fully quoted.

#### Signature


```typescript
isQuotedString(str: string): boolean;
```

#### Parameters

- `str` — The string to check.

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
::

::api-entry{name="isRecord()" type="function"}
Determines if an object is an object.

#### Signature


```typescript
isRecord(o: unknown): o is Record<PropertyKey, unknown>;
```

#### Parameters

- `o` — The value to be checked.

#### Returns

 `boolean`
::

::api-entry{name="kebab()" type="function"}
This converts camel-case to kebab case. It ONLY converts from camel to kebab.

#### Signature


```typescript
kebab(str: string): string;
```

#### Parameters

- `str` — String to be kebabed.

#### Returns

 `string`
::

::api-entry{name="nodeProps()" type="function"}
Filters out values from an object that should not be considered "props" of a core node, like "value" and "name".

#### Signature


```typescript
nodeProps(...sets: Array<Record<string, any>>): Record<string, any>;
```

#### Parameters

- `sets` — The arrays to get values filtered out of.

#### Returns

 `Record<string, any>`
::

::api-entry{name="nodeType()" type="function"}
Given a FormKit input type, returns the correct lowerCased() type.

#### Signature


```typescript
nodeType(type: string): 'list' | 'group' | 'input';
```

#### Parameters

- `type` — String to return to check for correct type

#### Returns

 `'list' | 'group' | 'input'`
::

::api-entry{name="oncePerTick()" type="function"}
Given a function only 1 call will be made per call stack. All others will be discarded.

#### Signature


```typescript
oncePerTick<T extends CallableFunction>(fn: T): T;
```

#### Parameters

- `fn` — The function to be called once per tick.
::

::api-entry{name="only()" type="function"}
Extracts a set of keys from a given object. Importantly, this will extract values even if they are not set on the original object — they will just have an undefined value.

#### Signature


```typescript
only(obj: Record<string, any>, include: Array<string | RegExp>): Record<string, any>;
```

#### Parameters

- `obj` — The object to get values from.
- `include` — The array of items to get.

#### Returns

 `Record<string, any>`
::

::api-entry{name="parseArgs()" type="function"}
Parse a string for comma-separated arguments.

#### Signature


```typescript
parseArgs(str: string): string[];
```

#### Parameters

- `str` — String to parse arguments from.

#### Returns

 `string[]`
::

::api-entry{name="regexForFormat()" type="function"}
Given a string date format, return a regex to match against.

#### Signature


```typescript
regexForFormat(format: string): RegExp;
```

#### Parameters

- `format` — String to be transformed to RegExp.

#### Returns

 `RegExp`

#### Examples


```javascript
regexForFormat('MM') // returns '(0[1-9]|1[012])'
```
::

::api-entry{name="rmEscapes()" type="function"}
Remove extra escape characters.

#### Signature


```typescript
rmEscapes(str: string): string;
```

#### Parameters

- `str` — String to remove extra escape characters from.

#### Returns

 `string`
::

::api-entry{name="setify()" type="function"}
Creates a new set of the specified type and uses the values from an Array or an existing Set.

#### Signature


```typescript
setify<T>(items: Set<T> | T[] | null | undefined): Set<T>;
```

#### Parameters

- `items` — An array or a Set.

#### Returns

 `Set<T>`

#### Examples


```javascript
import { setify } from '@formkit/utils'

const tk = setify(['a', 'b'])
// Set(2) {'a', 'b'}
```
::

::api-entry{name="shallowClone()" type="function"}
Shallowly clones the given object.

#### Signature


```typescript
shallowClone<T>(obj: T, explicit?: string[]): T;
```

#### Parameters

- `obj` — Object to be shallowly cloned.
- `explicit` *optional* — The array of keys to be explicity cloned.

#### Returns

 `T`
::

::api-entry{name="slugify()" type="function"}
Turn any string into a URL/DOM-safe string.

#### Signature


```typescript
slugify(str: string): string;
```

#### Parameters

- `str` — String to be slugified to a URL-safe string.

#### Returns

 `string`
::

::api-entry{name="spread()" type="function"}
Spreads an object or an array, otherwise returns the same value.

#### Signature


```typescript
spread<T>(obj: T, explicit?: string[]): T;
```

#### Parameters

- `obj` — The object to be spread.
- `explicit` *optional* — The array of items to be explicity spread.

#### Returns

 `T`
::

::api-entry{name="token()" type="function"}
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
::

::api-entry{name="undefine()" type="function"}
Determines if the value of a prop that is either present (true) or not present (undefined). For example, the prop disabled should disable by just existing, but what if it is set to the string "false" — then it should not be disabled.

#### Signature


```typescript
undefine(value: unknown): true | undefined;
```

#### Parameters

- `value` — Value to check for undefined.

#### Returns

 `true | undefined`
::

::api-entry{name="whenAvailable()" type="function"}
Uses a global mutation observer to wait for a given element to appear in the DOM.

#### Signature


```typescript
whenAvailable(childId: string, callback: (el: Element) => void, root?: Document | ShadowRoot): void;
```

#### Parameters

- `childId` — The id of the child node.
- `callback` — The callback to call when the child node is found.
- `root` *optional*
::

## TypeScript

::api-entry{name="FormKitDateTokens" type="type"}
The date token strings that can be used for date formatting.


```typescript
export type FormKitDateTokens = 'MM' | 'M' | 'DD' | 'D' | 'YYYY' | 'YY';
```
::
