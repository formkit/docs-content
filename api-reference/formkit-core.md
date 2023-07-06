---
title: formkit/core
---

# @formkit/core

<page-toc></page-toc>

## Introduction

The official FormKit core library. This package is responsible for most of FormKit’s internal functionality. You can read documentation specifically on how it works at formkit.com.

You can add this package by using `npm install @formkit/core` or `yarn add @formkit/core`.

## FormKitNode

FormKit's Node object produced by createNode(). Every `<FormKit />` input has 1 FormKitNode ("core node") associated with it. All inputs, forms, and groups are instances of nodes. Read more about core nodes in the [architecture
documentation.](https://formkit.com/essentials/architecture#node)

### add()

Add a child to a node. The node must be a group or list.

#### Signature

<client-only>

```typescript
add: (node: FormKitNode, index?: number) => FormKitNode
```

</client-only>

#### Parameters

- node — A [FormKitNode](#formkitnode). 
- index *optional* — A index to where it will added to.

#### Returns

The added [FormKitNode](#formkitnode).

### address

The address of the current node from the root of the tree.

#### Signature

<client-only>

```typescript
address: FormKitAddress
```

</client-only>

#### Returns

A [FormKitAddress](#formkitaddress).

### addProps()

Adds props to the given node by removing them from node.props.attrs and moving them to the top-level node.props object.

#### Signature

<client-only>

```typescript
addProps: (props: string[]) => FormKitNode
```

</client-only>

#### Parameters

- `props` — An array of strings to be added as keys for props.

#### Returns

The [FormKitNode](#formkitnode).

### at()

Gets a node at another address. Addresses are dot-syntax paths (or arrays) of node names. For example: `form.users.0.first_name`. There are a few "special" traversal tokens as well:

- `$root` — Selects the root node. 
- `$parent` — Selects the parent node. 
- `$self` — Selects the current node.

#### Signature

<client-only>

```typescript
at: (address: FormKitAddress | string) => FormKitNode | undefined
```

</client-only>

#### Parameters

- `address` — An valid string or [FormKitAddress](#formkitaddress).

#### Returns

The found [FormKitNode](#formkitnode) or `undefined`.

### children

An array of child nodes (groups and lists).

#### Signature

<client-only>

```typescript
children: Array<FormKitNode>
```

</client-only>

#### Returns

An array of [FormKitNode](#formkitnode).

### clearErrors()

Clears the errors of the node, and optionally all the children.

#### Signature

<client-only>

```typescript
clearErrors: (clearChildren?: boolean, sourceKey?: string) => FormKitNode
```

</client-only>

#### Parameters

- `clearChildren` *optional* — If it should clear the children. 
- `sourceKey` *optional* — A source key to use for reset.

#### Returns

The [FormKitNode](#formkitnode).

### config

An object of [FormKitConfig](#formkitconfig) that is shared tree
-wide with various configuration options that should be applied to the entire tree.

#### Signature

<client-only>

```typescript
config: FormKitConfig
```

</client-only>

#### Returns

A [FormKitConfig](#formkitconfig).

### define()

Defines the current input's library type definition including node type, schema, and props.

#### Signature

<client-only>

```typescript
define: (definition: FormKitTypeDefinition) => void
```

</client-only>

#### Parameters

- `definition` — A [FormKitTypeDefinition](#formkittypedefinition).

### destroy()

Removes the node from the global registry, its parent, and emits the 'destroying' event.

#### Signature

<client-only>

```typescript
destroy: () => void
```

</client-only>

### each()

Perform given callback on each of the given node's children.

#### Signature

<client-only>

```typescript
each: (callback: FormKitChildCallback) => void
```

</client-only>

#### Parameters

- `callback` — A [FormKitChildCallback](#formkitchildcallback) to be called for each child.

### emit()

Emit an event from the node so it can be listened by [on](#formkitnode).

#### Signature

<client-only>

```typescript
emit: (event: string, payload?: any, bubble?: boolean) => FormKitNode
```

</client-only>

#### Parameters

- `event` — The event name to be emitted. 
- `payload` *optional* — A value to be passed together with the event. 
- `bubble` *optional* — If the event should bubble to the parent.

#### Returns

The [FormKitNode](#formkitnode).

### extend()

Extend a [FormKitNode](#formkitnode) by adding arbitrary properties that are accessible via `node.{property}()`.

#### Signature

<client-only>

```typescript
extend: (property: string, trap: FormKitTrap) => FormKitNode
```

</client-only>

#### Parameters

- `property` — The property to add the core node (`node.{property}`). 
- `trap` — An object with a get and set property.

#### Returns

The [FormKitNode](#formkitnode).

### find()

Within a given tree, find a node matching a given selector. Selectors can be simple strings or a function.

#### Signature

<client-only>

```typescript
find: (
 selector: string,
 searcher?: keyof FormKitNode | FormKitSearchFunction
) => FormKitNode | undefined
```

</client-only>

#### Parameters

- `selector` — A selector string. 
- `searcher` *optional* — A keyof [FormKitNode](#formkitnode) or [FormKitSearchFunction](#formkitsearchfunction).

#### Returns

The found [FormKitNode](#formkitnode) or `undefined`.

### hook

Set of hooks.

#### Signature

<client-only>

```typescript
hook: FormKitHooks
```

</client-only>

#### Returns

The [FormKitHooks](#formkithooks).

### index

The index of a node compared to its siblings. This is only applicable in cases where a node is a child of a list.

#### Signature

<client-only>

```typescript
index: number
```

</client-only>

#### Returns

A `number`.

### input()

The function used to set the value of a node. All changes to a node's value should use this function as it ensures the tree's state is always fully tracked.

#### Signature

<client-only>

```typescript
input: (value: unknown, async?: boolean) => Promise<unknown>
```

</client-only>

#### Parameters

- `value` — Any value to used for the node. 
- `async` *optional* — If the input should happen asynchronously.

#### Returns

A `Promise<unknown>`.

### isCreated

Begins as false, set to true when the node is finished being created.

#### Signature

<client-only>

```typescript
isCreated: boolean
```

</client-only>

#### Returns

A `boolean`.

### isSettled

Boolean reflecting the settlement state of the node and its subtree.

#### Signature

<client-only>

```typescript
isSettled: boolean
```

</client-only>

#### Returns

A `boolean`.

### ledger

A counting ledger for arbitrary message counters.

#### Signature

<client-only>

```typescript
ledger: FormKitLedger
```

</client-only>

#### Returns

A [FormKitLedger](#formkitledger).

### name

The name of the input in the node tree. When a node is a child of a list, this automatically becomes its index.

#### Signature

<client-only>

```typescript
name: string
```

</client-only>

#### Returns

A `string`.

### off()

Removes an event listener by its token. Receipts can be shared among many event listeners by explicitly declaring the "receipt" property of the listener function.

#### Signature

<client-only>

```typescript
off: (receipt: string) => FormKitNode
```

</client-only>

#### Parameters

- `receipt` — A receipt generated by the `on` function.

#### Returns

A receipt `string`.

### on()

Adds an event listener for a given event, and returns a "receipt" which is a random string token. This token should be used to remove the listener in the future. Alternatively you can assign a "receipt" property to the listener function and that receipt will be used instead. This allows multiple listeners to all be de-registered with a single off() call if they share the same receipt.

#### Signature

<client-only>

```typescript
on: (eventName: string, listener: FormKitEventListener) => string
```

</client-only>

#### Parameters

- `eventName` — The event name to listen to. 
- `listener` — A [FormKitEventListener](#formkiteventlistener) to run when the event happens.

#### Returns

A receipt `string`.

### parent

The parent of a node.

#### Signature

<client-only>

```typescript
parent: FormKitNode | null
```

</client-only>

#### Returns

If found a [FormKitNode](#formkitnode) or `null`.

### props

An proxied object of props. These are typically provided by the adapter of choice.

#### Signature

<client-only>

```typescript
props: Partial<FormKitProps>
```

</client-only>

#### Returns

An optional list of [FormKitProps](#formkitprops).

### remove()

Removes a child from the node.

#### Signature

<client-only>

```typescript
remove: (node: FormKitNode) => FormKitNode
```

</client-only>

#### Parameters

- `node` — A [FormKitNode](#formkitnode) to be removed.

#### Returns

The [FormKitNode](#formkitnode).

### reset()

Resets the node’s value back to its original value.

#### Signature

<client-only>

```typescript
reset: () => FormKitNode
```

</client-only>

#### Returns

The [FormKitNode](#formkitnode).

### root

Retrieves the root node of a tree. This is accomplished via tree-traversal on-request, and as such should not be used in frequently called functions.

#### Signature

<client-only>

```typescript
root: FormKitNode
```

</client-only>

#### Returns

The [FormKitNode](#formkitnode).

### setErrors()

Sets errors on the input, and optionally to child inputs.

#### Signature

<client-only>

```typescript
setErrors: (localErrors: ErrorMessages, childErrors?: ErrorMessages) => void
```

</client-only>

#### Parameters

- `localErrors` — A [ErrorMessages](#errormessages) to be used. 
- `childErrors` *optional* — A [ErrorMessages](#errormessages) to be used for children.

### settled

A promise that resolves when a node and its entire subtree is settled. In other words — all the inputs are done committing their values.

#### Signature

<client-only>

```typescript
settled: Promise<unknown>
```

</client-only>

#### Returns

A `Promise<unknown>`.

### store

The internal node store.

#### Signature

<client-only>

```typescript
store: FormKitStore
```

</client-only>

#### Returns

A [FormKitStore](#formkitstore).

### submit()

Triggers a submit event on the nearest form.

#### Signature

<client-only>

```typescript
submit: () => void
```

</client-only>

### t()

A text or translation function that exposes a given string to the "text" hook. All text shown to users should be passed through this function before being displayed — especially for core and plugin authors.

#### Signature

<client-only>

```typescript
t: (key: string | FormKitTextFragment) => string
```

</client-only>

#### Parameters

- `key` — A key or a [FormKitTextFragment](#formkittextfragment) to find the translation for.

#### Returns

The translated `string`.

### type

The type of node, should only be 'input', 'list', or 'group'.

#### Signature

<client-only>

```typescript
type: FormKitNodeType
```

</client-only>

#### Returns

A [FormKitNodeType](#formkitnodetype).

### use()

Registers a new plugin on the node and its subtree.

#### Signature

<client-only>

```typescript
use: (
 plugin: FormKitPlugin | FormKitPlugin[] | Set<FormKitPlugin>,
 run?: boolean,
 library?: boolean
) => FormKitNode
```

</client-only>

#### Parameters

- `plugin` — A [FormKitPlugin](#formkitplugin) or an Array or Set of [FormKitPlugin](#formkitplugin). 
- `run` *optional* — Should the plugin be executed on creation. 
- `library` *optional* — Should the plugin's library function be executed on creation.

#### Returns

The [FormKitNode](#formkitnode).

### value

The value of the input. This should never be directly modified. Any desired mutations should be made through [input](#formkitnode).

#### Signature

<client-only>

```typescript
readonly value: unknown
```

</client-only>

### walk()

Performs a function on every node in its subtree (but not the node itself). This is an expensive operation so it should be done very rarely and only lifecycle events that are relatively rare like boot up and shut down.

#### Signature

<client-only>

```typescript
walk: (callback: FormKitChildCallback, stopOnFalse?: boolean, recurseOnFalse?: boolean) => void
```

</client-only>

#### Parameters

- `callback` — A [FormKitChildCallback](#formkitchildcallback) to be executed for each child. 
- `stopOnFalse` *optional* — If it should stop when the return is false.

## Functions

### bfs()

Perform a breadth-first search on a node subtree and locate the first instance of a match.

#### Signature

<client-only>

```typescript
bfs(tree: FormKitNode, searchValue: string | number, searchGoal?: keyof FormKitNode | FormKitSearchFunction): FormKitNode | undefined;
```

</client-only>

#### Parameters

- `tree` — A [FormKitNode](#formkitnode) to start from.
- `searchValue` — A value to be searched.
- `searchGoal` *optional* — A goal value.

#### Returns

 A [FormKitNode](#formkitnode) or `undefined`.

### clearErrors()

Clears errors on the node and optionally its children.

#### Signature

<client-only>

```typescript
clearErrors(id: string, clearChildren?: boolean): void;
```

</client-only>

#### Parameters

- `id` — The id of the node you want to clear errors for.
- `clearChildren` *optional* — Determines if the children of this node should have their errors cleared.

### compile()

Compiles a logical string like `"a != z || b == c"` into a single function. The return value is an object with a "provide" method that iterates over all requirement tokens to use as replacements.

#### Signature

<client-only>

```typescript
compile(expr: string): FormKitCompilerOutput;
```

</client-only>

#### Parameters

- `expr` — A string to compile.

#### Returns

 A [FormKitCompilerOutput](#formkitcompileroutput).

#### Examples

<client-only>

```typescript
let name = {
  value: 'jon'
}
const condition = compile("$name == 'bob'").provide((token) => {
 return () => name.value // must return a function!
})

condition() // false
```

</client-only>

### createClasses()

Function that produces a standardized object representation of CSS classes.

#### Signature

<client-only>

```typescript
createClasses(propertyKey: string, node: FormKitNode, sectionClassList?: FormKitClasses | string | Record<string, boolean>): Record<string, boolean>;
```

</client-only>

#### Parameters

- `propertyKey` — the section key.
- `node` — A [FormKitNode](#formkitnode).
- `sectionClassList` *optional* — A `string | Record<string, boolean>` or a [FormKitClasses](#formkitclasses).

#### Returns

 `Record<string, boolean>`

### createConfig()

Creates a new instance of a global configuration option. This object is essentially just a FormKitOption object, but it can be used as the root for FormKitConfig's proxy and retain event "emitting".

#### Signature

<client-only>

```typescript
createConfig(options?: Partial<FormKitConfig>): FormKitRootConfig;
```

</client-only>

#### Parameters

- `options` *optional* — An object of optional properties of [FormKitConfig](#formkitconfig).

#### Returns

 A [FormKitRootConfig](#formkitrootconfig).

### createMessage()

Creates a new FormKitMessage object.

#### Signature

<client-only>

```typescript
createMessage(conf: Partial<FormKitMessage>, node?: FormKitNode): FormKitMessageProps;
```

</client-only>

#### Parameters

- `conf` — An object of optional properties of [FormKitMessage](#formkitmessage).
- `node` *optional* — A [FormKitNode](/api-reference/formkit-core#formkitnode).

#### Returns

 A [FormKitMessageProps](#formkitmessageprops).

### createNode()

Creates a new instance of a FormKit Node. Nodes are the atomic unit of a FormKit graph.

#### Signature

<client-only>

```typescript
createNode<V = unknown>(options?: FormKitOptions): FormKitNode<V>;
```

</client-only>

#### Parameters

- `options` *optional* — An options object of [FormKitOptions](#formkitoptions) to override the defaults.

#### Returns

 A [FormKitNode](/api-reference/formkit-core#formkitnode).

#### Examples

<client-only>

```javascript
import { createNode } from '@formkit/core'

const input = createNode({
  type: 'input', // defaults to 'input' if not specified
  value: 'hello node world',
})

console.log(input.value)
// 'hello node world'
```

</client-only>

### createValue()

Creates the initial value for a node based on the options passed in and the type of the input.

#### Signature

<client-only>

```typescript
createValue(options: FormKitOptions): unknown;
```

</client-only>

#### Parameters

- `options` — A [FormKitOptions](#formkitoptions).

#### Returns

 `unknown`

### deregister()

Deregister a node from the registry.

#### Signature

<client-only>

```typescript
deregister(node: FormKitNode): void;
```

</client-only>

#### Parameters

- `node` — A [FormKitNode](#formkitnode).

### error()

Emits an error. Generally should result in an exception.

#### Signature

<client-only>

```typescript
error(code: number, data?: any): never;
```

</client-only>

#### Parameters

- `code` — The integer error code.
- `data` *optional* — Usually an object of information to include.

### generateClassList()

Combines multiple class lists into a single list.

#### Signature

<client-only>

```typescript
generateClassList(node: FormKitNode, property: string, ...args: Record<string, boolean>[]): string | null;
```

</client-only>

#### Parameters

- `node` — A [FormKitNode](#formkitnode).
- `property` — The property key to which the class list will be applied.
- `args` — And array of `Record<string, boolean>` of CSS class list(s).

#### Returns

 `string | null`

### getNode()

Get a node by a particular id.

#### Signature

<client-only>

```typescript
getNode(id: string): FormKitNode | undefined;
```

</client-only>

#### Parameters

- `id` — Get a node by a given id.

#### Returns

 A [FormKitNode](#formkitnode) or `undefined`.

### isComponent()

Type narrow that a node is a DOM node.

#### Signature

<client-only>

```typescript
isComponent(node: string | Record<PropertyKey, any>): node is FormKitSchemaComponent;
```

</client-only>

#### Parameters

- `node` — A schema node to check.

#### Returns

 `boolean`

### isConditional()

Determines if a node is conditionally rendered or not.

#### Signature

<client-only>

```typescript
isConditional(node: FormKitSchemaNode): node is FormKitSchemaCondition;
isConditional(node: FormKitSchemaAttributesCondition | FormKitSchemaAttributes): node is FormKitSchemaAttributesCondition;
```

</client-only>

#### Parameters

- `node` — A schema node to check.

#### Returns

 `boolean`

### isDOM()

Type narrow that a node is a DOM node.

#### Signature

<client-only>

```typescript
isDOM(node: string | Record<PropertyKey, any>): node is FormKitSchemaDOMNode;
```

</client-only>

#### Parameters

- `node` — A schema node to check

#### Returns

 `boolean`

### isList()

A simple type guard to determine if the context being evaluated is a list type.

#### Signature

<client-only>

```typescript
isList(arg: FormKitContextShape): arg is FormKitListContext;
```

</client-only>

#### Parameters

- `arg` — A [FormKitContextShape](#formkitcontextshape).

#### Returns

 Returns a `boolean`.

### isNode()

Determine if a given object is a node.

#### Signature

<client-only>

```typescript
isNode(node: any): node is FormKitNode;
```

</client-only>

#### Parameters

- `node` — Any value.

#### Returns

 Returns a `boolean`.

#### Examples

<client-only>

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

</client-only>

### isPlaceholder()

Determines if a node is a placeholder node.

#### Signature

<client-only>

```typescript
isPlaceholder(node: FormKitNode | FormKitPlaceholderNode): node is FormKitPlaceholderNode;
```

</client-only>

#### Parameters

- `node` — A [FormKitNode](#formkitnode)

#### Returns

### isSugar()

Determines if the node is syntactic sugar or not.

#### Signature

<client-only>

```typescript
isSugar(node: FormKitSchemaNode): node is FormKitSchemaFormKit;
```

</client-only>

#### Parameters

- `node` — A schema node to check.

#### Returns

 `boolean`

### names()

Create a name-based dictionary of all children in an array.

#### Signature

<client-only>

```typescript
names(children: FormKitNode[]): {
    [index: string]: FormKitNode;
};
```

</client-only>

#### Parameters

- `children` — An array of [FormKitNode](#formkitnode).

#### Returns

 A dictionary of named [FormKitNode](#formkitnode).

### register()

Registers a node to the registry _if_ the node is a root node, _or_ if the node has an explicit node.props.alias. If these two things are not true, then no node is registered (idempotent).

#### Signature

<client-only>

```typescript
register(node: FormKitNode): void;
```

</client-only>

#### Parameters

- `node` — A [FormKitNode](#formkitnode).

### reset()

Resets an input to its "initial" value. If the input is a group or list it resets all the children as well.

#### Signature

<client-only>

```typescript
reset(id: string | FormKitNode, resetTo?: unknown): FormKitNode | undefined;
```

</client-only>

#### Parameters

- `id` — The id of an input to reset.
- `resetTo` *optional* — A value to reset the node to.

#### Returns

 A [FormKitNode](#formkitnode) or `undefined`.

### resetCount()

Resets the global number of node registrations, useful for deterministic node naming.

#### Signature

<client-only>

```typescript
resetCount(): void;
```

</client-only>

### resetRegistry()

Resets the entire registry. Deregisters all nodes and removes all listeners.

#### Signature

<client-only>

```typescript
resetRegistry(): void;
```

</client-only>

### setErrors()

Sets errors on a form, group, or input.

#### Signature

<client-only>

```typescript
setErrors(id: string, localErrors: ErrorMessages, childErrors?: ErrorMessages): void;
```

</client-only>

#### Parameters

- `id` — The id of a form.
- `localErrors` — The errors to set on the form or the form’s inputs in the format of [ErrorMessages](#errormessages).
- `childErrors` *optional* — (optional) The errors to set on the form or the form’s inputs in the format of [ErrorMessages](#errormessages).

### submitForm()

Submits a FormKit form programmatically.

#### Signature

<client-only>

```typescript
submitForm(id: string): void;
```

</client-only>

#### Parameters

- `id` — The id of the form.

### sugar()

Converts syntactic sugar nodes to standard nodes.

#### Signature

<client-only>

```typescript
sugar<T extends FormKitSchemaNode>(node: T): Exclude<FormKitSchemaNode, string | FormKitSchemaFormKit>;
```

</client-only>

#### Parameters

- `node` — A node to covert.

#### Returns

 A [FormKitSchemaNode](#formkitschemanode) without the properties of [FormKitSchemaFormKit](#formkitschemaformkit).

### warn()

Globally emits a warning.

#### Signature

<client-only>

```typescript
warn(code: number, data?: any): void;
```

</client-only>

#### Parameters

- `code` — The integer warning code.
- `data` *optional* — Usually an object of information to include.

### watchRegistry()

A way of watching changes in the global registry.

#### Signature

<client-only>

```typescript
watchRegistry(id: string, callback: FormKitEventListener): void;
```

</client-only>

#### Parameters

- `id` — A dot
-syntax id where the node is located.
- `callback` — A callback in the format of [FormKitEventListener](#formkiteventlistener) to notify when the node is set or removed.

## TypeScript

### FormKitChildCallback

The callback type for node.each().

<client-only>

```typescript
interface FormKitChildCallback {
    (child: FormKitNode): any;
}
```

</client-only>

### FormKitChildValue

A descriptor of a child value, generally passed up a node tree.

<client-only>

```typescript
interface FormKitChildValue {
    from?: number | symbol;
    name: string | number | symbol;
    value: any;
}
```

</client-only>

### FormKitClasses

Definition for a function that produces CSS classes.

<client-only>

```typescript
interface FormKitClasses {
    (node: FormKitNode, sectionKey: string): string | Record<string, boolean>;
}
```

</client-only>

### FormKitCompilerOutput

The compiler output, a function that adds the required tokens.

<client-only>

```typescript
interface FormKitCompilerOutput {
    (tokens?: Record<string, any>): boolean | number | string;
    provide: FormKitCompilerProvider;
}
```

</client-only>

### FormKitConfig

General "app" like configuration options, these are automatically inherited by all children — they are not reactive.

<client-only>

```typescript
interface FormKitConfig {
    [index: string]: any;
    classes?: Record<string, FormKitClasses | string | Record<string, boolean>>;
    delimiter: string;
    rootClasses: (sectionKey: string, node: FormKitNode) => Record<string, boolean>;
    rootConfig?: FormKitRootConfig;
}
```

</client-only>

### FormKitContext

The interface of a FormKit node's context object. A FormKit node is a proxy of this object.

<client-only>

```typescript
interface FormKitContext {
    _d: number;
    _e: FormKitEventEmitter;
    _resolve: ((value: unknown) => void) | false;
    _tmo: number | false;
    _value: unknown;
    children: Array<FormKitNode | FormKitPlaceholderNode>;
    config: FormKitConfig;
    context?: FormKitFrameworkContext;
    hook: FormKitHooks;
    isCreated: boolean;
    isSettled: boolean;
    ledger: FormKitLedger;
    name: string | symbol;
    parent: FormKitNode | null;
    plugins: Set<FormKitPlugin>;
    props: Partial<FormKitProps>;
    settled: Promise<unknown>;
    store: FormKitStore;
    sync: boolean;
    traps: FormKitTraps;
    type: FormKitNodeType;
    uid: symbol;
    value: unknown;
}
```

</client-only>

### FormKitContextShape

Define the most basic shape of a context object for type guards trying to reason about a context's value.

<client-only>

```typescript
interface FormKitContextShape {
    _value: unknown;
    type: FormKitNodeType;
    value: unknown;
}
```

</client-only>

### FormKitCounter

The counter object used to perform instance counting within a tree.

<client-only>

```typescript
interface FormKitCounter {
    condition: FormKitCounterCondition;
    count: number;
    name: string;
    node: FormKitNode;
    promise: Promise<void>;
    resolve: () => void;
}
```

</client-only>

### FormKitCounterCondition

Ledger counters require a condition function that determines if a given message applies to it or not.

<client-only>

```typescript
interface FormKitCounterCondition {
    (message: FormKitMessage): boolean;
}
```

</client-only>

### FormKitDispatcher

The FormKitDispatcher interface is responsible creating/running "hooks".

<client-only>

```typescript
interface FormKitDispatcher<T> {
    (dispatchable: FormKitMiddleware<T>): number;
    dispatch: (payload: T) => T;
    remove: (dispatchable: FormKitMiddleware<T>) => void;
    unshift: (dispatchable: FormKitMiddleware<T>) => number;
}
```

</client-only>

### FormKitEvent

The internal structure of a FormKitEvent.

<client-only>

```typescript
interface FormKitEvent {
    bubble: boolean;
    name: string;
    origin: FormKitNode;
    payload: any;
}
```

</client-only>

### FormKitEventEmitter

The FormKitEventEmitter definition.

<client-only>

```typescript
interface FormKitEventEmitter {
    (node: FormKitNode, event: FormKitEvent): void;
    flush: () => void;
    off: (receipt: string) => void;
    on: (eventName: string, listener: FormKitEventListener) => string;
    pause: (node?: FormKitNode) => void;
    play: (node?: FormKitNode) => void;
}
```

</client-only>

### FormKitEventListener

Event listener functions definition.

<client-only>

```typescript
interface FormKitEventListener {
    (event: FormKitEvent): void;
    receipt?: string;
}
```

</client-only>

### FormKitExtendableSchemaRoot

Defines a function that allows selectively overriding a given schema.

<client-only>

```typescript
interface FormKitExtendableSchemaRoot {
    (extensions: Record<string, Partial<FormKitSchemaNode> | FormKitSchemaCondition>): FormKitSchemaDefinition;
    memoKey?: string;
}
```

</client-only>

### FormKitFrameworkContext

Context object to be created by and used by each respective UI framework. No values are created or output by FormKitCore, but this interface should be followed by each respective plugin.

<client-only>

```typescript
interface FormKitFrameworkContext {
    _value: any;
    [index: string]: unknown;
    attrs: Record<string, any>;
    classes: Record<string, string>;
    defaultMessagePlacement: boolean;
    fns: Record<string, (...args: any[]) => any>;
    handlers:{
        blur: () => void;
        touch: () => void;
        DOMInput: (e: Event) => void;
    }&Record<string, (...args: any[]) => void>;
    help?: string;
    id: string;
    items: symbol[];
    label?: string;
    messages: Record<string, FormKitMessage>;
    node: FormKitNode;
    options?: Array<Record<string, any>&{
        label: string;
        value: any;
    }>;
    state: FormKitFrameworkContextState;
    type: string;
    value: any;
}
```

</client-only>

### FormKitFrameworkContextState

The state inside a node’s framework context. Usually used to track things like blurred and validity states.

<client-only>

```typescript
interface FormKitFrameworkContextState {
    [index: string]: boolean;
    blurred: boolean;
    complete: boolean;
    dirty: boolean;
    errors: boolean;
    rules: boolean;
    settled: boolean;
    submitted: boolean;
    valid: boolean;
    validationVisible: boolean;
}
```

</client-only>

### FormKitGroupValue

FormKit inputs of type 'group' must have keyed values by default.

<client-only>

```typescript
interface FormKitGroupValue {
    __init?: boolean;
    [index: string]: unknown;
}
```

</client-only>

### FormKitHandlerPayload

Describes the data passing through the error and warning handlers.

<client-only>

```typescript
interface FormKitHandlerPayload {
    code: number;
    data: any;
    message?: string;
}
```

</client-only>

### FormKitHooks

The available hooks for middleware.

<client-only>

```typescript
interface FormKitHooks {
    classes: FormKitDispatcher<{
        property: string;
        classes: Record<string, boolean>;
    }>;
    commit: FormKitDispatcher<any>;
    error: FormKitDispatcher<string>;
    init: FormKitDispatcher<FormKitNode>;
    input: FormKitDispatcher<any>;
    message: FormKitDispatcher<FormKitMessage>;
    prop: FormKitDispatcher<{
        prop: string | symbol;
        value: any;
    }>;
    schema: FormKitDispatcher<FormKitSchemaNode[] | FormKitSchemaCondition>;
    setErrors: FormKitDispatcher<{
        localErrors: ErrorMessages;
        childErrors?: ErrorMessages;
    }>;
    submit: FormKitDispatcher<Record<string, any>>;
    text: FormKitDispatcher<FormKitTextFragment>;
}
```

</client-only>

### FormKitInputMessages

A registry of input messages that should be applied to children of the node they are passed to — where the string key of the object is the address of the node to apply the messages on and the value is the message itself.

<client-only>

```typescript
interface FormKitInputMessages {
    [address: string]: FormKitMessage[];
}
```

</client-only>

### FormKitLedger

The FormKit ledger, a general-purpose message counting service provided by FormKit core for counting messages throughout a tree.

<client-only>

```typescript
interface FormKitLedger {
    count: (name: string, condition?: FormKitCounterCondition, increment?: number) => Promise<void>;
    init: (node: FormKitNode) => void;
    merge: (child: FormKitNode) => void;
    settled: (name: string) => Promise<void>;
    unmerge: (child: FormKitNode) => void;
    value: (name: string) => number;
}
```

</client-only>

### FormKitLibrary

A library of inputs, keyed by the name of the type.

<client-only>

```typescript
interface FormKitLibrary {
    [index: string]: FormKitTypeDefinition;
}
```

</client-only>

### FormKitListContext

The simplest definition for a context of type "list".

<client-only>

```typescript
interface FormKitListContext {
    _value: FormKitListContextValue;
    type:'list';
    value: FormKitListContextValue;
}
```

</client-only>

### FormKitMessageMeta

Messages have can have any arbitrary meta data attached to them.

<client-only>

```typescript
interface FormKitMessageMeta {
    [index: string]: any;
    i18nArgs?: any[];
    messageKey?: string;
}
```

</client-only>

### FormKitMessageProps

The structure of a core FormKitMessage. These messages are used to store information about the state of a node.

<client-only>

```typescript
interface FormKitMessageProps {
    blocking: boolean;
    key: string;
    meta: FormKitMessageMeta;
    type: string;
    value?: string | number | boolean;
    visible: boolean;
}
```

</client-only>

### FormKitMessageStore

Defines the actual store of messages.

<client-only>

```typescript
interface FormKitMessageStore {
    [index: string]: FormKitMessage;
}
```

</client-only>

### FormKitNodeExtensions

An empty interface for adding FormKit node extensions.

<client-only>

```typescript
interface FormKitNodeExtensions {
}
```

</client-only>

### FormKitPlaceholderNode

A faux node that is used as a placeholder in the children node array during various node manipulations.

<client-only>

```typescript
interface FormKitPlaceholderNode<V = unknown> {
    __FKP: true;
    _value: V;
    input: (value: unknown, async?: boolean) => Promise<unknown>;
    isSettled: boolean;
    name: string;
    type: FormKitNodeType;
    uid: symbol;
    use: (...args: any[]) => void;
    value: V;
}
```

</client-only>

### FormKitPlugin

The base interface definition for a FormKitPlugin. It's just a function that accepts a node argument.

<client-only>

```typescript
interface FormKitPlugin {
    (node: FormKitNode): false | any | void;
    library?: (node: FormKitNode) => void;
}
```

</client-only>

### FormKitSchemaAttributesCondition

Conditions nested inside attribute declarations.

<client-only>

```typescript
interface FormKitSchemaAttributesCondition {
    else?: FormKitAttributeValue;
    if: string;
    then: FormKitAttributeValue;
}
```

</client-only>

### FormKitSchemaComposable

Definition for a function that can extend a given schema node.

<client-only>

```typescript
interface FormKitSchemaComposable {
    (extendWith?: Partial<FormKitSchemaNode>, children?: string | FormKitSchemaNode[] | FormKitSchemaCondition, ...args: any[]): FormKitSchemaNode;
}
```

</client-only>

### FormKitSchemaContext

The context that is passed from one schema render to the next.

<client-only>

```typescript
interface FormKitSchemaContext {
    __FK_SCP: Map<symbol, Record<string, any>>;
    [index: string]: any;
}
```

</client-only>

### FormKitSchemaProps

Properties available in all schema nodes.

<client-only>

```typescript
interface FormKitSchemaProps {
    bind?: string;
    children?: string | FormKitSchemaNode[] | FormKitSchemaCondition;
    for?: FormKitListStatement;
    if?: string;
    key?: string;
    meta?: FormKitSchemaMeta;
}
```

</client-only>

### FormKitStoreTraps

The available traps on the FormKit store.

<client-only>

```typescript
interface FormKitStoreTraps {
    apply: (messages: Array<FormKitMessage> | FormKitInputMessages, clear?: MessageClearer) => void;
    filter: (callback: (message: FormKitMessage) => boolean, type?: string) => FormKitStore;
    reduce:<T>(reducer: (accumulator: T, message: FormKitMessage) => T, accumulator: T) => T;
    release: () => void;
    remove: (key: string) => FormKitStore;
    set: (message: FormKitMessageProps) => FormKitStore;
    touch: () => void;
}
```

</client-only>

### FormKitTrap

The definition of a FormKitTrap. These are somewhat like methods on each FormKitNode. They are always symmetrical (get/set) — although it's acceptable for either to throw an Exception.

<client-only>

```typescript
interface FormKitTrap {
    get: TrapGetter;
    set: TrapSetter;
}
```

</client-only>

### KeyedValue

Arbitrary data that has properties. Could be a POJO, could be an array.

<client-only>

```typescript
interface KeyedValue {
    [index: number]: any;
    [index: string]: any;
}
```

</client-only>

### ChildMessageBuffer

Child messages that were not immediately applied due to the child not existing.

<client-only>

```typescript
type ChildMessageBuffer = Map<string, Array<[FormKitMessage[], MessageClearer | undefined]>>;
```

</client-only>

### ErrorMessages

Error messages.

<client-only>

```typescript
type ErrorMessages = string | string[] | Record<string, string | string[]>;
```

</client-only>

### FormKitAddress

Describes the path to a particular node from the top of the tree.

<client-only>

```typescript
type FormKitAddress = Array<string | number>;
```

</client-only>

### FormKitAttributeValue

The possible value types of attributes (in the schema).

<client-only>

```typescript
type FormKitAttributeValue = string | number | boolean | undefined | FormKitSchemaAttributes | FormKitSchemaAttributesCondition;
```

</client-only>

### FormKitCompilerProvider

A function that accepts a callback with a token as the only argument, and must return a function that provides the true value of the token.

<client-only>

```typescript
type FormKitCompilerProvider = (callback: (requirements: string[]) => Record<string, () => any>) => FormKitCompilerOutput;
```

</client-only>

### FormKitListContextValue

FormKit inputs of type 'list' must have array values by default.

<client-only>

```typescript
type FormKitListContextValue<T = any> = Array<T>;
```

</client-only>

### FormKitListStatement

A full loop statement in tuple syntax. Can be read like "foreach value, key? in list".

<client-only>

```typescript
type FormKitListStatement = [value: any, key: number | string, list: FormKitListValue] | [value: any, list: FormKitListValue];
```

</client-only>

### FormKitListValue

The value being listed out. Can be an array, an object, or a number.

<client-only>

```typescript
type FormKitListValue = string | Record<string, any> | Array<string | number | Record<string, any>> | number;
```

</client-only>

### FormKitMessage

A FormKit message is immutable, so all properties should be readonly.

<client-only>

```typescript
type FormKitMessage = Readonly<FormKitMessageProps>;
```

</client-only>

### FormKitMiddleware

All FormKitMiddleware conform to the pattern of accepting a payload and a `next()` function. They can either pass the payload to the next middleware explicitly (as an argument of next), or implicitly (no argument for next).

<client-only>

```typescript
type FormKitMiddleware<T = unknown> = (payload: T, next: (payload?: T) => T) => T;
```

</client-only>

### FormKitNodeType

These are the types of nodes that can be created. These are different from the type of inputs available and rather describe their purpose in the tree.

<client-only>

```typescript
type FormKitNodeType = 'input' | 'list' | 'group';
```

</client-only>

### FormKitOptions

Options that can be used to instantiate a new node via `createNode()`.

<client-only>

```typescript
type FormKitOptions = Partial<Omit<FormKitContext, 'children' | 'plugins' | 'config' | 'hook'> & {
    config: Partial<FormKitConfig>;
    props: Partial<FormKitProps>;
    children: FormKitNode[] | Set<FormKitNode>;
    index?: number;
    sync: boolean;
    plugins: FormKitPlugin[];
    alias: string;
    schemaAlias: string;
}>;
```

</client-only>

### FormKitProps

The user-land per-instance "props", which are generally akin to the props passed into components on the front end.

<client-only>

```typescript
type FormKitProps = {
    delay: number;
    id: string;
    validationLabelStrategy?: (node?: FormKitNode) => string;
    validationRules?: Record<string, (node: FormKitNode) => boolean | Promise<boolean>>;
    validationMessages?: Record<string, ((ctx: {
        name: string;
        args: any[];
        node: FormKitNode;
    }) => string) | string>;
    definition?: FormKitTypeDefinition;
    context?: FormKitFrameworkContext;
    [index: string]: any;
} & FormKitConfig;
```

</client-only>

### FormKitRootConfig

Global configuration options.

<client-only>

```typescript
type FormKitRootConfig = Partial<FormKitConfig> & {
    _add: (node: FormKitNode) => void;
    _rm: (node: FormKitNode) => void;
};
```

</client-only>

### FormKitSchemaAttributes

DOM attributes are simple string dictionaries.

<client-only>

```typescript
type FormKitSchemaAttributes = {
    [index: string]: FormKitAttributeValue;
} | null | FormKitSchemaAttributesCondition;
```

</client-only>

### FormKitSchemaComponent

Properties available when defining a generic non-FormKit component.

<client-only>

```typescript
type FormKitSchemaComponent = {
    $cmp: string;
    props?: Record<string, any>;
} & FormKitSchemaProps;
```

</client-only>

### FormKitSchemaCondition

A schema node that determines _which_ content to render.

<client-only>

```typescript
type FormKitSchemaCondition = {
    if: string;
    then: FormKitSchemaNode | FormKitSchemaNode[];
    else?: FormKitSchemaNode | FormKitSchemaNode[];
};
```

</client-only>

### FormKitSchemaDefinition

An entire schema object or subtree from any entry point. Can be a single node, an array of nodes, or a conditional. This is the type that is passed to the FormKitSchema constructor.

<client-only>

```typescript
type FormKitSchemaDefinition = FormKitSchemaNode | FormKitSchemaNode[] | FormKitSchemaCondition;
```

</client-only>

### FormKitSchemaDOMNode

Properties available when using a DOM node.

<client-only>

```typescript
type FormKitSchemaDOMNode = {
    $el: string | null;
    attrs?: FormKitSchemaAttributes;
} & FormKitSchemaProps;
```

</client-only>

### FormKitSchemaFormKit

Syntactic sugar for a FormKitSchemaComponent node that uses FormKit.

<client-only>

```typescript
type FormKitSchemaFormKit = {
    $formkit: string;
} & Record<string, any> & FormKitSchemaProps;
```

</client-only>

### FormKitSchemaMeta

Meta attributes are not used when parsing the schema, but can be used to create tooling.

<client-only>

```typescript
type FormKitSchemaMeta = {
    [key: string]: string | number | boolean | undefined | null | CallableFunction | FormKitSchemaMeta;
};
```

</client-only>

### FormKitSchemaNode

Properties available then defining a schema node.

<client-only>

```typescript
type FormKitSchemaNode = FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaTextNode | FormKitSchemaCondition | FormKitSchemaFormKit;
```

</client-only>

### FormKitSchemaTextNode

A simple text node.

<client-only>

```typescript
type FormKitSchemaTextNode = string;
```

</client-only>

### FormKitSearchFunction

Breadth and depth-first searches can use a callback of this notation.

<client-only>

```typescript
type FormKitSearchFunction = (node: FormKitNode, searchTerm?: string | number) => boolean;
```

</client-only>

### FormKitStore

The message store contains all of the messages that pertain to a given node.

<client-only>

```typescript
type FormKitStore = FormKitMessageStore & {
    _n: FormKitNode;
    _b: Array<[messages: FormKitMessage[], clear?: MessageClearer]>;
    _m: ChildMessageBuffer;
    _r?: string;
    buffer: boolean;
} & FormKitStoreTraps;
```

</client-only>

### FormKitTextFragment

Text fragments are small pieces of text used for things like interface validation messages, or errors that may be exposed for modification or even translation.

<client-only>

```typescript
type FormKitTextFragment = Partial<FormKitMessageProps> & {
    key: string;
    value: string;
    type: string;
};
```

</client-only>

### FormKitTraps

The map signature for a node's traps Map.

<client-only>

```typescript
type FormKitTraps = Map<string | symbol, FormKitTrap>;
```

</client-only>

### FormKitTypeDefinition

Definition of a library item — when registering a new library item, these are the required and available properties.

<client-only>

```typescript
type FormKitTypeDefinition = {
    type: FormKitNodeType;
    family?: string;
    forceTypeProp?: string;
    props?: string[];
    schema?: FormKitExtendableSchemaRoot | FormKitSchemaNode[] | FormKitSchemaCondition;
    component?: unknown;
    library?: Record<string, unknown>;
    features?: Array<(node: FormKitNode) => void>;
    schemaMemoKey?: string;
};
```

</client-only>

### MessageClearer

A string or function that allows clearing messages.

<client-only>

```typescript
type MessageClearer = string | ((message: FormKitMessage) => boolean);
```

</client-only>

### TrapGetter

Signature for any of the node's getter traps. Keep in mind that because these are traps and not class methods, their response types are declared explicitly in the FormKitNode interface.

<client-only>

```typescript
type TrapGetter = ((node: FormKitNode, context: FormKitContext, ...args: any[]) => unknown) | false;
```

</client-only>

### TrapSetter

The signature for a node's trap setter — these are more rare than getter traps, but can be useful for blocking access to certain context properties or modifying the behavior of an assignment (ex. see setParent).

<client-only>

```typescript
type TrapSetter = ((node: FormKitNode, context: FormKitContext, property: string | number | symbol, value: any) => boolean | never) | false;
```

</client-only>