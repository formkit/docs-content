---
title: AutoAnimate
description: Add smoothing transitions to your FormKit inputs using AutoAnimate.
---

# AutoAnimate Plugin

[AutoAnimate](https://auto-animate.formkit.com/) is a zero-config, drop-in animation utility that adds smooth transitions to any web app. It also works great with FormKit.

FormKit doesn't need much animation, but a small tasteful amount can make it clear when elements pop on and off a page, or move around — such as validation messages.

::VideoCard
---
title: "Using AutoAnimate with FormKit"
poster: "https://cdn.formk.it/web-assets/formkit-poster.jpg"
watch-time: "1 min"
youtube-id: "UpN1-tkQcjk"
---
::

## Installation

To use AutoAnimate with FormKit, install `@formkit/addons`:

```bash
yarn add @formkit/addons
```

Once you've installed the addons package, you'll need to register the AutoAnimate plugin with FormKit:

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig({
  plugins: [
    createAutoAnimatePlugin(
      { 
        /* optional AutoAnimate config */
        // default:
        duration: 250,
        easing: 'ease-in-out',
        delay: 0,
      },
      { 
        /* optional animation targets object */
        // default:
        global: ['outer', 'inner'],
        form: ['form'],
        repeater: ['items'],
      }
    )
  ]
}).mount('#app')
```

If you've installed it correctly, you should have smooth transitions when showing and hiding validation messages:

## Example

::Example
---
name: "AutoAnimate example"
init-file-tab: "formkit.config.js"
file: [
'_examples/auto-animate/auto-animate.vue',
'_examples/auto-animate/formkit.config.js'
]
---
::

That's pretty much all you need to do! AutoAnimate is intended to be a zero-config drop in utility. However, if you really want to fine tune the plugin a little more, you can provide your own AutoAnimate options or plugins. Read more about this on the [AutoAnimate documentation site](https://auto-animate.formkit.com/#usage).
