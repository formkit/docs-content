---
title: formkit/zod
---

# @formkit/zod

<page-toc></page-toc>

## Introduction

The first-party zod package/plugin for FormKit. Read the [documentation](https://formkit.com/essentials/zod) for usage instructions.

## Functions

### createZodPlugin()

Creates a new Zod schema plugin for form validation.

#### Signature

<client-only>

```typescript
createZodPlugin<Z extends z.ZodTypeAny>(zodSchema: Z, submitCallback: (payload: z.infer<typeof zodSchema>, node: FormKitNode | undefined) => void | Promise<void>): [FormKitPlugin, (payload: any, node: FormKitNode | undefined) => void];
```

</client-only>

#### Parameters

- `zodSchema` — A Zod schema to validate the form against.
- `submitCallback` — A callback to run when the form is submitted and it passes validation.

#### Returns

 A tuple of a [FormKitPlugin](/api-reference/formkit-core#formkitplugin) and a submit handler.