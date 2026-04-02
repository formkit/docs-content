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

Once you've installed the addons package, you'll need to register the plugin with FormKit. Tailwind and other `rootClasses`-based setups can style the plugin directly, while Genesis or custom CSS setups should include the supporting stylesheet or provide their own styles. The `createFloatingLabelsPlugin` has one option you can configure which controls whether the floating label treatment is the default treatment on applicable inputs:

::FrameworkOnly{framework="vue"}

```js
// formkit.config.ts
import { defaultConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true, // defaults to false
    }),
  ],
})

export default config
```

::

::FrameworkOnly{framework="react"}

```jsx
// formkit.config.react.jsx
import { defineFormKitConfig } from '@formkit/react'
import { createFloatingLabelsPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
})
```

::

## Usage

By default the floating label plugin only takes effect on a FormKit input if you set the new `floating-label` prop to `true`.

In :FrameworkText{vue="Vue templates this prop is written as <code>floating-label</code>." react="React JSX this prop is written as <code>floatingLabel</code>."}

::Example
---
name: "Floating Label Manual"
file: [
  "_examples/floating-labels/off-by-default/off-by-default.vue",
  "_examples/floating-labels/off-by-default/formkit.config.ts"
]
react-file: [
  "_examples/floating-labels/off-by-default/off-by-default.react.jsx",
  "_examples/floating-labels/off-by-default/formkit.config.react.jsx"
]
---
::

If you would like to use floating labels by default then pass the `useAsDefault` option to the plugin when you install it.

::FrameworkOnly{framework="vue"}

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

::

::FrameworkOnly{framework="react"}

```jsx
// formkit.config.react.jsx
...
plugins: [
  createFloatingLabelsPlugin({
    useAsDefault: true,
  }),
],
...
```

::

When floating labels are set as the default you can still disable them on a FormKit input by setting the `floating-label` prop to `false`.

::Example
---
name: "Floating Label Automatic"
file: [
  "_examples/floating-labels/on-by-default/on-by-default.vue",
  "_examples/floating-labels/on-by-default/formkit.config.ts"
]
react-file: [
  "_examples/floating-labels/on-by-default/on-by-default.react.jsx",
  "_examples/floating-labels/on-by-default/formkit.config.react.jsx"
]
---
::

That's It! Floating labels on your FormKit inputs in as little as 3 additional lines of code.
