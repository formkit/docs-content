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
createAutoAnimatePlugin(options?: AutoAnimateOptions): FormKitPlugin;
```

</client-only>

#### Parameters

- `options` — [AutoAnimateOptions](https://github.com/formkit/auto-animate/blob/master/src/index.ts#L596)

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
    })
  ]
}))
```

</client-only>