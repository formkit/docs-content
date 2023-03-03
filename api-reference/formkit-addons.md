---
title: formkit/addons
---

# @formkit/addons

:PageToc

## Introduction

Common, optional, first-party add on features for FormKit.

You can add this package by using `npm install @formkit/addons` or `yarn add @formkit/addons`.

## Functions

### createAutoAnimatePlugin()

Adds auto-animate to each input automatically:

#### Signature

```typescript
createAutoAnimatePlugin(options?: AutoAnimateOptions): FormKitPlugin;
```

#### Parameters

- `options` — [AutoAnimateOptions](https://github.com/formkit/auto-animate/blob/master/src/index.ts#L596)

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)

#### Examples

```javascript
import { createApp } from 'vue'
import App from 'App.vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(app).use(
  plugin,
  defaultPlugin({
    plugins: [
      createAutoAnimatePlugin({
        // optional config
      }),
    ],
  })
)
```

### createFloatingLabelsPlugin()

Creates a new floating label plugin.

#### Signature

```typescript
createFloatingLabelsPlugin(FloatingLabelsOptions?: FloatingLabelsOptions): FormKitPlugin;
```

#### Parameters

- `FloatingLabelsOptions` — The options of [FloatingLabelsOptions](#floatinglabelsoptions) to pass to the plugin

#### Returns

A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

### createMultiStepPlugin()

Creates a new multi-step plugin.

#### Signature

```typescript
createMultiStepPlugin(options?: MultiStepOptions): FormKitPlugin;
```

#### Parameters

- `options` — The options of [MultiStepOptions](#multistepoptions) to pass to the plugin

#### Returns

A [FormKitPlugin](/api-reference/formkit-core#formkitplugin)

## TypeScript

### FloatingLabelsOptions

The options to be passed to [createFloatingLabelsPlugin](#createfloatinglabelsplugin)

```typescript
interface FloatingLabelsOptions {
  useAsDefault?: boolean
}
```

### MultiStepOptions

The options to be passed to [createMultiStepPlugin](#createmultistepplugin)

```typescript
interface MultiStepOptions {
  allowIncomplete?: boolean
  hideProgressLabels?: boolean
  tabStyle?: 'tab' | 'progress'
}
```
