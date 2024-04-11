---
title: Auto-Height Textarea Plugin
description: Automatically adjust the height of your textareas based on their content.
---

# Auto-Height Textarea Plugin

Using the `createAutoHeightTextareaPlugin` function from `@formkit/addons` you can use a new prop (`auto-height`) on your Formkit inputs of type `textarea` to have them automatically grow and shrink in size based on their content.

## Installation

To use this plugin with FormKit, install `@formkit/addons`:

```bash
yarn add @formkit/addons
```

Once you've installed the addons package, you'll need to register the plugin with FormKit:

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

Available field props:

- **max-auto-height** *Number* Establishes the upper limit for the expansion of a text area, allowing it to dynamically grow in height while ensuring it does not exceed the specified maximum height.

::Example
---
name: "Auto-Height Textarea"
file: [
'/\_content/_examples/auto-height-textarea/index.vue',
'/\_content/_examples/auto-height-textarea/formkit.config.js'
]
---
::
