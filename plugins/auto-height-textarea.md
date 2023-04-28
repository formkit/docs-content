---
title: Auto-Height Textarea Plugin
description: Automatically adjust the height of your textareas based on their content.
---

# Auto-Height Textarea Plugin

:PageToc

Using the `createAutoHeightTextareaPlugin` function from `@formkit/addons` you can use a new prop (`auto-height`) on your Formkit inputs of type `textarea` to have them automatically grow and shrink in size based on their content.

## Installation

To install the auto-height textarea plugin we need to import it from `@formkit/addons`, add it our FormKit config, and then enable the plugin on our target form.

```js
// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [
    createAutoHeightTextareaPlugin(),
  ],
})

export default config
```

## Usage

To enable auto-height on a text area add the `auto-height` prop to a FormKit input of type `textarea`.

::Example
---
name: "Auto-Height Textarea"
file: [
'/\_content/_examples/auto-height-textarea/index.vue',
'/\_content/_examples/auto-height-textarea/formkit.config.js'
]
---
::