---
title: formkit/addons
---

# @formkit/addons

<page-toc></page-toc>

## Introduction

Common, optional, first-party add on features for FormKit.

You can add this package by using `npm install @formkit/addons` or `yarn add @formkit/addons`.

## Functions

### createAutoAnimatePlugin()

Adds auto-animate to each input automatically:

#### Signature

<client-only>

```typescript
createAutoAnimatePlugin(options?: AutoAnimateOptions, animationTargets?: Record<string, string[]>): FormKitPlugin;
```

</client-only>

#### Parameters

- `options` *optional* — [AutoAnimateOptions](https://github.com/formkit/auto-animate/blob/master/src/index.ts#L596)
- `animationTargets` *optional* — A map of input types and an array of their sections that should be animated.

#### Returns

 [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

#### Examples

<client-only>

```javascript
import { createApp } from 'vue'
import App from 'App.vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(app).use(plugin, defaultPlugin({
  plugins: [
    createAutoAnimatePlugin({
      // optional config
      duration: 250,
      easing: 'ease-in-out',
      delay: 0,
    },
    {
      // optional animation targets object
      global: ['outer', 'inner'],
      form: ['form'],
      repeater: ['items'],
    })
  ]
}))
```

</client-only>

### createAutoHeightTextareaPlugin()

Creates a new auto-height textarea plugin.

#### Signature

<client-only>

```typescript
createAutoHeightTextareaPlugin(): FormKitPlugin;
```

</client-only>

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createFloatingLabelsPlugin()

Creates a new floating label plugin.

#### Signature

<client-only>

```typescript
createFloatingLabelsPlugin(FloatingLabelsOptions?: FloatingLabelsOptions): FormKitPlugin;
```

</client-only>

#### Parameters

- `FloatingLabelsOptions` *optional* — The options of [FloatingLabelsOptions](#floatinglabelsoptions) to pass to the plugin

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createLocalStoragePlugin()

Creates a new save-to-local-storage plugin.

#### Signature

<client-only>

```typescript
createLocalStoragePlugin(localStorageOptions?: LocalStorageOptions): FormKitPlugin;
```

</client-only>

#### Parameters

- `localStorageOptions` *optional*

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createMultiStepPlugin()

Creates a new multi-step plugin.

#### Signature

<client-only>

```typescript
createMultiStepPlugin(options?: MultiStepOptions): FormKitPlugin;
```

</client-only>

#### Parameters

- `options` *optional* — The options of [MultiStepOptions](#multistepoptions) to pass to the plugin

#### Returns

 A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

## TypeScript

### FloatingLabelsOptions

The options to be passed to [createFloatingLabelsPlugin](#createfloatinglabelsplugin)

<client-only>

```typescript
interface FloatingLabelsOptions {
    useAsDefault?: boolean;
}
```

</client-only>

### LocalStorageOptions

The options to be passed to [createLocalStoragePlugin](#createlocalstorageplugin)

<client-only>

```typescript
interface LocalStorageOptions {
    beforeLoad?: (payload: any) => any;
    beforeSave?: (payload: any) => any;
    control?: string;
    debounce?: number;
    key?: string | number;
    maxAge?: number;
    prefix?: string;
}
```

</client-only>

### MultiStepOptions

The options to be passed to [createMultiStepPlugin](#createmultistepplugin)

<client-only>

```typescript
interface MultiStepOptions {
    allowIncomplete?: boolean;
    hideProgressLabels?: boolean;
    tabStyle?:'tab' | 'progress';
}
```

</client-only>