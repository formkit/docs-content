---
title: Export and modify inputs
description: Follow this guide to learn how to create, register, and use a custom FormKit input in your project.
---

# Export and modify inputs
Using the FormKit CLI we can export FormKit's open source inputs, and modify
their core structure and functionality.

## Getting Started
FormKit comes with its own CLI to make exporting inputs a breeze. At the base
directory of your project, run:
<client-only>

```sh
npx formkit export
```
</client-only>

Running this command will prompt you to select any of FormKit's open source
inputs to export.

<client-only>

```js
? What input do you want to export? ›
❯   button
    submit
    checkbox
    file
    form
    group
    hidden
    list
    radio
  ↓ select
```

</client-only>

We're going to select the text input and allow the CLI to create a new `/inputs`
 directory within `/src`.

<client-only>

```js
✔ What input do you want to export? › text
✔ What language should be used? › JavaScript
? Where should the input be exported to (relative to the current directory)? ›
./src/inputs
```

</client-only>

Taking a look at our exported input, `text.js`, we can see the underlying
schema that makes up a FormKit text input.

<client-only>

```js
// text.js
import {
  outer,
  inner,
  wrapper,
  label,
  help,
  messages,
  message,
  icon,
  prefix,
  suffix,
  textInput,
} from '@formkit/inputs'
/**
 * Input definition for a text.
 * @public
 */
export const text = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    wrapper(
      label('$label'),
      inner(
        icon('prefix', 'label'),
        prefix(),
        textInput(),
        suffix(),
        icon('suffix')
      )
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [],
}

```
</client-only>

In this example, we are not going to overwrite the default FormKit text input,
but instead, create a custom text input that is going to use floating labels.
Let's go ahead and duplicate the text file we just exported and name it
`floatingLabelTextInput.js`.

<client-only>

```sh
src/
  |inputs/
  |   |- text.js
  |   |- floatingLabelTextInput.js
```

</client-only>

In our new `floatingLabelTextInput.js`, let's go ahead and change the name of
exported variable to `floatingLabelTextInput` from `text`.
<client-only>

```js
...
export const t̶e̶x̶t̶ floatingLabelTextInput = {
  ...
}

```

</client-only>

Now we are going to modify the FormKit config object to include our custom text
input like so:

<client-only>

```js
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import { floatingLabelTextInput } from '../src/inputs/floatingLabelTextInput'

const config = defaultConfig({
	inputs: {
		floatingLabelTextInput
	}
})

createApp(App).use(plugin, config).mount('#app')


```

</client-only>

## Modifying schema to use floating labels.
Now we're going to modify the schema of `floatingLabelTextInput` to use floating
labels. Let's start by moving the label section below the `textInput` schema
section.

<client-only>

```js
export const floatingLabelTextInput = {
  schema: outer(
    wrapper(
      /*
      * Removing label
      */
      l̶a̶b̶e̶l̶(̶'̶$̶l̶a̶b̶e̶l̶'̶)̶,
      inner(
        icon('prefix', 'label'),
        prefix(),
        textInput(),
        /*
        * New label placement
        */
        label('$label'),
        suffix(),
        icon('suffix')
      )
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  ...
}

```

</client-only>

### Extend function
Importing the `extend` function from FormKit's input package allows us to extend
the schema of any section. In this example, we are using it to extend the label
section and change its class name from its default `formkit-label` to
`formkit-label-floating`.

<client-only>

```js
import {
  outer,
  inner,
  wrapper,
  label,
  help,
  messages,
  message,
  icon,
  prefix,
  suffix,
  textInput,
  /*
  * Importing $extend
  */
  $extend
} from '@formkit/inputs'

export const floatingLabelTextInput = {
  schema: outer(
    wrapper(
      inner(
        icon('prefix', 'label'),
        prefix(),
        textInput(),
        /*
        * Using $extend function to pass attrs object to label section with new
          class definition.
        */
        $extend(label('$label'), {
          attrs: {
            class: '$classes.labelFloating'
          }
        }),
        suffix(),
        icon('suffix')
      )
    ),
    help('$help'),
    messages(message('$message.value'))
  ),

  type: 'input',

  props: [],

  features: [],
}
```

</client-only>

After adding appropriate styling, we can see that our new custom input uses floating labels.

<example
  :file="[
    '/_content/examples/guides/export-inputs/final-result/example.vue',
    '/_content/examples/guides/export-inputs/final-result/text.js',
    '/_content/examples/guides/export-inputs/final-result/floatingLabelTextInput.js',
    '/_content/examples/guides/export-inputs/final-result/formkit.config.js',
  ]"
  init-file-tab="example.vue"
  init-file-tab="formkit.config.js"
  :editable="true"></example>







