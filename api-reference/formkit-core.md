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

* `tree`

* `searchValue`

* `searchGoal` *optional*

#### Returns

Returns a [FormKitNode](#FormKitNode) or `undefined` if not found.

## compile()

Compiles a logical string like "a != z || b == c" into a single function. The return value is an object with a "provide" method that iterates over all requirement tokens to use as replacements.

#### Signature

```typescript
export declare function compile(expr: string): FormKitCompilerOutput;
```

#### Parameters

* `expr`

A string to compile

#### Returns

[FormKitCompilerOutput](/api-reference/formkit-core#FormKitCompilerOutput)

#### Examples

```typescript
let name = {
  value: 'jon'
}
const condition = compile("$name == 'bob'").provide((token) => {
 return () => name.value // must return a function!
})

condition() // false
```

## createClasses()

Function that produces a standardized object representation of CSS classes

#### Signature

```typescript
export declare function createClasses(propertyKey: string, node: FormKitNode, sectionClassList?: FormKitClasses | string | Record<string, boolean>): Record<string, boolean>;
```

#### Parameters

* `propertyKey`

section key

* `node`

FormKit node

* `sectionClassList` *optional*

Things to turn into classes

## createConfig()

Creates a new instance of a global configuration option. This object is essentially just a FormKitOption object, but it can be used as the root for FormKitConfig's proxy and retain event "emitting".

#### Signature

```typescript
export declare function createConfig(options?: Partial<FormKitConfig>): FormKitRootConfig;
```

#### Parameters

* `options` *optional*

FormKit node options to be used globally.

## createMessage()

Creates a new FormKitMessage object.

#### Signature

```typescript
export declare function createMessage(conf: Partial<FormKitMessage>, node?: FormKitNode): FormKitMessageProps;
```

#### Parameters

* `conf`

The message configuration

* `node` *optional*

#### Returns

FormKitMessage

## createNode()

Creates a new instance of a FormKit Node. Nodes are the atomic unit of a FormKit graph:

#### Signature

```typescript
export declare function createNode(options?: FormKitOptions): FormKitNode;
```

#### Parameters

* `options` *optional*

#### Returns

Returns a [FormKitNode](/api-reference/formkit-core#FormKitNode).

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

## deregister()

Deregister a node from the registry.

#### Signature

```typescript
export declare function deregister(node: FormKitNode): void;
```

#### Parameters

* `node`

A node to remove

## error()

Emits an error, generally should result in an exception.

#### Signature

```typescript
export declare function error(code: number, data?: any): never;
```

#### Parameters

* `code`

The integer error code.

* `data` *optional*

Usually an object of information to include.

## generateClassList()

Combines multiple class lists into a single list

#### Signature

```typescript
export declare function generateClassList(node: FormKitNode, property: string, ...args: Record<string, boolean>[]): string | null;
```

#### Parameters

* `node`

the FormKit node being operated on

* `property`

The property key to which the class list will be applied

* `args`

CSS class list(s)

## getNode()

Get a node by a particular id.

#### Signature

```typescript
export declare function getNode(id: string): FormKitNode | undefined;
```

#### Parameters

* `id`

## isComponent()

Type narrow that a node is a DOM node.

#### Signature

```typescript
export declare function isComponent(node: string | Record<PropertyKey, any>): node is FormKitSchemaComponent;
```

#### Parameters

* `node`

A schema node to check

#### Returns

`boolean`

## isDOM()

Type narrow that a node is a DOM node.

#### Signature

```typescript
export declare function isDOM(node: string | Record<PropertyKey, any>): node is FormKitSchemaDOMNode;
```

#### Parameters

* `node`

A schema node to check

#### Returns

`boolean`

## isList()

A simple type guard to determine if the context being evaluated is a list type.

#### Signature

```typescript
export declare function isList(arg: FormKitContextShape): arg is FormKitListContext;
```

#### Parameters

* `arg`

#### Returns

Returns a `boolean`.

## isNode()

Determine if a given object is a node:

#### Signature

```typescript
export declare function isNode(node: any): node is FormKitNode;
```

#### Parameters

* `node`

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

## isSugar()

Determines if the node is syntactic sugar or not.

#### Signature

```typescript
export declare function isSugar(node: FormKitSchemaNode): node is FormKitSchemaFormKit;
```

#### Parameters

* `node`

Node

#### Returns

`booleana`

## register()

Registers a node to the registry _if_ the node is a root node, _or_ if the node has an explicit node.props.alias. If these two things are not true then no node is registered (idempotent).

#### Signature

```typescript
export declare function register(node: FormKitNode): void;
```

#### Parameters

* `node`

A node to register

## reset()

Resets an input to it’s "initial" value — if the input is a group or list it resets all the children as well.

#### Signature

```typescript
export declare function reset(id: string | FormKitNode, resetTo?: unknown): FormKitNode | undefined;
```

#### Parameters

* `id`

The id of an input to reset

* `resetTo` *optional*

#### Returns

[FormKitNode](/api-reference/formkit-core#FormKitNode) | undefined

## resetRegistry()

Reset the entire registry.

#### Signature

```typescript
export declare function resetRegistry(): void;
```

## setErrors()

Sets errors on a form, group, or input.

#### Signature

```typescript
export declare function setErrors(id: string, localErrors: ErrorMessages, childErrors?: ErrorMessages): void;
```

#### Parameters

* `id`

* `localErrors`

The errors to set on the form or the form’s inputs

* `childErrors` *optional*

(optional) The errors to set on the form or the form’s inputs

## submitForm()

Submits a FormKit form programmatically.

#### Signature

```typescript
export declare function submitForm(id: string): void;
```

#### Parameters

* `id`

The id of the form

## sugar()

Converts syntactic sugar nodes to standard nodes.

#### Signature

```typescript
export declare function sugar<T extends FormKitSchemaNode>(node: T): Exclude<FormKitSchemaNode, string | FormKitSchemaFormKit>;
```

#### Parameters

* `node`

A node to covert

## warn()

Globally emits a warning.

#### Signature

```typescript
export declare function warn(code: number, data?: any): void;
```

#### Parameters

* `code`

The integer error code.

* `data` *optional*

Usually an object of information to include.

## watchRegistry()

#### Signature

```typescript
export declare function watchRegistry(id: string, callback: FormKitEventListener): void;
```

#### Parameters

* `id`

An id to watch

* `callback`

A callback to notify when the node is set or removed.

## FormKitChildCallback

The callback type for node.each()

```typescript
export interface FormKitChildCallback {
    (child: FormKitNode): any;
}
```

## FormKitChildValue

A descriptor of a child value, generally passed up a node tree.

```typescript
export interface FormKitChildValue {
    from?: number | symbol;
    name: string | number | symbol;
    value: any;
}
```

## FormKitClasses

Definition for a function that produces CSS classes

```typescript
export interface FormKitClasses {
    (node: FormKitNode, sectionKey: string): string | Record<string, boolean>;
}
```

## FormKitCompilerOutput

The compiler output, a function that adds the required tokens.

```typescript
export interface FormKitCompilerOutput {
    (tokens?: Record<string, any>): boolean | number | string;
    provide: FormKitCompilerProvider;
}
```

## FormKitConfig

General "app" like configuration options, these are automatically inherited by all children — they are not reactive.

```typescript
export interface FormKitConfig {
    [index: string]: any;
    classes?: Record<string, FormKitClasses | string | Record<string, boolean>>;
    delimiter: string;
    rootClasses: (sectionKey: string, node: FormKitNode) => Record<string, boolean>;
    rootConfig?: FormKitRootConfig;
}
```

## FormKitContext

The interface of the a FormKit node's context object. A FormKit node is a proxy of this object.

```typescript
export interface FormKitContext {
    _d: number;
    _e: FormKitEventEmitter;
    _resolve: ((value: unknown) => void) | false;
    _tmo: number | false;
    _value: unknown;
    children: Array<FormKitNode>;
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
    traps: FormKitTraps;
    type: FormKitNodeType;
    value: unknown;
}
```

## FormKitContextShape

Define the most basic shape of a context object for type guards trying to reason about a context's value.

```typescript
export interface FormKitContextShape {
    _value: unknown;
    type: FormKitNodeType;
    value: unknown;
}
```

## FormKitCounter

The counter object used to perform instance counting within a tree.

```typescript
export interface FormKitCounter {
    condition: FormKitCounterCondition;
    count: number;
    name: string;
    node: FormKitNode;
    promise: Promise<void>;
    resolve: () => void;
}
```

## FormKitCounterCondition

Ledger counters require a condition function that determines if a given message applies to it or not.

```typescript
export interface FormKitCounterCondition {
    (message: FormKitMessage): boolean;
}
```

## FormKitDispatcher

The FormKitDispatcher interface is responsible creating/running "hooks".

```typescript
export interface FormKitDispatcher<T> {
    (dispatchable: FormKitMiddleware<T>): number;
    dispatch: (payload: T) => T;
    remove: (dispatchable: FormKitMiddleware<T>) => void;
    unshift: (dispatchable: FormKitMiddleware<T>) => number;
}
```

## FormKitEvent

The internal structure of a FormKitEvent

```typescript
export interface FormKitEvent {
    bubble: boolean;
    name: string;
    origin: FormKitNode;
    payload: any;
}
```

## FormKitEventEmitter

The FormKitEventEmitter definition.

```typescript
export interface FormKitEventEmitter {
    (node: FormKitNode, event: FormKitEvent): void;
    off: (receipt: string) => void;
    on: (eventName: string, listener: FormKitEventListener) => string;
    pause: (node?: FormKitNode) => void;
    play: (node?: FormKitNode) => void;
}
```

## FormKitEventListener

Event listener functions definition.

```typescript
export interface FormKitEventListener {
    (event: FormKitEvent): void;
    receipt?: string;
}
```

## FormKitExtendableSchemaRoot

Defines a function that allows selectively overriding a given schema.

```typescript
export interface FormKitExtendableSchemaRoot {
    (extensions: Record<string, Partial<FormKitSchemaNode> | FormKitSchemaCondition>): FormKitSchemaNode[];
}
```

## FormKitFrameworkContext

Context object to be created by and used by each respective UI framework. No values are created or output by FormKitCore, but this interface should be followed by each respective plugin.

```typescript
export interface FormKitFrameworkContext {
    _value: any;
    [index: string]: unknown;
    attrs: Record<string, any>;
    classes: Record<string, string>;
    fns: Record<string, (...args: any[]) => any>;
    handlers:{
        blur: () => void;
        touch: () => void;
        DOMInput: (e: Event) => void;
    }&Record<string, (...args: any[]) => void>;
    help?: string;
    id: string;
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

## FormKitFrameworkContextState

The state inside a node’s framework context. Usually used to track things like blurred, and validity states.

```typescript
export interface FormKitFrameworkContextState {
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

## FormKitGroupValue

FormKit inputs of type 'group' must have keyed values by default.

```typescript
export interface FormKitGroupValue {
    __init?: boolean;
    [index: string]: unknown;
}
```

## FormKitHandlerPayload

Describes the data passing through the error and warning handlers.

```typescript
export interface FormKitHandlerPayload {
    code: number;
    data: any;
    message?: string;
}
```

## FormKitHooks

The available hooks for middleware.

```typescript
export interface FormKitHooks {
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

## FormKitLedger

The FormKit ledger, a general-purpose message counting service provided by FormKit core for counting messages throughout a tree.

```typescript
export interface FormKitLedger {
    count: (name: string, condition?: FormKitCounterCondition, increment?: number) => Promise<void>;
    init: (node: FormKitNode) => void;
    merge: (child: FormKitNode) => void;
    settled: (name: string) => Promise<void>;
    unmerge: (child: FormKitNode) => void;
    value: (name: string) => number;
}
```

## FormKitLibrary

A library of inputs, keyed by the name of the type.

```typescript
export interface FormKitLibrary {
    [index: string]: FormKitTypeDefinition;
}
```

## FormKitListContext

The simplest definition for a context of type "list".

```typescript
export interface FormKitListContext {
    _value: FormKitListValue;
    type:'list';
    value: FormKitListValue;
}
```

## FormKitMessageMeta

Messages have can have any arbitrary meta data attached to them.

```typescript
export interface FormKitMessageMeta {
    [index: string]: any;
    i18nArgs?: any[];
    messageKey?: string;
}
```

## FormKitMessageProps

The structure of an core FormKitMessage. These messages are used to store information about the state of a node.

```typescript
export interface FormKitMessageProps {
    blocking: boolean;
    key: string;
    meta: FormKitMessageMeta;
    type: string;
    value?: string | number | boolean;
    visible: boolean;
}
```

## FormKitMessageStore

Defines the actual store of messages (private).

```typescript
export interface FormKitMessageStore {
    [index: string]: FormKitMessage;
}
```

## FormKitPlugin

The base interface definition for a FormKitPlugin — it's just a function that accepts a node argument.

```typescript
export interface FormKitPlugin {
    (node: FormKitNode): false | any | void;
    library?: (node: FormKitNode) => void;
}
```

## FormKitSchemaAttributesCondition

Conditions nested inside attribute declarations

```typescript
export interface FormKitSchemaAttributesCondition {
    else?: FormKitAttributeValue;
    if: string;
    then: FormKitAttributeValue;
}
```

## FormKitSchemaComposable

Definition for a function that can extend a given schema node.

```typescript
export interface FormKitSchemaComposable {
    (extendWith?: Partial<FormKitSchemaNode>, children?: string | FormKitSchemaNode[] | FormKitSchemaCondition, ...args: any[]): FormKitSchemaNode;
}
```

## FormKitSchemaContext

The context that is passed from one schema render to the next.

```typescript
export interface FormKitSchemaContext {
    __FK_SCP: Map<symbol, Record<string, any>>;
    [index: string]: any;
}
```

## FormKitSchemaProps

Properties available in all schema nodes.

```typescript
export interface FormKitSchemaProps {
    bind?: string;
    children?: string | FormKitSchemaNode[] | FormKitSchemaCondition;
    for?: FormKitListStatement;
    if?: string;
    key?: string;
    meta?: FormKitSchemaMeta;
}
```

## FormKitTrap

The definition of a FormKitTrap — these are somewhat like methods on each FormKitNode — they are always symmetrical (get/set), although it's acceptable for either to throw an Exception.

```typescript
export interface FormKitTrap {
    get: TrapGetter;
    set: TrapSetter;
}
```

## KeyedValue

Arbitrary data that has properties, could be a pojo, could be an array.

```typescript
export interface KeyedValue {
    [index: number]: any;
    [index: string]: any;
}
```

## FormKitAddress

Describes the path to a particular node from the top of the tree.

```typescript
export declare type FormKitAddress = Array<string | number>;
```

## FormKitAttributeValue

The possible value types of attributes (in the schema)

```typescript
export declare type FormKitAttributeValue = string | number | boolean | undefined | FormKitSchemaAttributes | FormKitSchemaAttributesCondition;
```

## FormKitCompilerProvider

A function that accepts a callback with a token as the only argument, and must return a function that provides the true value of the token.

```typescript
export declare type FormKitCompilerProvider = (callback: (requirements: string[]) => Record<string, () => any>) => FormKitCompilerOutput;
```

## FormKitListStatement

A full loop statement in tuple syntax. Can be read like "foreach value, key? in list"

```typescript
export declare type FormKitListStatement = [value: any, key: number | string, list: FormKitListValue] | [value: any, list: FormKitListValue];
```

## FormKitListValue

The value being listed out. Can be an array, an object, or a number.

```typescript
export declare type FormKitListValue = string | Record<string, any> | Array<string | number | Record<string, any>> | number;
```

## FormKitMessage

A FormKit message is immutable, so all properties should be readonly.

```typescript
export declare type FormKitMessage = Readonly<FormKitMessageProps>;
```

## FormKitMiddleware

All FormKitMiddleware conform to the pattern of accepting a payload and a `next()` function. They can either pass the payload to the next middleware explicitly (as an argument of next), or implicitly (no argument for next).

```typescript
export declare type FormKitMiddleware<T = unknown> = (payload: T, next: (payload?: T) => T) => T;
```

## FormKitNode

FormKit's Node object produced by createNode(). All inputs, forms, and groups are instances of nodes.

```typescript
export declare type FormKitNode = {
    readonly __FKNode__: true;
    readonly value: unknown;
    _c: FormKitContext;
    add: (node: FormKitNode, index?: number) => FormKitNode;
    addProps: (props: string[]) => FormKitNode;
    at: (address: FormKitAddress | string) => FormKitNode | undefined;
    address: FormKitAddress;
    bubble: (event: FormKitEvent) => FormKitNode;
    calm: (childValue?: FormKitChildValue) => FormKitNode;
    clearErrors: (clearChildren?: boolean, sourceKey?: string) => FormKitNode;
    config: FormKitConfig;
    define: (definition: FormKitTypeDefinition) => void;
    disturb: () => FormKitNode;
    destroy: () => void;
    each: (callback: FormKitChildCallback) => void;
    emit: (event: string, payload?: any, bubble?: boolean) => FormKitNode;
    find: (selector: string, searcher?: keyof FormKitNode | FormKitSearchFunction) => FormKitNode | undefined;
    hydrate: () => FormKitNode;
    index: number;
    input: (value: unknown, async?: boolean) => Promise<unknown>;
    name: string;
    on: (eventName: string, listener: FormKitEventListener) => string;
    off: (receipt: string) => FormKitNode;
    remove: (node: FormKitNode) => FormKitNode;
    root: FormKitNode;
    resetConfig: () => void;
    reset: () => FormKitNode;
    setErrors: (localErrors: ErrorMessages, childErrors?: ErrorMessages) => void;
    settled: Promise<unknown>;
    submit: () => void;
    t: (key: string | FormKitTextFragment) => string;
    isSettled: boolean;
    use: (plugin: FormKitPlugin | FormKitPlugin[] | Set<FormKitPlugin>, run?: boolean, library?: boolean) => FormKitNode;
    walk: (callback: FormKitChildCallback, stopOnFalse?: boolean) => void;
} & Omit<FormKitContext, 'value' | 'name' | 'config'>;
```

## FormKitNodeType

These are the type of nodes that can be created — these are different from the type of inputs available and rather describe their purpose in the tree.

```typescript
export declare type FormKitNodeType = 'input' | 'list' | 'group';
```

## FormKitOptions

Options that can be used to instantiate a new node via createNode()

```typescript
export declare type FormKitOptions = Partial<Omit<FormKitContext, 'children' | 'plugins' | 'config' | 'hook'> & {
    config: Partial<FormKitConfig>;
    props: Partial<FormKitProps>;
    children: FormKitNode[] | Set<FormKitNode>;
    index?: number;
    plugins: FormKitPlugin[];
    alias: string;
    schemaAlias: string;
}>;
```

## FormKitProps

The user-land per-instance "props", which are generally akin to the props passed into components on the front end.

```typescript
export declare type FormKitProps = {
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
    [index: string]: any;
} & FormKitConfig;
```

## FormKitSchemaAttributes

DOM attributes are simple string dictionaries.

```typescript
export declare type FormKitSchemaAttributes = {
    [index: string]: FormKitAttributeValue;
} | null | FormKitSchemaAttributesCondition;
```

## FormKitSchemaComponent

Properties available when defining a generic non-formkit component.

```typescript
export declare type FormKitSchemaComponent = {
    $cmp: string;
    props?: Record<string, any>;
} & FormKitSchemaProps;
```

## FormKitSchemaCondition

A schema node that determines _which_ content to render.

```typescript
export declare type FormKitSchemaCondition = {
    if: string;
    then: FormKitSchemaNode | FormKitSchemaNode[];
    else?: FormKitSchemaNode | FormKitSchemaNode[];
};
```

## FormKitSchemaDOMNode

Properties available when using a DOM node.

```typescript
export declare type FormKitSchemaDOMNode = {
    $el: string | null;
    attrs?: FormKitSchemaAttributes;
} & FormKitSchemaProps;
```

## FormKitSchemaFormKit

Syntactic sugar for a FormKitSchemaComponent node that uses formkit.

```typescript
export declare type FormKitSchemaFormKit = {
    $formkit: string;
} & Record<string, any> & FormKitSchemaProps;
```

## FormKitSchemaNode

Properties available then defining a schema node.

```typescript
export declare type FormKitSchemaNode = FormKitSchemaDOMNode | FormKitSchemaComponent | FormKitSchemaTextNode | FormKitSchemaCondition | FormKitSchemaFormKit;
```

## FormKitSchemaTextNode

A simple text node.

```typescript
export declare type FormKitSchemaTextNode = string;
```

## FormKitSearchFunction

Breadth and Depth first searches can use a callback of this notation.

```typescript
export declare type FormKitSearchFunction = (node: FormKitNode, searchTerm?: string | number) => boolean;
```

## FormKitStore

The message store contains all of the messages that pertain to a given node.

```typescript
export declare type FormKitStore = FormKitMessageStore & {
    _n: FormKitNode;
    _b: Array<[messages: FormKitMessage[], clear?: MessageClearer]>;
    _m: ChildMessageBuffer;
    _r?: string;
    buffer: boolean;
} & FormKitStoreTraps;
```

## FormKitTextFragment

Text fragments are small pieces of text used for things like interface validation messages, or errors that may be exposed for modification or even translation.

```typescript
export declare type FormKitTextFragment = Partial<FormKitMessageProps> & {
    key: string;
    value: string;
    type: string;
};
```

## FormKitTraps

The map signature for a node's traps Map.

```typescript
export declare type FormKitTraps = Map<string | symbol, FormKitTrap>;
```

## FormKitTypeDefinition

Definition of a library item — when registering a new library item, these are the required and available properties.

```typescript
export declare type FormKitTypeDefinition = {
    type: FormKitNodeType;
    family?: string;
    forceTypeProp?: string;
    props?: string[];
    schema?: FormKitExtendableSchemaRoot | FormKitSchemaNode[] | FormKitSchemaCondition;
    component?: unknown;
    library?: Record<string, unknown>;
    features?: Array<(node: FormKitNode) => void>;
};
```

## TrapGetter

Signature for any of the node's getter traps. Keep in mind that because these are traps and not class methods, their response types are declared explicitly in the FormKitNode interface.

```typescript
export declare type TrapGetter = ((node: FormKitNode, context: FormKitContext, ...args: any[]) => unknown) | false;
```

## TrapSetter

The signature for a node's trap setter — these are more rare than getter traps, but can be really useful for blocking access to certain context properties or modifying the behavior of an assignment (ex. see setParent)

```typescript
export declare type TrapSetter = ((node: FormKitNode, context: FormKitContext, property: string | number | symbol, value: any) => boolean | never) | false;
```