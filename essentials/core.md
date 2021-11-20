# Core

At the heart of the FormKit framework is `@formkit/core`. This zero-dependency package is responsible for nearly all of FormKit's low-level critical functions, a few of them are:

- Configuration
- Value input/output
- Event bubbling
- Plugin management
- Tree state tracking
- Message management
- Lifecycle hooks

## Architecture

The functionality of FormKit core is not exposed to your application via a centralized instance but rather a distributed set of "nodes" with each input owning its own instance.

HTML DOM structure is simply a [general tree](https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/GenTreeIntro.html) and FormKit core nodes mirror this structure. For example, a simple login form could be drawn as the following graph:

<simple-tree></simple-tree>

In this diagram, a `form` node is a parent to three child nodes — `email`, `password` and `submit`. Each input in the graph "owns" a FormKit core node complete with it's own options, configuration, props, events, plugins, lifecycle hooks etc. This architecture ensures that FormKit’s primary features are decoupled from the rendering framework (Vue) — a key to it’s blazing fast performance.

Additionally, these decentralized nodes allow for tremendous flexibility. For example — one form could use different plugins than the rest of your application, a group input could modify the configuration it’s sub-inputs, and validation rules can be written to use props from another input.

## Node

The heart of `@formkit/core` is the node. Every `<FormKit>` component owns a single node, and each node must be one of three types:

- [Input](#inputs)
- [List](#lists)
- [Group](#groups)

<callout type="tip" label="Input vs node types">
Core nodes are always one of three types (input, list group). These are not the same as input types — of which there can be unlimited variation. Strictly speaking all inputs have 2 types: their node type (like <code>input</code>), and their input type (like <code>checkbox</code>).
</callout>

### Input

Most of FormKit’s native inputs have a node type of `input` — they operate on a single value. The value itself can be of any type, objects, arrays, strings, numbers — anything is acceptable — but nodes of type `input` are always leafs. They cannot have children.

### List

A list is a node that stores an array value. Children of a list node produce a value in the list’s array value. The names of immediate children are ignored — instead each is assigned an index in the list’s array.

```js
import { createNode } from '@formkit/core'

const list = createNode({
  type: 'list',
  children: [
    createNode({ value: 'paprika@example.com' }),
    createNode({ value: 'bill@example.com' }),
    createNode({ value: 'jenny@example.com' }),
  ],
})

console.log(list.value)
// ['paprika@example.com', 'bill@example.com', 'jenny@example.com']
```

### Group

A group is a node that stores an object value.
