---
title: Floating labels
description: easily add floating labels to your text and textarea inputs.
---

# Floating Labels Plugin

Using the `createFloatingLabelsPlugin` function from `@formkit/addons` you can easily add a floating label treatment to any `text` family (`text`, `email`, `url`, `date`, etc) or `textarea` FormKit input.

## Installation

To use this plugin with FormKit, install `@formkit/addons`:

```bash
yarn add @formkit/addons
```

Once you've installed the addons package, you'll need to register the plugin with FormKit and include the supporting CSS styles. The `createFloatingLabelsPlugin` has one option you can configure which controls whether the floating label treatment is the default treatment on applicable inputs:

```js
// formkit.config.ts
import { defaultConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'

const config = defaultConfig({
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true, // defaults to false
    }),
  ],
})

export default config
```

## Usage

By default the floating label plugin only takes effect on a FormKit input if you set the new `floating-label` prop to `true`.

::Example
---
name: "Floating Label Manual"
file: [
  "_examples/floating-labels/off-by-default/off-by-default.vue",
  "_examples/floating-labels/off-by-default/formkit.config.ts"
]
---
::

If you would like to use floating labels by default then pass the `useAsDefault` option to the plugin when you install it.

```js
// formkit.config.ts
...
plugins: [
  createFloatingLabelsPlugin({
    useAsDefault: true
  }),
],
...
```

When floating labels are set as the default you can still disable them on a FormKit input by setting the `floating-label` prop to `false`.

::Example
---
name: "Floating Label Automatic"
file: [
  "_examples/floating-labels/on-by-default/on-by-default.vue",
  "_examples/floating-labels/on-by-default/formkit.config.ts"
]
---
::

That's It! Floating labels on your FormKit inputs in as little as 3 additional lines of code.
