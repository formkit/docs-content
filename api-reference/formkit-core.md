---
title: formkit/core
---

# @formkit/core

:PageToc

## Introduction

The official FormKit core library. This package is responsible for most of FormKit’s internal functionality. You can read documentation specifically on how it works at formkit.com.

You can add this package by using `npm install @formkit/core` or `yarn add @formkit/core`.

## FormKitNode

FormKit's Node object produced by createNode(). Every `<FormKit />` input has 1 FormKitNode ("core node") associated with it. All inputs, forms, and groups are instances of nodes. Read more about core nodes in the [architecture
documentation.](https://formkit.com/essentials/architecture#node)

### add()

Add a child to a node. The node must be a group or list.

#### Signature

```typescript
add: (node: FormKitNode, index?: number) => FormKitNode
```

#### Parameters

- node — A [FormKitNode](#formkitnode).
- index _optional_ — A index to where it will added to.

#### Returns

The added [FormKitNode](#formkitnode).

### address

The address of the current node from the root of the tree.

#### Signature

```typescript
address: FormKitAddress
```

#### Returns

A [FormKitAddress](#formkitaddress).

### addProps()

Adds props to the given node by removing them from node.props.attrs and moving them to the top-level node.props object.

#### Signature

```typescript
addProps: (props: string[]) => FormKitNode
```

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

```typescript
at: (address: FormKitAddress | string) => FormKitNode | undefined
```

#### Parameters

- `address` — An valid string or [FormKitAddress](#formkitaddress).

#### Returns

The found [FormKitNode](#formkitnode) or `undefined`.

### children

An array of child nodes (groups and lists).

#### Signature

```typescript
children: Array<FormKitNode>
```

#### Returns

An array of [FormKitNode](#formkitnode).

### clearErrors()

Clears the errors of the node, and optionally all the children.

#### Signature

```typescript
clearErrors: (clearChildren?: boolean, sourceKey?: string) => FormKitNode
```

#### Parameters

- `clearChildren` _optional_ — If it should clear the children.
- `sourceKey` _optional_ — A source key to use for reset.

#### Returns

The [FormKitNode](#formkitnode).

### config

An object of [FormKitConfig](#formkitconfig) that is shared tree
-wide with various configuration options that should be applied to the entire tree.

#### Signature

```typescript
config: FormKitConfig
```

#### Returns

A [FormKitConfig](#formkitconfig).

### define()

Defines the current input's library type definition including node type, schema, and props.

#### Signature

```typescript
define: (definition: FormKitTypeDefinition) => void
```

#### Parameters

- `definition` — A [FormKitTypeDefinition](#formkittypedefinition).

### destroy()

Removes the node from the global registry, its parent, and emits the 'destroying' event.

#### Signature

```typescript
destroy: () => void
```

### each()

Perform given callback on each of the given node's children.

#### Signature

```typescript
each: (callback: FormKitChildCallback) => void
```

#### Parameters

- `callback` — A [FormKitChildCallback](#formkitchildcallback) to be called for each child.

### emit()

Emit an event from the node so it can be listened by [on](#on).

#### Signature

```typescript
emit: (event: string, payload?: any, bubble?: boolean) => FormKitNode
```

#### Parameters

- `event` — The event name to be emitted.
- `payload` _optional_ — A value to be passed together with the event.
- `bubble` _optional_ — If the event should bubble to the parent.

#### Returns

The [FormKitNode](#formkitnode).

### find()

Within a given tree, find a node matching a given selector. Selectors can be simple strings or a function.

#### Signature

```typescript
find: (
  selector: string,
  searcher?: keyof FormKitNode | FormKitSearchFunction
) => FormKitNode | undefined
```

#### Parameters

- `selector` — A selector string.
- `searcher` _optional_ — A keyof [FormKitNode](#formkitnode) or [FormKitSearchFunction](#formkitsearchfunction).

#### Returns

The found [FormKitNode](#formkitnode) or `undefined`.

### hook

Set of hooks.

#### Signature

```typescript
hook: FormKitHooks
```

#### Returns

The [FormKitHooks](#formkithooks).

### index

The index of a node compared to its siblings. This is only applicable in cases where a node is a child of a list.

#### Signature

```typescript
index: number
```

#### Returns

A `number`.

### input()

The function used to set the value of a node. All changes to a node's value should use this function as it ensures the tree's state is always fully tracked.

#### Signature

```typescript
input: (value: unknown, async?: boolean) => Promise<unknown>
```

#### Parameters

- `value` — Any value to used for the node.
- `async` _optional_ — If the input should happen asynchronously.

#### Returns

A `Promise<unknown>`.

### isCreated

Begins as false, set to true when the node is finished being created.

#### Signature

```typescript
isCreated: boolean
```

#### Returns

A `boolean`.

### isSettled

Boolean reflecting the settlement state of the node and its subtree.

#### Signature

```typescript
isSettled: boolean
```

#### Returns

A `boolean`.

### ledger

A counting ledger for arbitrary message counters.

#### Signature

```typescript
ledger: FormKitLedger
```

#### Returns

A [FormKitLedger](#formkitledger).

### name

The name of the input in the node tree. When a node is a child of a list, this automatically becomes its index.

#### Signature

```typescript
name: string
```

#### Returns

A `string`.

### off()

Removes an event listener by its token. Receipts can be shared among many event listeners by explicitly declaring the "receipt" property of the listener function.

#### Signature

```typescript
off: (receipt: string) => FormKitNode
```

#### Parameters

- `receipt` — A receipt generated by the `on` function.

#### Returns

A receipt `string`.

### on()

Adds an event listener for a given event, and returns a "receipt" which is a random string token. This token should be used to remove the listener in the future. Alternatively you can assign a "receipt" property to the listener function and that receipt will be used instead. This allows multiple listeners to all be de-registered with a single off() call if they share the same receipt.

#### Signature

```typescript
on: (eventName: string, listener: FormKitEventListener) => string
```

#### Parameters

- `eventName` — The event name to listen to.
- `listener` — A [FormKitEventListener](#formkiteventlistener) to run when the event happens.

#### Returns

A receipt `string`.

### parent

The parent of a node.

#### Signature

```typescript
parent: FormKitNode | null
```

#### Returns

If found a [FormKitNode](#formkitnode) or `null`.

### props

An proxied object of props. These are typically provided by the adapter of choice.

#### Signature

```typescript
props: Partial<FormKitProps>
```

#### Returns

An optional list of [FormKitProps](#formkitprops).

### remove()

Removes a child from the node.

#### Signature

```typescript
remove: (node: FormKitNode) => FormKitNode
```

#### Parameters

- `node` — A [FormKitNode](#formkitnode) to be removed.

#### Returns

The [FormKitNode](#formkitnode).

### reset()

Resets the node’s value back to its original value.

#### Signature

```typescript
reset: () => FormKitNode
```

#### Returns

The [FormKitNode](#formkitnode).

### root

Retrieves the root node of a tree. This is accomplished via tree-traversal on-request, and as such should not be used in frequently called functions.

#### Signature

```typescript
root: FormKitNode
```

#### Returns

The [FormKitNode](#formkitnode).

### setErrors()

Sets errors on the input, and optionally to child inputs.

#### Signature

```typescript
setErrors: (localErrors: ErrorMessages, childErrors?: ErrorMessages) => void
```

#### Parameters

- `localErrors` — A [ErrorMessages](#errormessages) to be used.
- `childErrors` _optional_ — A [ErrorMessages](#errormessages) to be used for children.

### settled

A promise that resolves when a node and its entire subtree is settled. In other words — all the inputs are done committing their values.

#### Signature

```typescript
settled: Promise<unknown>
```

#### Returns

A `Promise<unknown>`.

### store

The internal node store.

#### Signature

```typescript
store: FormKitStore
```

#### Returns

A [FormKitStore](#formkitstore).

### submit()

Triggers a submit event on the nearest form.

#### Signature

```typescript
submit: () => void
```

### t()

A text or translation function that exposes a given string to the "text" hook. All text shown to users should be passed through this function before being displayed — especially for core and plugin authors.

#### Signature

```typescript
t: (key: string | FormKitTextFragment) => string
```

#### Parameters

- `key` — A key or a [FormKitTextFragment](#formkittextfragment) to find the translation for.

#### Returns

The translated `string`.

### type

The type of node, should only be 'input', 'list', or 'group'.

#### Signature

```typescript
type: FormKitNodeType
```

#### Returns

A [FormKitNodeType](#formkitnodetype).

### use()

Registers a new plugin on the node and its subtree.

#### Signature

```typescript
use: (
  plugin: FormKitPlugin | FormKitPlugin[] | Set<FormKitPlugin>,
  run?: boolean,
  library?: boolean
) => FormKitNode
```

#### Parameters

- `plugin` — A [FormKitPlugin](#formkitplugin) or an Array or Set of [FormKitPlugin](#formkitplugin).
- `run` _optional_ — Should the plugin be executed on creation.
- `library` _optional_ — Should the plugin's library function be executed on creation.

#### Returns

The [FormKitNode](#formkitnode).

### value

The value of the input. This should never be directly modified. Any desired mutations should be made through [input](#input).

#### Signature

```typescript
readonly value: unknown
```

### walk()

Performs a function on the node and every node in its subtree. This is an expensive operation so it should be done very rarely and only lifecycle events that are relatively rare like boot up and shut down.

#### Signature

```typescript
walk: (callback: FormKitChildCallback, stopOnFalse?: boolean) => void
```

#### Parameters

- `callback` — A [FormKitChildCallback](#formkitchildcallback) to be executed for each child.
- `stopOnFalse` _optional_ — If it should stop when the return is false.

## Functions

### bfs()

Perform a breadth-first search on a node subtree and locate the first instance of a match.

#### Signature

```typescript
bfs(tree: FormKitNode, searchValue: string | number, searchGoal?: keyof FormKitNode | FormKitSearchFunction): FormKitNode | undefined;
```

#### Parameters

- `tree` — A [FormKitNode](#formkitnode) to start from.
- `searchValue` — A value to be searched.
- `searchGoal` — A goal value.

#### Returns

A [FormKitNode](#formkitnode) or `undefined`.

### clearErrors()

Clears errors on the node and optionally its children.

#### Signature

```typescript
clearErrors(id: string, clearChildren?: boolean): void;
```

#### Parameters

- `id` — The id of the node you want to clear errors for.
- `clearChildren` — Determines if the children of this node should have their errors cleared.

### compile()

Compiles a logical string like `"a != z || b == c"` into a single function. The return value is an object with a "provide" method that iterates over all requirement tokens to use as replacements.

#### Signature

```typescript
compile(expr: string): FormKitCompilerOutput;
```

#### Parameters

- `expr` — A string to compile.

#### Returns

A [FormKitCompilerOutput](#formkitcompileroutput).

#### Examples

```typescript
let name = {
  value: 'jon',
}
const condition = compile("$name == 'bob'").provide((token) => {
  return () => name.value // must return a function!
})

condition() // false
```

### createClasses()

Function that produces a standardized object representation of CSS classes.

#### Signature

```typescript
createClasses(propertyKey: string, node: FormKitNode, sectionClassList?: FormKitClasses | string | Record<string, boolean>): Record<string, boolean>;
```

#### Parameters

- `propertyKey` — the section key.
- `node` — A [FormKitNode](#formkitnode).
- `sectionClassList` — A `string | Record<string, boolean>` or a [FormKitClasses](#formkitclasses).

#### Returns

`Record<string, boolean>`

### createConfig()

Creates a new instance of a global configuration option. This object is essentially just a FormKitOption object, but it can be used as the root for FormKitConfig's proxy and retain event "emitting".

#### Signature

```typescript
createConfig(options?: Partial<FormKitConfig>): FormKitRootConfig;
```

#### Parameters

- `options` — An object of optional properties of [FormKitConfig](#formkitconfig).

#### Returns

A [FormKitRootConfig](#formkitrootconfig).

### createMessage()

Creates a new FormKitMessage object.

#### Signature

```typescript
createMessage(conf: Partial<FormKitMessage>, node?: FormKitNode): FormKitMessageProps;
```

#### Parameters

- `conf` — An object of optional properties of [FormKitMessage](#formkitmessage).
- `node` — A [FormKitNode](/api-reference/formkit-node#formkitnode).

#### Returns

A [FormKitMessageProps](#formkitmessageprops).

### createNode()

Creates a new instance of a FormKit Node. Nodes are the atomic unit of a FormKit graph.

#### Signature

```typescript
createNode(options?: FormKitOptions): FormKitNode;
```

#### Parameters

- `options` — An options object of [FormKitOptions](#formkitoptions) to override the defaults.

#### Returns

A [FormKitNode](/api-reference/formkit-core#formkitnode).

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

### createValue()

Creates the initial value for a node based on the options passed in and the type of the input.

#### Signature

```typescript
createValue(options: FormKitOptions): unknown;
```

#### Parameters

- `options` — A [FormKitOptions](#formkitoptions).

#### Returns

`unknown`

### deregister()

Deregister a node from the registry.

#### Signature

```typescript
deregister(node: FormKitNode): void;
```

#### Parameters

- `node` — A [FormKitNode](#formkitnode).

### error()

Emits an error. Generally should result in an exception.

#### Signature

```typescript
error(code: number, data?: any): never;
```

#### Parameters

- `code` — The integer error code.
- `data` — Usually an object of information to include.

### generateClassList()

Combines multiple class lists into a single list.

#### Signature

```typescript
generateClassList(node: FormKitNode, property: string, ...args: Record<string, boolean>[]): string | null;
```

#### Parameters

- `node` — A [FormKitNode](#formkitnode).
- `property` — The property key to which the class list will be applied.
- `args` — And array of `Record<string, boolean>` of CSS class list(s).

#### Returns

`string | null`

### getNode()

Get a node by a particular id.

#### Signature

```typescript
getNode(id: string): FormKitNode | undefined;
```

#### Parameters

- `id` — Get a node by a given id.

#### Returns

A [FormKitNode](#formkitnode) or `undefined`.

### isComponent()

Type narrow that a node is a DOM node.

#### Signature

```typescript
isComponent(node: string | Record<PropertyKey, any>): node is FormKitSchemaComponent;
```

#### Parameters

- `node` — A schema node to check.

#### Returns

`boolean`

### isConditional()

Determines if a node is conditionally rendered or not.

#### Signature

```typescript
isConditional(node: FormKitSchemaNode): node is FormKitSchemaCondition;
isConditional(node: FormKitSchemaAttributesCondition | FormKitSchemaAttributes): node is FormKitSchemaAttributesCondition;
```

#### Parameters

- `node` — A schema node to check.

#### Returns

`boolean`

### isDOM()

Type narrow that a node is a DOM node.

#### Signature

```typescript
isDOM(node: string | Record<PropertyKey, any>): node is FormKitSchemaDOMNode;
```

#### Parameters

- `node` — A schema node to check

#### Returns

`boolean`

### isList()

A simple type guard to determine if the context being evaluated is a list type.

#### Signature

```typescript
isList(arg: FormKitContextShape): arg is FormKitListContext;
```

#### Parameters

- `arg` — A [FormKitContextShape](#formkitcontextshape).

#### Returns

Returns a `boolean`.

### isNode()

Determine if a given object is a node.

#### Signature

```typescript
isNode(node: any): node is FormKitNode;
```

#### Parameters

- `node` — Any value.

#### Returns

Returns a `boolean`.

#### Examples

```javascript
import { isNode, createNode } from '@formkit/core'

const input = createNode({
  type: 'input', // defaults to 'input' if not specified
  value: 'hello node world',
})

const obj = {}

isNode(obj)
// false

isNode(input)
// true
```

### isSugar()

Determines if the node is syntactic sugar or not.

#### Signature

```typescript
isSugar(node: FormKitSchemaNode): node is FormKitSchemaFormKit;
```

#### Parameters

- `node` — A schema node to check.

#### Returns

`boolean`

### names()

Create a name-based dictionary of all children in an array.

#### Signature

```typescript
names(children: FormKitNode[]): {
    [index: string]: FormKitNode;
};
```

#### Parameters

- `children` — An array of [FormKitNode](#formkitnode).

#### Returns

A dictionary of named [FormKitNode](#formkitnode).

### register()

Registers a node to the registry _if_ the node is a root node, _or_ if the node has an explicit node.props.alias. If these two things are not true, then no node is registered (idempotent).

#### Signature

```typescript
register(node: FormKitNode): void;
```

#### Parameters

- `node` — A [FormKitNode](#formkitnode).

### reset()

Resets an input to its "initial" value. If the input is a group or list it resets all the children as well.

#### Signature

```typescript
reset(id: string | FormKitNode, resetTo?: unknown): FormKitNode | undefined;
```

#### Parameters

- `id` — The id of an input to reset.
- `resetTo` — A value to reset the node to.

#### Returns

A [FormKitNode](#formkitnode) or `undefined`.

### resetCount()

Resets the global number of node registrations, useful for deterministic node naming.

#### Signature

```typescript
resetCount(): void;
```

### resetRegistry()

Resets the entire registry. Deregisters all nodes and removes all listeners.

#### Signature

```typescript
resetRegistry(): void;
```

### setErrors()

Sets errors on a form, group, or input.

#### Signature

```typescript
setErrors(id: string, localErrors: ErrorMessages, childErrors?: ErrorMessages): void;
```

#### Parameters

- `id` — The id of a form.
- `localErrors` — The errors to set on the form or the form’s inputs in the format of [ErrorMessages](#errormessages).
- `childErrors` — (optional) The errors to set on the form or the form’s inputs in the format of [ErrorMessages](#errormessages).

### submitForm()

Submits a FormKit form programmatically.

#### Signature

```typescript
submitForm(id: string): void;
```

#### Parameters

- `id` — The id of the form.

### sugar()

Converts syntactic sugar nodes to standard nodes.

#### Signature

```typescript
sugar<T extends FormKitSchemaNode>(node: T): Exclude<FormKitSchemaNode, string | FormKitSchemaFormKit>;
```

#### Parameters

- `node` — A node to covert.

#### Returns

A [FormKitSchemaNode](#formkitschemanode) without the properties of [FormKitSchemaFormKit](#formkitschemaformkit).

### warn()

Globally emits a warning.

#### Signature

```typescript
warn(code: number, data?: any): void;
```

#### Parameters

- `code` — The integer warning code.
- `data` — Usually an object of information to include.

### watchRegistry()

A way of watching changes in the global registry.

#### Signature

```typescript
watchRegistry(id: string, callback: FormKitEventListener): void;
```

#### Parameters

- `id` — A dot
  -syntax id where the node is located.
- `callback` — A callback in the format of [FormKitEventListener](#formkiteventlistener) to notify when the node is set or removed.

## TypeScript

### FormKitChildCallback

The callback type for node.each().

```typescript
interface FormKitChildCallback {
  (child: FormKitNode): any
}
```

### FormKitChildValue

A descriptor of a child value, generally passed up a node tree.

```typescript
interface FormKitChildValue {
  from?: number | symbol
  name: string | number | symbol
  value: any
}
```

### FormKitClasses

Definition for a function that produces CSS classes.

```typescript
interface FormKitClasses {
  (node: FormKitNode, sectionKey: string): string | Record<string, boolean>
}
```

### FormKitCompilerOutput

The compiler output, a function that adds the required tokens.

```typescript
interface FormKitCompilerOutput {
  (tokens?: Record<string, any>): boolean | number | string
  provide: FormKitCompilerProvider
}
```

### FormKitConfig

General "app" like configuration options, these are automatically inherited by all children — they are not reactive.

```typescript
interface FormKitConfig {
  [index: string]: any
  classes?: Record<string, FormKitClasses | string | Record<string, boolean>>
  delimiter: string
  rootClasses: (
    sectionKey: string,
    node: FormKitNode
  ) => Record<string, boolean>
  rootConfig?: FormKitRootConfig
}
```

### FormKitContext

The interface of a FormKit node's context object. A FormKit node is a proxy of this object.

```typescript
interface FormKitContext {
  _d: number
  _e: FormKitEventEmitter
  _resolve: ((value: unknown) => void) | false
  _tmo: number | false
  _value: unknown
  children: Array<FormKitNode>
  config: FormKitConfig
  context?: FormKitFrameworkContext
  hook: FormKitHooks
  isCreated: boolean
  isSettled: boolean
  ledger: FormKitLedger
  name: string | symbol
  parent: FormKitNode | null
  plugins: Set<FormKitPlugin>
  props: Partial<FormKitProps>
  settled: Promise<unknown>
  store: FormKitStore
  traps: FormKitTraps
  type: FormKitNodeType
  value: unknown
}
```

### FormKitContextShape

Define the most basic shape of a context object for type guards trying to reason about a context's value.

```typescript
interface FormKitContextShape {
  _value: unknown
  type: FormKitNodeType
  value: unknown
}
```

### FormKitCounter

The counter object used to perform instance counting within a tree.

```typescript
interface FormKitCounter {
  condition: FormKitCounterCondition
  count: number
  name: string
  node: FormKitNode
  promise: Promise<void>
  resolve: () => void
}
```

### FormKitCounterCondition

Ledger counters require a condition function that determines if a given message applies to it or not.

```typescript
interface FormKitCounterCondition {
  (message: FormKitMessage): boolean
}
```

### FormKitDispatcher

The FormKitDispatcher interface is responsible creating/running "hooks".

```typescript
interface FormKitDispatcher<T> {
  (dispatchable: FormKitMiddleware<T>): number
  dispatch: (payload: T) => T
  remove: (dispatchable: FormKitMiddleware<T>) => void
  unshift: (dispatchable: FormKitMiddleware<T>) => number
}
```

### FormKitEvent

The internal structure of a FormKitEvent.

```typescript
interface FormKitEvent {
  bubble: boolean
  name: string
  origin: FormKitNode
  payload: any
}
```

### FormKitEventEmitter

The FormKitEventEmitter definition.

```typescript
interface FormKitEventEmitter {
  (node: FormKitNode, event: FormKitEvent): void
  off: (receipt: string) => void
  on: (eventName: string, listener: FormKitEventListener) => string
  pause: (node?: FormKitNode) => void
  play: (node?: FormKitNode) => void
}
```

### FormKitEventListener

Event listener functions definition.

```typescript
interface FormKitEventListener {
  (event: FormKitEvent): void
  receipt?: string
}
```

### FormKitExtendableSchemaRoot

Defines a function that allows selectively overriding a given schema.

```typescript
interface FormKitExtendableSchemaRoot {
  (
    extensions: Record<
      string,
      Partial<FormKitSchemaNode> | FormKitSchemaCondition
    >
  ): FormKitSchemaNode[]
}
```

### FormKitFrameworkContext

Context object to be created by and used by each respective UI framework. No values are created or output by FormKitCore, but this interface should be followed by each respective plugin.

```typescript
interface FormKitFrameworkContext {
  _value: any
  [index: string]: unknown
  attrs: Record<string, any>
  classes: Record<string, string>
  defaultMessagePlacement: boolean
  fns: Record<string, (...args: any[]) => any>
  handlers: {
    blur: () => void
    touch: () => void
    DOMInput: (e: Event) => void
  } & Record<string, (...args: any[]) => void>
  help?: string
  id: string
  label?: string
  messages: Record<string, FormKitMessage>
  node: FormKitNode
  options?: Array<
    Record<string, any> & {
      label: string
      value: any
    }
  >
  state: FormKitFrameworkContextState
  type: string
  value: any
}
```

### FormKitFrameworkContextState

The state inside a node’s framework context. Usually used to track things like blurred and validity states.

```typescript
interface FormKitFrameworkContextState {
  [index: string]: boolean
  blurred: boolean
  complete: boolean
  dirty: boolean
  errors: boolean
  rules: boolean
  settled: boolean
  submitted: boolean
  valid: boolean
  validationVisible: boolean
}
```

### FormKitGroupValue

FormKit inputs of type 'group' must have keyed values by default.

```typescript
interface FormKitGroupValue {
  __init?: boolean
  [index: string]: unknown
}
```

### FormKitHandlerPayload

Describes the data passing through the error and warning handlers.

```typescript
interface FormKitHandlerPayload {
  code: number
  data: any
  message?: string
}
```

### FormKitHooks

The available hooks for middleware.

```typescript
interface FormKitHooks {
  classes: FormKitDispatcher<{
    property: string
    classes: Record<string, boolean>
  }>
  commit: FormKitDispatcher<any>
  error: FormKitDispatcher<string>
  init: FormKitDispatcher<FormKitNode>
  input: FormKitDispatcher<any>
  message: FormKitDispatcher<FormKitMessage>
  prop: FormKitDispatcher<{
    prop: string | symbol
    value: any
  }>
  schema: FormKitDispatcher<FormKitSchemaNode[] | FormKitSchemaCondition>
  setErrors: FormKitDispatcher<{
    localErrors: ErrorMessages
    childErrors?: ErrorMessages
  }>
  submit: FormKitDispatcher<Record<string, any>>
  text: FormKitDispatcher<FormKitTextFragment>
}
```

### FormKitLedger

The FormKit ledger, a general-purpose message counting service provided by FormKit core for counting messages throughout a tree.

```typescript
interface FormKitLedger {
  count: (
    name: string,
    condition?: FormKitCounterCondition,
    increment?: number
  ) => Promise<void>
  init: (node: FormKitNode) => void
  merge: (child: FormKitNode) => void
  settled: (name: string) => Promise<void>
  unmerge: (child: FormKitNode) => void
  value: (name: string) => number
}
```

### FormKitLibrary

A library of inputs, keyed by the name of the type.

```typescript
interface FormKitLibrary {
  [index: string]: FormKitTypeDefinition
}
```

### FormKitListContext

The simplest definition for a context of type "list".

```typescript
interface FormKitListContext {
  _value: FormKitListValue
  type: 'list'
  value: FormKitListValue
}
```

### FormKitMessageMeta

Messages have can have any arbitrary meta data attached to them.

```typescript
interface FormKitMessageMeta {
  [index: string]: any
  i18nArgs?: any[]
  messageKey?: string
}
```

### FormKitMessageProps

The structure of a core FormKitMessage. These messages are used to store information about the state of a node.

```typescript
interface FormKitMessageProps {
  blocking: boolean
  key: string
  meta: FormKitMessageMeta
  type: string
  value?: string | number | boolean
  visible: boolean
}
```

### FormKitMessageStore

Defines the actual store of messages.

```typescript
interface FormKitMessageStore {
  [index: string]: FormKitMessage
}
```

### FormKitPlugin

The base interface definition for a FormKitPlugin. It's just a function that accepts a node argument.

```typescript
interface FormKitPlugin {
  (node: FormKitNode): false | any | void
  library?: (node: FormKitNode) => void
}
```

### FormKitSchemaAttributesCondition

Conditions nested inside attribute declarations.

```typescript
interface FormKitSchemaAttributesCondition {
  else?: FormKitAttributeValue
  if: string
  then: FormKitAttributeValue
}
```

### FormKitSchemaComposable

Definition for a function that can extend a given schema node.

```typescript
interface FormKitSchemaComposable {
  (
    extendWith?: Partial<FormKitSchemaNode>,
    children?: string | FormKitSchemaNode[] | FormKitSchemaCondition,
    ...args: any[]
  ): FormKitSchemaNode
}
```

### FormKitSchemaContext

The context that is passed from one schema render to the next.

```typescript
interface FormKitSchemaContext {
  __FK_SCP: Map<symbol, Record<string, any>>
  [index: string]: any
}
```

### FormKitSchemaProps

Properties available in all schema nodes.

```typescript
interface FormKitSchemaProps {
  bind?: string
  children?: string | FormKitSchemaNode[] | FormKitSchemaCondition
  for?: FormKitListStatement
  if?: string
  key?: string
  meta?: FormKitSchemaMeta
}
```

### FormKitTrap

The definition of a FormKitTrap. These are somewhat like methods on each FormKitNode. They are always symmetrical (get/set) — although it's acceptable for either to throw an Exception.

```typescript
interface FormKitTrap {
  get: TrapGetter
  set: TrapSetter
}
```

### KeyedValue

Arbitrary data that has properties. Could be a POJO, could be an array.

```typescript
interface KeyedValue {
  [index: number]: any
  [index: string]: any
}
```

### FormKitAddress

Describes the path to a particular node from the top of the tree.

```typescript
type FormKitAddress = Array<string | number>
```

### FormKitAttributeValue

The possible value types of attributes (in the schema).

```typescript
type FormKitAttributeValue =
  | string
  | number
  | boolean
  | undefined
  | FormKitSchemaAttributes
  | FormKitSchemaAttributesCondition
```

### FormKitCompilerProvider

A function that accepts a callback with a token as the only argument, and must return a function that provides the true value of the token.

```typescript
type FormKitCompilerProvider = (
  callback: (requirements: string[]) => Record<string, () => any>
) => FormKitCompilerOutput
```

### FormKitListStatement

A full loop statement in tuple syntax. Can be read like "foreach value, key? in list".

```typescript
type FormKitListStatement =
  | [value: any, key: number | string, list: FormKitListValue]
  | [value: any, list: FormKitListValue]
```

### FormKitListValue

The value being listed out. Can be an array, an object, or a number.

```typescript
type FormKitListValue =
  | string
  | Record<string, any>
  | Array<string | number | Record<string, any>>
  | number
```

### FormKitMessage

A FormKit message is immutable, so all properties should be readonly.

```typescript
type FormKitMessage = Readonly<FormKitMessageProps>
```

### FormKitMiddleware

All FormKitMiddleware conform to the pattern of accepting a payload and a `next()` function. They can either pass the payload to the next middleware explicitly (as an argument of next), or implicitly (no argument for next).

```typescript
type FormKitMiddleware<T = unknown> = (
  payload: T,
  next: (payload?: T) => T
) => T
```

### FormKitNodeType

These are the types of nodes that can be created. These are different from the type of inputs available and rather describe their purpose in the tree.

```typescript
type FormKitNodeType = 'input' | 'list' | 'group'
```

### FormKitOptions

Options that can be used to instantiate a new node via createNode().

```typescript
type FormKitOptions = Partial<
  Omit<FormKitContext, 'children' | 'plugins' | 'config' | 'hook'> & {
    config: Partial<FormKitConfig>
    props: Partial<FormKitProps>
    children: FormKitNode[] | Set<FormKitNode>
    index?: number
    plugins: FormKitPlugin[]
    alias: string
    schemaAlias: string
  }
>
```

### FormKitProps

The user-land per-instance "props", which are generally akin to the props passed into components on the front end.

```typescript
type FormKitProps = {
  delay: number
  id: string
  validationLabelStrategy?: (node?: FormKitNode) => string
  validationRules?: Record<
    string,
    (node: FormKitNode) => boolean | Promise<boolean>
  >
  validationMessages?: Record<
    string,
    ((ctx: { name: string; args: any[]; node: FormKitNode }) => string) | string
  >
  definition?: FormKitTypeDefinition
  context?: FormKitFrameworkContext
  [index: string]: any
} & FormKitConfig
```

### FormKitSchemaAttributes

DOM attributes are simple string dictionaries.

```typescript
type FormKitSchemaAttributes =
  | {
      [index: string]: FormKitAttributeValue
    }
  | null
  | FormKitSchemaAttributesCondition
```

### FormKitSchemaComponent

Properties available when defining a generic non-FormKit component.

```typescript
type FormKitSchemaComponent = {
  $cmp: string
  props?: Record<string, any>
} & FormKitSchemaProps
```

### FormKitSchemaCondition

A schema node that determines _which_ content to render.

```typescript
type FormKitSchemaCondition = {
  if: string
  then: FormKitSchemaNode | FormKitSchemaNode[]
  else?: FormKitSchemaNode | FormKitSchemaNode[]
}
```

### FormKitSchemaDOMNode

Properties available when using a DOM node.

```typescript
type FormKitSchemaDOMNode = {
  $el: string | null
  attrs?: FormKitSchemaAttributes
} & FormKitSchemaProps
```

### FormKitSchemaFormKit

Syntactic sugar for a FormKitSchemaComponent node that uses FormKit.

```typescript
type FormKitSchemaFormKit = {
  $formkit: string
} & Record<string, any> &
  FormKitSchemaProps
```

### FormKitSchemaNode

Properties available then defining a schema node.

```typescript
type FormKitSchemaNode =
  | FormKitSchemaDOMNode
  | FormKitSchemaComponent
  | FormKitSchemaTextNode
  | FormKitSchemaCondition
  | FormKitSchemaFormKit
```

### FormKitSchemaTextNode

A simple text node.

```typescript
type FormKitSchemaTextNode = string
```

### FormKitSearchFunction

Breadth and depth-first searches can use a callback of this notation.

```typescript
type FormKitSearchFunction = (
  node: FormKitNode,
  searchTerm?: string | number
) => boolean
```

### FormKitStore

The message store contains all of the messages that pertain to a given node.

```typescript
type FormKitStore = FormKitMessageStore & {
  _n: FormKitNode
  _b: Array<[messages: FormKitMessage[], clear?: MessageClearer]>
  _m: ChildMessageBuffer
  _r?: string
  buffer: boolean
} & FormKitStoreTraps
```

### FormKitTextFragment

Text fragments are small pieces of text used for things like interface validation messages, or errors that may be exposed for modification or even translation.

```typescript
type FormKitTextFragment = Partial<FormKitMessageProps> & {
  key: string
  value: string
  type: string
}
```

### FormKitTraps

The map signature for a node's traps Map.

```typescript
type FormKitTraps = Map<string | symbol, FormKitTrap>
```

### FormKitTypeDefinition

Definition of a library item — when registering a new library item, these are the required and available properties.

```typescript
type FormKitTypeDefinition = {
  type: FormKitNodeType
  family?: string
  forceTypeProp?: string
  props?: string[]
  schema?:
    | FormKitExtendableSchemaRoot
    | FormKitSchemaNode[]
    | FormKitSchemaCondition
  component?: unknown
  library?: Record<string, unknown>
  features?: Array<(node: FormKitNode) => void>
}
```

### TrapGetter

Signature for any of the node's getter traps. Keep in mind that because these are traps and not class methods, their response types are declared explicitly in the FormKitNode interface.

```typescript
type TrapGetter =
  | ((node: FormKitNode, context: FormKitContext, ...args: any[]) => unknown)
  | false
```

### TrapSetter

The signature for a node's trap setter — these are more rare than getter traps, but can be useful for blocking access to certain context properties or modifying the behavior of an assignment (ex. see setParent).

```typescript
type TrapSetter =
  | ((
      node: FormKitNode,
      context: FormKitContext,
      property: string | number | symbol,
      value: any
    ) => boolean | never)
  | false
```
