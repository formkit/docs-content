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

The functionality of FormKit core is not exposed to your application via a centralized instance but rather a distributed set of "nodes" where each node represents a single input.

This mirrors HTML — in fact DOM structure is actually a [general tree](https://opendsa-server.cs.vt.edu/ODSA/Books/Everything/html/GenTreeIntro.html) and FormKit core nodes reflect this structure. For example, a simple login form could be drawn as the following tree graph:

<simple-tree></simple-tree>

In this diagram, a `form` node is a parent to three child nodes — `email`, `password` and `submit`. Each input component in the graph "owns" a FormKit core node, and each node contains it's own options, configuration, props, events, plugins, lifecycle hooks etc. This architecture ensures that FormKit’s primary features are decoupled from the rendering framework (Vue) — a key to reducing side effects and maintaining blazing fast performance.

Additionally, this decentralized architecture allows for tremendous flexibility. For example — one form could use different plugins than the rest of your application, a group input could modify the configuration it’s sub-inputs, and validation rules can even be written to use props from another input.

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

```js
import { createNode } from '@formkit/core'

const input = createNode({
  type: 'input', // defaults to 'input' if not specified
  value: 'hello node world',
})

console.log(input.value)
// 'hello node world'
```

### List

A list is a node that produces an array value. Children of a list node produce a value in the list’s array value. The names of immediate children are ignored — instead each is assigned an index in the list’s array.

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

A group is a node that produces an object value. Children of a group node use their `name` to produce a property of the same name in the groups’s value object — `<FormKit type="form">` is an instance of a group.

```js
import { createNode } from '@formkit/core'

const group = createNode({
  type: 'group',
  children: [
    createNode({ name: 'meat', value: 'turkey' }),
    createNode({ name: 'greens', value: 'salad' }),
    createNode({ name: 'sweets', value: 'pie' }),
  ],
})

console.log(group.value)
// { meat: 'turkey', greens: 'salad', sweets: 'pie' }
```

### Options

In addition to specifying the `type` of node when calling `createNode()` you can pass pass any of the following options:

| Options  | Default      | Description                                                                    |
| -------- | ------------ | ------------------------------------------------------------------------------ |
| children | `[]`         | Child `FormKitNode` instances                                                  |
| config   | `{}`         | Configuration options, these become the defaults of the `props` object.        |
| name     | `{type}_{n}` | The name of the node/input                                                     |
| parent   | null         | The parent `FormKitNode` instance                                              |
| plugins  | `[]`         | An array of plugin functions                                                   |
| props    | `{}`         | An object of key/value pairs that represent the current node instance details. |
| type     | `input`      | The type of `FormKitNode` to create (`list`, `group`, `input`).                |
| value    | `undefined`  | The initial value of the input                                                 |

### Config & Props

FormKit uses an inheritance based configuration system — any values declared in the `config` option are automatically passed to children of that node, but not passed to siblings or parents. Each node can override it’s inherited values by providing it’s own config — these values will also be inherited by any deeper children. For example:

```js
const parent = createNode({
  type: 'group',
  config: {
    color: 'yellow',
  },
  children: [
    createNode({
      type: 'list',
      config: { color: 'pink' },
      children: [createNode(), createNode()],
    }),
    createNode(),
  ],
})
```

The above code will result in each node having the following configuration:

<config-tree></config-tree>

<callout type="tip" label="Use props to read config">
It is best practice to read configuration values from <code>node.props</code> rather than <code>node.config</code>. The next section details this feature.
</callout>

### Props

The `node.props` and `node.config` objects are closely related. `node.config` is best thought of as the initial values for `node.props` — `props` is an arbitrarily shaped object that contains details about the current _instance_ of the node.

The best practice is to always read configuration and prop data from `node.props` even if the original value is defined using `node.config`. Explicitly defined props take precedence over configuration options.

```js
const child = createNode({
  props: {
    flavor: 'cherry',
  },
})
const parent = createNode({
  type: 'group',
  config: {
    size: 'large',
    flavor: 'grape',
  },
  children: [child],
})
console.log(child.props.size)
// outputs: 'large'
console.log(child.props.flavor)
// outputs: 'cherry'
```

<callout type="tip" label="FormKit component props">
When using the <code>&lt;FormKit&gt;</code> component any props defined for the input <code>type</code> are automatically set as <code>node.props</code> properties. For example: <code>&lt;FormKit label="Email" /&gt;</code> would result in <code>node.props.label</code> being <code>Email</code>.
</callout>

### Setting values

You can set the initial value of a node by providing the `value` option on `createNode()` — but FormKit is all about interactivity, so how do we update the value of an already defined node? By using `node.input(value)`.

```js
import { createNode } from '@formkit/core'

const username = createNode()
username.input('jordan-goat98')
console.log(username.value)
// undefined  👀 wait — what!?
```

In the above example `username.value` is still undefined immediately after it’s set because `node.input()` is asynchronous. If you need to read the resulting value after calling `node.input()` you can await the returned promise.

```js
import { createNode } from '@formkit/core'

const username = createNode()
username.input('jordan-goat98').then(() => {
  console.log(username.value)
  // 'jordan-goat98'
})
```

Because `node.input()` is asynchronous the rest of our form does not need to recompute it’s dependencies on every keystroke. It also allows an opportunity to perform modifications to the unsettled value before it is "committed" to the rest of the form. However — for internal node use only — a `_value` property containing the unsettled value of the input is also available.

<callout type="danger" label="Don’t assign values">
You cannot <em>directly</em> assign the value of an input <code>node.value = 'foo'</code> — instead you should always use <code>node.input(value)</code>
</callout>

### Value settlement

Now that we understand `node.input()` is asynchronous lets explore how FormKit solves the "settled tree" problem. Imagine a user quickly types in their email address and hits "enter" very quickly — thus submitting the form. Since `node.input()` is asynchronous incomplete data would likely be submitted. We need a mechanism to know when the whole form has "settled".

To solve this FormKit’s nodes automatically track tree, subtree, and node "disturbance". This means the form (usually the root node) always knows the settlement state of all the inputs it contains.

The following graph illustrates this "disturbance counting". Click on any input node (blue) to simulate calling `node.input()` and notice how the whole form is always aware of how many nodes are "disturbed" at any given time. When the root node has a disturbed count of `0` the form is settled and safe to submit.

<disturbance-tree></disturbance-tree>

To ensure a given tree (form), subtree (group), or node (input) is "settled" you can await the `node.settled` property:

```js
import { createNode } from '@formkit/node'

const form = createNode({
  type: 'group',
  children: [
    createNode()
    createNode()
    createNode()
  ],
})
// ...
// user interaction:
async function someEvent () {
  await form.settled
  // we now know the form is fully "settled"
  // and that form.value is accurate.
}
```

<callout type="tip" label="The form type">
The <code>&lt;FormKit type="form"&gt;</code> input already incorporates this await behavior. It will not call your <code>@submit</code> handler until your form is completely settled. However when building advanced inputs it can be useful to understand these underlying principles.
</callout>

## Hooks

Hooks are middleware dispatchers that are triggered during pre-defined lifecycle operations. These hooks allow external code to extend the internal functionality of `@formkit/core`. The following table details all available hooks:

| Hook    | Value                                                                                                   | Description                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| classes | <pre><code class="block">{<br> property: string,<br> classes: Record<string, boolean><br>}</code></pre> | Dispatched after all class operations have been run, before final conversion to a string.                        |
| commit  | `any`                                                                                                   | Dispatched when setting the value of a node _after_ the `input` and debounce of `node.input()` is called.        |
| error   | `string`                                                                                                | Dispatched when processing a thrown error — errors are generally inputs, and the final output should be a string |
| init    | `FormKitNode`                                                                                           | Dispatched after the node is initially created but before it is returned in `createNode()`                       |
| input   | `any`                                                                                                   | Dispatched synchronously on every input event (every keystroke) before `commit`.                                 |
| prop    | <pre><code class="block">{<br> prop: string,<br> value: any<br>}</code></pre>                           | Dispatched when any prop is being assigned.                                                                      |
| text    | [`FormKitTextFragment`](https://github.com/formkit/formkit/search?q=FormKitTextFragment)                | Dispatched when a FormKit generated string needs to be displayed — allowing i18n or other plugins to intercept   |

### Hook Middleware

To make use of these hooks, you must register hook middleware. Middleware is simply a function, that accepts 2 arguments — the value of the hook and `next` — a function that calls the next the middleware stack and returns the value.

To register a middleware pass it to the `node.hook` you want to use:

```js
import { createNode } from '@formkit/core'

const node = createNode()

// This would transform all labels to "Different label!"
node.hook.prop((payload, next) => {
  if ((payload.prop = 'label')) {
    payload.value = 'Different label!'
  }
  return next(payload)
})
```

<callout type="tip" label="Use with plugins">
Hooks can registered anywhere in your application, but the most common place hook are used is in a plugin.
</callout>

## Plugins

Plugins are the primary mechanism for extending the functionality of FormKit. The concept is simple — a plugin is just a function that accepts a node. These functions are then automatically called when a node is created, or when the plugin is added to the node. Plugins work similar configuration options — they are automatically inherited by children.

```js
import { createNode } from '@formkit/core'

// A plugin to change a prop value.
const myPlugin = (node) => {
  if (node.type === 'group') {
    node.props.color = 'yellow'
  } else {
    node.props.color = 'orange'
  }
}

const node = createNode([
  plugins: [myPlugin],
  children: [createNode()]
])
```

In the example above he plugin is only defined on the parent, but the child also inherits the plugin — the function `myPlugin` will be called twice, once for each node in the graph (which only has two in this example):

<plugin-tree></plugin-tree>
