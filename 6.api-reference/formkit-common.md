---
title: formkit/common
---

# @formkit/common


## TypeScript

### FormKitLibrary

The full library of available FormKit inputs.


```typescript
interface FormKitLibrary {
    [index: string]: FormKitTypeDefinition;
}
```

### FormKitTypeDefinition

Definition of a library item — when registering a new library item, these are the required and available properties.


```typescript
type FormKitTypeDefinition = {
    type: FormKitNodeType;
    schema: FormKitSchemaNode[] | FormKitSchemaCondition;
};
```

</client-only>