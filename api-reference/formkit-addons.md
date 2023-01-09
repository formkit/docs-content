---
title: formkit/addons
---

# @formkit/addons

Common, optional, first-party add on features for FormKit.

You can add this package by using `npm install @formkit/addons` or `yarn add @formkit/addons`.

<page-toc></page-toc>

## Functions

### createAutoAnimatePlugin()

Adds auto-animate to each input automatically:

#### Signature

```typescript
export declare function createAutoAnimatePlugin(options?: AutoAnimateOptions): FormKitPlugin;
```

#### Parameters

* `options` *optional*

[AutoAnimateOptions](https://github.com/formkit/auto-animate/blob/master/src/index.ts#L596)

#### Returns

[FormKitPlugin](/api-reference/formkit-core#FormKitPlugin)

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