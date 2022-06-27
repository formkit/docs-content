---
title: AutoAnimate
description: Add smoothing transitions to your FormKit inputs using AutoAnimate.
---

# AutoAnimate Plugin

[AutoAnimate](https://auto-animate.formkit.com/) is a zero-config, drop-in animation utility that adds smooth transitions to any web app, and while it does well — it also works great with FormKit.

FormKit doesn't need very much animation, but in some places its nice to use just small tasteful amount. For example, when animating validation messages on and off.

## Installation

To use AutoAnimate with FormKit, install `@formkit/addons`.

```bash
yarn add @formkit/addons
```

Once you've installed the addons package, you'll need to register the AutoAnimate plugin with FormKit.

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig({
  plugins: [
    createAutoAnimatePlugin({
      // optional config
    })
  ]
}).mount('#app')
```

If you've installed it correctly, you should have smooth transitions on when showing and hiding validation messages.

## Example

<example
name="AutoAnimate example"
:file="[
  '/\_content/examples/auto-animate/auto-animate.vue',
  '/\_content/examples/auto-animate/formkit.config.js'
]">
</example>

That's pretty much all you need to do! AutoAnimate is intended to be a zero-config drop in utility. However, if you really want to fine tune the plugin a little more, you can provide your own AutoAnimate options or plugins. Read more about this on the [AutoAnimate documentation site](https://auto-animate.formkit.com/#usage).
