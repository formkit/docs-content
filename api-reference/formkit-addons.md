---
title: formkit/addons
---

# @formkit/addons

<page-toc></page-toc>

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

* `options` — [AutoAnimateOptions](https://github.com/formkit/auto-animate/blob/master/src/index.ts#L596)

#### Returns

[FormKitPlugin](/api-reference/formkit-core#formkitplugin)

#### Examples

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