---
title: formkit/observer
---

# @formkit/observer


## Introduction

FormKit Observer is a utility to wrap a FormKitNode in a dependency tracking observer proxy.

## Functions

::api-entry{name="createObserver()" type="function"}
Creates the observer.

#### Signature


```typescript
createObserver(node: FormKitNode, dependencies?: FormKitDependencies): FormKitObservedNode;
```

#### Parameters

- `node` — The [FormKitNode](/api-reference/formkit-core#formkitnode) to observe.
- `dependencies` *optional* — The dependent nodes and the events that are required to watch for changes.

#### Returns

 Returns a [FormKitObservedNode](/api-reference/formkit-observer#formkitobservednode).
::

::api-entry{name="diffDeps()" type="function"}
Determines which nodes should be added as dependencies and which should be removed.

#### Signature


```typescript
diffDeps(previous: FormKitDependencies, current: FormKitDependencies): [FormKitDependencies, FormKitDependencies];
```

#### Parameters

- `previous` — The previous watcher dependencies.
- `current` — The new/current watcher dependencies.

#### Returns

 A tuple of maps: `toAdd` and `toRemove`.
::

::api-entry{name="isKilled()" type="function"}
Checks if the given node is revoked.

#### Signature


```typescript
isKilled(node: FormKitObservedNode): boolean;
```

#### Parameters

- `node` — Any observed node to check.

#### Returns

 A `boolean` indicating if the node is revoked.
::

::api-entry{name="removeListeners()" type="function"}
Remove all the receipts from the observed node and subtree.

#### Signature


```typescript
removeListeners(receipts: FormKitObserverReceipts): void;
```

#### Parameters

- `receipts` — The FormKit observer receipts to remove.
::

## TypeScript

::api-entry{name="FormKitObservedNode" type="interface"}
An API-compatible FormKitNode that is able to determine the full dependency tree of nodes and their values.


```typescript
interface FormKitObservedNode extends FormKitNode {
    _node: FormKitNode;
    deps: FormKitDependencies;
    kill: () => undefined;
    observe: () => void;
    receipts: FormKitObserverReceipts;
    stopObserve: () => FormKitDependencies;
    watch:<TextendsFormKitWatchable>(block: T, after?: (value: ReturnType<T>) => void) => void;
}
```
::

::api-entry{name="FormKitWatchable" type="interface"}
A callback to watch for nodes.


```typescript
interface FormKitWatchable<T = unknown> {
    (node: FormKitObservedNode): T;
}
```
::

::api-entry{name="FormKitDependencies" type="type"}
The dependent nodes and the events that are required to watch for changes.


```typescript
export type FormKitDependencies = Map<FormKitNode, Set<string>> & {
    active?: boolean;
};
```
::

::api-entry{name="FormKitObserverReceipts" type="type"}
A Map of nodes with the values being Maps of eventsName: receipt


```typescript
export type FormKitObserverReceipts = Map<FormKitNode, {
    [index: string]: string;
}>;
```
::
