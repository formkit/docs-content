---
title: formkit/vue
---

# @formkit/vue

<page-toc></page-toc>

## Functions

### createInput()

Creates a new input from schema or a Vue component with the "standard" FormKit features in place such as labels, help text, validation messages, and class support.

#### Signature

```typescript
export declare function createInput(schemaOrComponent: FormKitSchemaNode | FormKitSection | Component, definitionOptions?: Partial<FormKitTypeDefinition>): FormKitTypeDefinition;
```

#### Parameters

* `schemaOrComponent` — The actual schema of the input.
* `definitionOptions` *optional*

#### Returns

[FormKitTypeDefinition](/api-reference/formkit-core#formkittypedefinition)

### useInput()

A composable for creating a new FormKit node.

#### Signature

```typescript
export declare function useInput(props: FormKitComponentProps, context: SetupContext<any>, options?: FormKitOptions): FormKitNode;
```

#### Parameters

* `props`
* `context`
* `options` *optional*

#### Returns

[FormKitNode](/api-reference/formkit-core#formkitnode)

### watchVerbose()

A special watcher for Vue that reports the location of a deep mutation.

#### Signature

```typescript
export default function watchVerbose<T extends Ref<unknown> | Record<string, any>>(obj: T, callback: (keypath: string[], value?: unknown, obj?: T) => void): void;
```

#### Parameters

* `obj` *optional* — An object to observe at depth
* `callback` — A callback that

## TypeScript

### FormKitVuePlugin

The global instance of the FormKit plugin.

```typescript
export interface FormKitVuePlugin {
    clearErrors: (formId: string) => void;
    get: (id: string) => FormKitNode | undefined;
    reset: (formId: string, resetTo?: unknown) => void;
    setErrors: (formId: string, errors: string[] | Record<string, string | string[]>, inputErrors?: string[] | Record<string, string | string[]>) => void;
    setLocale: (locale: string) => void;
    submit: (formId: string) => void;
}
```

### DefaultConfigOptions

The allowed options for defaultConfig.

```typescript
export declare type DefaultConfigOptions = FormKitOptions & Partial<PluginConfigs> & Record<string, unknown>;
```