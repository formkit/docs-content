---
title: formkit/core
---

# @formkit/core

The official FormKit core library. This package is responsible for most of FormKit’s internal functionality. You can read documentation specifically on how it works at formkit.com.

You can add this package by using `npm install @formkit/core` or `yarn add @formkit/core`.

## bfs()

Perform a breadth-first-search on a node subtree and locate the first instance of a match.

#### Signature

```typescript
export declare function bfs(tree: FormKitNode, searchValue: string | number, searchGoal?: keyof FormKitNode | FormKitSearchFunction): FormKitNode | undefined;
```

#### Parameters

* `tree` - [FormKitNode](@formkit/core!FormKitNode:type)

* `searchValue` - string | number

* `searchGoal` *optional* - keyof [FormKitNode](@formkit/core!FormKitNode:type) | [FormKitSearchFunction](@formkit/core!FormKitSearchFunction:type)

#### Returns

Returns a [FormKitNode]() or `undefined` if not found.

## createNode()

Creates a new instance of a FormKit Node. Nodes are the atomic unit of a FormKit graph:

#### Signature

```typescript
export declare function createNode(options?: FormKitOptions): FormKitNode;
```

#### Parameters

* `options` *optional* - [FormKitOptions](@formkit/core!FormKitOptions:type)

#### Returns

Returns a [FormKitNode]().

#### Examples

```javascript
import { createNode } from '@formkit/core'

const input = createNode({
  type: 'input', // defaults to 'input' if not specified
  value: 'hello node world',
})

console.log(input.value)
// 'hello node world'
```

## isList()

A simple type guard to determine if the context being evaluated is a list type.

#### Signature

```typescript
export declare function isList(arg: FormKitContextShape): arg is FormKitListContext;
```

#### Parameters

* `arg` - [FormKitContextShape](@formkit/core!FormKitContextShape:interface)

#### Returns

Returns a `boolean`.

## isNode()

Determine if a given object is a node:

#### Signature

```typescript
export declare function isNode(node: any): node is FormKitNode;
```

#### Parameters

* `node` - any

#### Returns

Returns a `boolean`.

#### Examples

```javascript
import { isNode, createNode } from '@formkit/core'

const input = createNode({
  type: 'input', // defaults to 'input' if not specified
  value: 'hello node world',
})

const obj = {};

isNode(obj)
// false

isNode(input)
// true
```