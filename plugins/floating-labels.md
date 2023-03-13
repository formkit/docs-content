---
title: Floating labels
description: easily add floating labels to your text and textarea inputs.
---

# Floating Labels Plugin

:PageToc

Using the `createFloatingLabelsPlugin` function from `@formkit/addons` you can easily add a floating label treatment to any `text` family (`text`, `email`, `url`, `date`, etc) or `textarea` FormKit input.

## Installation

To install the floating labels plugin we need to import it from `@formkit/addons`, add it our FormKit config, and include the supporting CSS styles (or provide your own).

The `createFloatingLabelsPlugin` has one option you can configure which controls whether the floating label treatment is the default treatment on applicable inputs.

```js
// formkit.config.js
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

By default the floating label plugin only take affect on a FormKit input if you set the new `floating-label` prop to `true`.

::Example
---
name: "Floating Label Manual"
file: [
'/\_content/_examples/floating-labels/off-by-default/off-by-default.vue',
'/\_content/_examples/floating-labels/off-by-default/formkit.config.js'
]
---
::

If you would like to use floating labels by default then pass the `useAsDefault` option to the plugin when you install it.

```js
// formkit.config.js
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
'/\_content/_examples/floating-labels/on-by-default/on-by-default.vue',
'/\_content/_examples/floating-labels/on-by-default/formkit.config.js'
]
---
::

That's It! Floating labels on your FormKit inputs in as little as 3 additional lines of code.
