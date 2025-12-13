---
title: formkit/common
---

# @formkit/common

## Introduction

Common types and utilities shared across FormKit packages.

## TypeScript

::api-entry{name="FormKitLibrary" type="interface"}
The full library of available FormKit inputs.

#### Signature

```typescript
interface FormKitLibrary {
    [index: string]: FormKitTypeDefinition;
}
```
::

::api-entry{name="FormKitTypeDefinition" type="type"}
Definition of a library item — when registering a new library item, these are the required and available properties.

#### Signature

```typescript
type FormKitTypeDefinition = {
    type: FormKitNodeType;
    schema: FormKitSchemaNode[] | FormKitSchemaCondition;
};
```
::
