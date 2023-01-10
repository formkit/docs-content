---
title: formkit/observer
---

# @formkit/observer

<page-toc></page-toc>

## Functions

### applyListeners()

Given two maps (toAdd and toRemove), apply the dependencies as event listeners on the underlying nodes.

#### Signature

```typescript
applyListeners(node: FormKitObservedNode, [toAdd, toRemove]: [FormKitDependencies, FormKitDependencies], callback: FormKitEventListener): void;
```

#### Parameters

* `node` — The node to apply dependencies to
* `[toAdd, toRemove]`
* `callback`

### createObserver()

The FormKitNode to observe.

#### Signature

```typescript
createObserver(node: FormKitNode, dependencies?: FormKitDependencies): FormKitObservedNode;
```

#### Parameters

* `node` — Any formkit node to observe.
* `dependencies` *optional*

#### Returns

### diffDeps()

Determines which nodes should be added as dependencies and which should be removed.

#### Signature

```typescript
diffDeps(previous: FormKitDependencies, current: FormKitDependencies): [FormKitDependencies, FormKitDependencies];
```

#### Parameters

* `previous` — The previous watcher dependencies
* `current` — The new/current watcher dependencies

#### Returns

### isKilled()

Checks if the given noe is revoked.

#### Signature

```typescript
isKilled(node: FormKitObservedNode): boolean;
```

#### Parameters

* `node` — Any observed node to check.

#### Returns

### removeListeners()

Remove all the receipts from the observed node and subtree.

#### Signature

```typescript
removeListeners(receipts: FormKitObserverReceipts): void;
```

#### Parameters

* `receipts` — The formkit observer receipts to remove

## TypeScript

### FormKitObservedNode

An API compatible FormKitNode that is able to determine the full dependency tree of nodes and their values.

```typescript
interface FormKitObservedNode extends FormKitNode {
    deps: FormKitDependencies;
    kill: () => void;
    observe: () => void;
    receipts: FormKitObserverReceipts;
    stopObserve: () => FormKitDependencies;
    watch: (block: FormKitWatchable) => void;
}
```

### FormKitWatchable

A callback to watch for nodes.

```typescript
interface FormKitWatchable {
    (node: FormKitObservedNode): any;
}
```