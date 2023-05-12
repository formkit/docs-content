---
title: formkit/common
---

# @formkit/common

<page-toc></page-toc>

## TypeScript

### FormKitLibrary

The full library of available FormKit inputs.

<client-only>

```typescript
interface FormKitLibrary {
    [index: string]: FormKitTypeDefinition;
}
```

</client-only>

### FormKitTypeDefinition

Definition of a library item — when registering a new library item, these are the required and available properties.

<client-only>

```typescript
type FormKitTypeDefinition = {
    type: FormKitNodeType;
    schema: FormKitSchemaNode[] | FormKitSchemaCondition;
};
```

</client-only>