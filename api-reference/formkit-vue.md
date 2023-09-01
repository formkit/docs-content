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

### defineFormKitConfig()

#### Signature

<client-only>

```typescript
defineFormKitConfig(config: DefaultConfigOptions | (() => DefaultConfigOptions)): () => DefaultConfigOptions;
```

</client-only>

#### Parameters

- `config`

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
useInput<Props extends FormKitInputs<Props>, Context extends SetupContext<any, any>>(props: Props, context: Context, options?: FormKitOptions): FormKitNode;
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

### FormKitSetupContext

Type definition for the FormKit component Vue context.

<client-only>

```typescript
interface FormKitSetupContext<Props extends FormKitInputs<Props>> {
    attrs: any;
    emit: FormKitEvents<Props>;
    expose(exposed:{
        
    }): void;
    props:{
        
    }&Props&{
        onInput: (value: any) => void;
    };
    slots: Slots<Props>;
}
```

</client-only>

### FormKitSummaryMessage

<client-only>

```typescript
interface FormKitSummaryMessage {
    id: string;
    key: string;
    message: string;
    type: string;
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
    locale: string;
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
export type DefaultConfigOptions = FormKitOptions & Partial<PluginConfigs> & Record<string, unknown>;
```

</client-only>

### FormKitComponent

The TypeScript definition for the FormKit component.

<client-only>

```typescript
export type FormKitComponent = <Props extends FormKitInputs<Props>>(props: Props & VNodeProps & AllowedComponentProps & ComponentCustomProps, context?: Pick<FormKitSetupContext<Props>, 'attrs' | 'emit' | 'slots'>, setup?: FormKitSetupContext<Props>) => VNode<RendererNode, RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: FormKitSetupContext<Props>;
};
```

</client-only>

### Renderable

The types of values that can be rendered by Vue.

<client-only>

```typescript
export type Renderable = null | string | number | boolean | VirtualNode;
```

</client-only>

### RenderableList

A list of renderable items.

<client-only>

```typescript
export type RenderableList = Renderable | Renderable[] | (Renderable | Renderable[])[];
```

</client-only>

### RenderableSlot

A slot function that can be rendered.

<client-only>

```typescript
export type RenderableSlot = (data?: Record<string, any>, key?: object) => RenderableList;
```

</client-only>

### RenderableSlots

An object of slots

<client-only>

```typescript
export type RenderableSlots = Record<string, RenderableSlot>;
```

</client-only>

### Slots

The type definition for the FormKit’s slots, this is not intended to be used directly.

<client-only>

```typescript
export type Slots<Props extends FormKitInputs<Props>> = InputType<Props> extends keyof FormKitInputSlots<Props> ? FormKitInputSlots<Props>[InputType<Props>] : {};
```

</client-only>

### VirtualNode

The actual signature of a VNode in Vue.

<client-only>

```typescript
export type VirtualNode = VNode<RendererNode, RendererElement, {
    [key: string]: any;
}>;
```

</client-only>