---
title: formkit/utils
---

# @formkit/utils

Commonly shared utility functions between official FormKit packages.

You can add this package by using `npm install @formkit/utils` or `yarn add @formkit/utils`.

## assignDeep()

Performs a recursive Object.assign like operation.

#### Signature

```typescript
export declare function assignDeep<A extends Record<PropertyKey, any>, B extends Record<PropertyKey, any>>(a: A, b: B): A & B;
```

#### Parameters

* `a` - A

* `b` - B

#### Returns

A & B

## camel()

This converts kebab-case to camelCase. It ONLY converts from kebab for efficiency stake.

#### Signature

```typescript
export declare function camel(str: string): string;
```

#### Parameters

* `str` - string

#### Returns

string

## clone()

Perform a recursive clone on a given object. This only intended to be used for simple objects like arrays and pojos.

#### Signature

```typescript
export declare function clone<T extends Record<string, unknown> | unknown[] | null>(obj: T, explicit?: string[]): T;
```

#### Parameters

* `obj` - T

* `explicit` *optional* - string[]

#### Returns

T

## cloneAny()

Clones anything. If the item is scalar, no worries, it passes it back. if it is an object, it performs a (fast/loose) clone operation.

#### Signature

```typescript
export declare function cloneAny<T>(obj: T): T;
```

#### Parameters

* `obj` - T

#### Returns

T

## dedupe()

Given 2 arrays, return them as a combined array with no duplicates.

#### Signature

```typescript
export declare function dedupe<T extends any[] | Set<any>, X extends any[] | Set<any>>(arr1: T, arr2?: X): any[];
```

#### Parameters

* `arr1` - T

* `arr2` *optional* - X

#### Returns

any[]

## empty()

Determines if a value is empty or not.

#### Signature

```typescript
export declare function empty(value: any): boolean;
```

#### Parameters

* `value` - any

#### Returns

boolean

## eq()

Compare two values for equality optionally at depth.

#### Signature

```typescript
export declare function eq(valA: any, // eslint-disable-line
valB: any, // eslint-disable-line
deep?: boolean, explicit?: string[]): boolean;
```

#### Parameters

* `valA` - any

* `valB` - any

* `deep` *optional* - boolean

* `explicit` *optional* - string[]

#### Returns

boolean

## escapeExp()

Escape a string for use in regular expressions.

#### Signature

```typescript
export declare function escapeExp(string: string): string;
```

#### Parameters

* `string` - string

#### Returns

string

## except()

Return a new (shallow) object with all properties from a given object that are present in the array.

#### Signature

```typescript
export declare function except(obj: Record<string, any>, toRemove: Array<string | RegExp>): Record<string, any>;
```

#### Parameters

* `obj` - [Record](!Record:type)<string, any>

* `toRemove` - [Array](!Array:interface)<string | [RegExp](!RegExp:interface)>

#### Returns

Record<string, any>

## extend()

Recursively merge data from additional into original returning a new object.

#### Signature

```typescript
export declare function extend(original: Record<string, any>, additional: Record<string, any> | string | null, extendArrays?: boolean, ignoreUndefined?: boolean): Record<string, any> | string | null;
```

#### Parameters

* `original` - [Record](!Record:type)<string, any>

* `additional` - [Record](!Record:type)<string, any> | string | null

* `extendArrays` *optional* - boolean

* `ignoreUndefined` *optional* - boolean

#### Returns

Record<string, any> | string | null

## getAt()

Get a specific value via dot notation.

#### Signature

```typescript
export declare function getAt(obj: any, addr: string): unknown;
```

#### Parameters

* `obj` - any

An object to fetch data from

* `addr` - string

An "address" in dot notation

## has()

Checks if the given property exists on the given object.

#### Signature

```typescript
export declare function has(obj: {
    [index: string]: any;
    [index: number]: any;
}, property: string | symbol | number): boolean;
```

#### Parameters

* `obj` - {     [index: string]: any;     [index: number]: any; }

* `property` - string | symbol | number

#### Returns

boolean

## init()

Defines an object as an initial value.

#### Signature

```typescript
export declare function init<T extends object>(obj: T): T & {
    __init?: true;
};
```

#### Parameters

* `obj` - T

#### Returns

T & { __init?: true }

## isObject()

Checks if an object is a simple array or record.

#### Signature

