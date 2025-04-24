---
title: formkit/typebox
---

# @formkit/typebox

<page-toc></page-toc>

## Introduction

The first-party typebox package/plugin for FormKit. Read the [documentation](https://formkit.com/essentials/typebox) for usage instructions.

## Functions

### createTypeboxPlugin()

Creates a new Typebox schema plugin for form validation.

#### Signature

<client-only>

```typescript
createTypeboxPlugin<T extends TSchema>(typeboxSchema: T, submitCallback: (payload: Static<typeof typeboxSchema>, node: FormKitNode | undefined) => void | Promise<void>): [FormKitPlugin, (payload: any, node: FormKitNode | undefined) => void];
```

</client-only>

#### Parameters

- `typeboxSchema` — A Typebox schema to validate the form against.
- `submitCallback` — A callback to run when the form is submitted and it passes validation.

#### Returns

 A tuple of a [FormKitPlugin](/api-reference/formkit-core#formkitplugin) and a submit handler.
