---
title: formkit/vue
---

# @formkit/vue


## Introduction

The official FormKit/Vue integration. This package is responsible for integrating Vue with FormKit core and other first-party packages.

## Functions

### createInput()

Creates a new input from schema or a Vue component with the "standard" FormKit features in place such as labels, help text, validation messages, and class support.

#### Signature


```typescript
createInput(schemaOrComponent: FormKitSchemaNode | FormKitSection | Component, definitionOptions?: Partial<FormKitTypeDefinition>): FormKitTypeDefinition;
```

#### Parameters

- `schemaOrComponent` — The actual schema of the input or the component.
- `definitionOptions` *optional* — Any options in the FormKitTypeDefinition you want to define.

#### Returns

 [FormKitTypeDefinition](/api-reference/formkit-core#formkittypedefinition)

### defineFormKitConfig()

#### Signature


```typescript
defineFormKitConfig(config: DefaultConfigOptions | (() => DefaultConfigOptions)): () => DefaultConfigOptions;
```

#### Parameters

- `config`

### onSSRComplete()

Register a callback for when SSR is complete. No-op if not in a server context.

#### Signature


```typescript
onSSRComplete(app: App<any> | undefined, callback: CallableFunction): void;
```

#### Parameters

- `app` — The Vue application.
- `callback` — The callback to be called after SSR is complete.

### ssrComplete()

Flush all callbacks registered with onSSRComplete for a given app.

#### Signature


```typescript
ssrComplete(app: App<any>): void;
```

#### Parameters

- `app` — The Vue application.

### useConfig()

#### Signature


```typescript
useConfig(config?: FormKitOptions | ((...args: any[]) => FormKitOptions)): void;
```

#### Parameters

- `config` *optional*

### useInput()

A composable for creating a new FormKit node.

#### Signature


```typescript
useInput<Props extends FormKitInputs<Props>, Context extends SetupContext<any, any>>(props: Props, context: Context, options?: FormKitOptions): FormKitNode;
```

#### Parameters

- `props`
- `context`
- `options` *optional*

#### Returns

 [FormKitNode](/api-reference/formkit-core#formkitnode)

## TypeScript

### FormKitComponentLibrary

A library of components available to the schema (in addition to globally registered ones)


```typescript
interface FormKitComponentLibrary {
    [index: string]: Component;
}
```

### FormKitSetupContext

Type definition for the FormKit component Vue context.


```typescript
interface FormKitSetupContext<Props extends FormKitInputs<Props>> {
    attrs: any;
    emit: FormKitEvents<Props>;
    expose(exposed:{
        
    }): void;
    props:{
        
    }&Props;
    slots: Slots<Props>;
}
```

### FormKitSummaryMessage


```typescript
interface FormKitSummaryMessage {
    id: string;
    key: string;
    message: string;
    type: string;
}
```

### FormKitVuePlugin

The global instance of the FormKit plugin.


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

### PluginConfigs

Configuration for plugins


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

### DefaultConfigOptions

The allowed options for defaultConfig.


```typescript
export type DefaultConfigOptions = FormKitOptions & Partial<PluginConfigs> & Record<string, unknown>;
```

### FormKitComponent

The TypeScript definition for the FormKit component.


```typescript
export type FormKitComponent = <Props extends FormKitInputs<Props>>(props: Props & VNodeProps & AllowedComponentProps & ComponentCustomProps, context?: Pick<FormKitSetupContext<Props>, 'attrs' | 'emit' | 'slots'>, setup?: FormKitSetupContext<Props>) => VNode<RendererNode, RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: FormKitSetupContext<Props>;
};
```

### Renderable

The types of values that can be rendered by Vue.


```typescript
export type Renderable = null | string | number | boolean | VirtualNode;
```

### RenderableList

A list of renderable items.


```typescript
export type RenderableList = Renderable | Renderable[] | (Renderable | Renderable[])[];
```

### RenderableSlot

A slot function that can be rendered.


```typescript
export type RenderableSlot = (data?: Record<string, any>, key?: object) => RenderableList;
```

### RenderableSlots

An object of slots


```typescript
export type RenderableSlots = Record<string, RenderableSlot>;
```

### Slots

The type definition for the FormKit’s slots, this is not intended to be used directly.


```typescript
export type Slots<Props extends FormKitInputs<Props>> = InputType<Props> extends keyof FormKitInputSlots<Props> ? FormKitInputSlots<Props>[InputType<Props>] : {};
```

### VirtualNode

The actual signature of a VNode in Vue.


```typescript
export type VirtualNode = VNode<RendererNode, RendererElement, {
    [key: string]: any;
}>;
```

</client-only>