```typescript
export declare function isObject(o: unknown): o is Record<PropertyKey, unknown> | unknown[];
```

#### Parameters

* `o` - unknown

#### Returns

boolean

## isPojo()

Attempts to determine if an object is a plain object. Mostly lifted from is-plain-object: https://github.com/jonschlinkert/is-plain-object Copyright (c) 2014-2017, Jon Schlinkert.

#### Signature

```typescript
export declare function isPojo(o: any): o is Record<string, any>;
```

#### Parameters

* `o` - any

#### Returns

boolean

## isQuotedString()

Determine if the given string is fully quoted.

#### Signature

```typescript
export declare function isQuotedString(str: string): boolean;
```

#### Parameters

* `str` - string

#### Returns

boolean

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

## isRecord()

Determines if an object is an object or not.

#### Signature

```typescript
export declare function isRecord(o: unknown): o is Record<PropertyKey, unknown>;
```

#### Parameters

* `o` - unknown

#### Returns

boolean

## kebab()

This converts camel-case to kebab case. It ONLY converts from camel to kebab.

#### Signature

```typescript
export declare function kebab(str: string): string;
```

#### Parameters

* `str` - string

#### Returns

string

## nodeProps()

Filters out values from an object that should not be considered "props" of a core node, like "value" and "name".

#### Signature

```typescript
export declare function nodeProps(...sets: Array<Record<string, any>>): Record<string, any>;
```

#### Parameters

* `sets` - [Array](!Array:interface)<[Record](!Record:type)<string, any>>

#### Returns

Record<string, any>

## nodeType()

Given a FormKit input type returns the correct type

#### Signature

```typescript
export declare function nodeType(type: string): 'list' | 'group' | 'input';
```

#### Parameters

* `type` - string

#### Returns

'list' | 'group' | 'input'

## only()

Extracts a set of keys from a given object. Importantly, this will extract values even if they are not set on the original object they will just have an undefined value.

#### Signature

```typescript
export declare function only(obj: Record<string, any>, include: Array<string | RegExp>): Record<string, any>;
```

#### Parameters

* `obj` - [Record](!Record:type)<string, any>

* `include` - [Array](!Array:interface)<string | [RegExp](!RegExp:interface)>

#### Returns

Record<string, any>

## parseArgs()

Parse a string for comma-separated arguments

#### Signature

```typescript
export declare function parseArgs(str: string): string[];
```

#### Parameters

* `str` - string

#### Returns

string[]

## regexForFormat()

Given a string format (date) return a regex to match against.

#### Signature

```typescript
export declare function regexForFormat(format: string): RegExp;
```

#### Parameters

* `format` - string

#### Returns

## rmEscapes()

Remove extra escape characters.

#### Signature

```typescript
export declare function rmEscapes(str: string): string;
```

#### Parameters

* `str` - string

#### Returns

string

## setify()

Creates a new set of the specified type and uses the values from an Array or an existing Set.

#### Signature

```typescript
export declare function setify<T>(items: Set<T> | T[] | null | undefined): Set<T>;
```

#### Parameters

* `items` - [Set](!Set:interface)<T> | T[] | null | undefined

#### Returns

Set

## shallowClone()

Very shallowly clones the given object.

#### Signature

```typescript
export declare function shallowClone<T>(obj: T, explicit?: string[]): T;
```

#### Parameters

* `obj` - T

* `explicit` *optional* - string[]

#### Returns

T

## slugify()

Turn any string into a URL/DOM safe string.

#### Signature

```typescript
export declare function slugify(str: string): string;
```

#### Parameters

* `str` - string

#### Returns

string

## spread()

Spreads an object or an array, otherwise returns the same value.

#### Signature

```typescript
export declare function spread<T>(obj: T, explicit?: string[]): T;
```

#### Parameters

* `obj` - T

* `explicit` *optional* - string[]

#### Returns

T

## token()

Generates a random string.

#### Signature

```typescript
export declare function token(): string;
```

#### Returns

string

#### Examples

```javascript
import { token } from '@formkit/utils'

const tk = token()
// 'jkbyqnphqm'
```

## undefine()

Determines if the value of a prop that is either present (true) or not present (undefined). For example the prop disabled should disable by just existing, but what if it is set to the string "false" — then it should not be disabled.

#### Signature

```typescript
export declare function undefine(value: unknown): true | undefined;
```

#### Parameters

* `value` - unknown

#### Returns

true | undefined