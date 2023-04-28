---
title: Auto-Height Textarea Plugin
description: Automatically adjust the height of your textareas based on their content.
---

# Auto-Height Textarea Plugin

:PageToc

Using the `createAutoHeightTextareaPlugin` function from `@formkit/addons` you can use a new prop (`auto-height`) on your Formkit inputs of type `textarea` to have them automatically grow and shrink in size based on their content.

## Installation

To install the auto-height textarea plugin, we need to:

1. import it from `@formkit/addons`.
2. Add it to our FormKit config as a plugin.
3. Add the new `auto-height` prop to any `textarea`.

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