---
title: formkit/vue
---

# @formkit/vue

<page-toc></page-toc>

## Introduction

The official FormKit/Vue integration. This package is responsible for integrating Vue with FormKit core and other first-party packages.

## Functions

### createInput()

Creates a new input from schema or a Vue component with the "standard" FormKit features in place such as labels, help text, validation messages, and class support.

#### Signature

<client-only>

```typescript
createInput(schemaOrComponent: FormKitSchemaNode | FormKitSection | Component, definitionOptions?: Partial<FormKitTypeDefinition>): FormKitTypeDefinition;
```

</client-only>

#### Parameters

- `schemaOrComponent` — The actual schema of the input or the component.
- `definitionOptions` *optional* — Any options in the FormKitTypeDefinition you want to define.

#### Returns

 [FormKitTypeDefinition](/api-reference/formkit-core#formkittypedefinition)

### onSSRComplete()

Register a callback for when SSR is complete. No-op if not in a server context.

#### Signature

<client-only>

```typescript
onSSRComplete(app: App<any> | undefined, callback: CallableFunction): void;
```

</client-only>

#### Parameters

- `app` — The Vue application.
- `callback` — The callback to be called after SSR is complete.

### ssrComplete()

Flush all callbacks registered with onSSRComplete for a given app.

#### Signature

<client-only>

```typescript
ssrComplete(app: App<any>): void;
```

</client-only>

#### Parameters

- `app` — The Vue application.

### useInput()

A composable for creating a new FormKit node.

#### Signature

<client-only>

```typescript
useInput(props: FormKitComponentProps, context: SetupContext<any>, options?: FormKitOptions): FormKitNode;
```

</client-only>

#### Parameters

- `props`
- `context`
- `options` *optional*

#### Returns

 [FormKitNode](/api-reference/formkit-core#formkitnode)

## TypeScript

### FormKitComponentLibrary

A library of components available to the schema (in addition to globally registered ones)

<client-only>

```typescript
interface FormKitComponentLibrary {
    [index: string]: Component;
}
```

</client-only>

### FormKitComponentProps

FormKit props of a component

<client-only>

```typescript
interface FormKitComponentProps {
    classes?: Record<string, string | Record<string, boolean> | FormKitClasses>;
    config: Record<string, any>;
    dynamic?: boolean;
    errors: string[];
    index?: number;
    inputErrors: Record<string, string | string[]>;
    modelValue?: any;
    name?: string;
    parent?: FormKitNode;
    plugins: FormKitPlugin[];
    sync?: boolean;
    type?: string | FormKitTypeDefinition;
    validation?: any;
}
```

</client-only>

### FormKitVuePlugin

The global instance of the FormKit plugin.

<client-only>

```typescript
interface FormKitVuePlugin {
    clearErrors: (formId: string) => void;
    get: (id: string) => FormKitNode | undefined;
    reset: (formId: string, resetTo?: unknown) => void;
    setErrors: (formId: string, errors: string[] | Record<string, string | string[]>, inputErrors?: string[] | Record<string, string | string[]>) => void;
    setLocale: (locale: string) => void;
    submit: (formId: string) => void;
}
```

</client-only>

### PluginConfigs

Configuration for plugins

<client-only>

```typescript
interface PluginConfigs {
    iconLoader: FormKitIconLoader;
    iconLoaderUrl: FormKitIconLoaderUrl;
    icons: Record<string, string | undefined>;
    inputs: FormKitLibrary;
    locales: FormKitLocaleRegistry;
    messages: Record<string, Partial<FormKitLocale>>;
    rules: Record<string, FormKitValidationRule>;
    theme: string;
}
```

</client-only>

### DefaultConfigOptions

The allowed options for defaultConfig.

<client-only>

```typescript
type DefaultConfigOptions = FormKitOptions & Partial<PluginConfigs> & Record<string, unknown>;
```

</client-only>

### Renderable

The types of values that can be rendered by Vue.

<client-only>

```typescript
type Renderable = null | string | number | boolean | VirtualNode;
```

</client-only>

### RenderableList

A list of renderable items.

<client-only>

```typescript
type RenderableList = Renderable | Renderable[] | (Renderable | Renderable[])[];
```

</client-only>

### RenderableSlot

A slot function that can be rendered.

<client-only>

```typescript
type RenderableSlot = (data?: Record<string, any>, key?: object) => RenderableList;
```

</client-only>

### RenderableSlots

An object of slots

<client-only>

```typescript
type RenderableSlots = Record<string, RenderableSlot>;
```

</client-only>

### VirtualNode

The actual signature of a VNode in Vue.

<client-only>

```typescript
type VirtualNode = VNode<RendererNode, RendererElement, {
    [key: string]: any;
}>;
```

</client-only>