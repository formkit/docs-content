---
title: Custom Inputs
description: Create your own inputs that automatically inherit FormKit’s value-added features such as validation, error messages, data modeling, grouping, labels, help text and more.
---

# Custom inputs

<cta label="Building your first custom input?" type="ghost" href="/guides/create-a-custom-input" button="Read the guide"></cta>

FormKit includes [many inputs](/inputs) out of the box, but you can also define your own inputs that automatically inherit FormKit’s value-added features like validation, error messages, data modeling, grouping, labels, help text and others.

Inputs are comprised of two essential parts:

1. [An input definition](#input-definition).
2. The input’s code: [a schema](#schema-inputs) or a [component](#component-inputs).

<callout type="warning" label="Start with the guide">
If you are just getting started with custom inputs, consider reading the “<a href="/guides/create-a-custom-input">Create a custom input</a>” guide. The content on this page is intended to explain the intricacies of custom inputs for advanced use cases like authoring a plugin or library and is not required for many common use cases.
</callout>

## Registering inputs

New inputs require an [input definition](#input-definition). Input definitions can be registered with FormKit three ways:

- Locally on a `FormKit` component [with the `type` prop](#using-the-type-prop).
- [Globally using defaultConfig](#global-custom-inputs).
- [Selectively using plugin libraries](#plugin-libraries).

### Input definition

Input definitions are objects that contain the necessary information to initialize an input — like which [props to accept](#adding-props), what [schema or component to render](#schema-vs-component), and if any additional [feature functions](#adding-features) should be included. The shape of the definition object is:

```js
{
  // Node type: input, group, or list.
  type: 'input',
  // Schema to render (schema object or function that returns an object)
  schema: [],
  // A Vue component to render (use schema _OR_ component, but not both)
  component: YourComponent,
  // (optional) Input specific props the <FormKit> component should accept.
  // should be an array of camelCase strings
  props: ['fooBar'],
  // (optional) Array of functions that receive the node.
  features: []
}
```

### Using the `type` prop

Let’s make the simplest possible input — one that only outputs "Hello world".

<example
  name="Custom input"
  file="/_content/examples/custom-input/custom-input.vue">
</example>

Even though this simplistic example doesn’t contain any input/output mechanism, it still qualifies as a full input. It can have a value, run validation rules (they wont be displayed, but they can block form submissions), and execute plugins. Fundamentally, all inputs are [core nodes](/advanced/core#node) and the input’s definition provides the mechanisms to interact with that node.

### Global custom inputs

To use your custom input anywhere in your application via a "type" string (ex: `<FormKit type="foobar" />`) you can add an `inputs` property to the `defaultConfig` options. The property names of the `inputs` object become the "type" strings available to the `<FormKit>` component in your application.

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

const helloWorld = {
  type: 'input',
  schema: ['Hello world'],
}

createApp(App)
  .use(
    plugin,
    defaultConfig({
      inputs: {
        // The property will be the “type” in <FormKit type="hello">
        hello: helloWorld,
      },
    })
  )
  .mount('#app')
```

Now that we’ve defined our input we can use it anywhere in the application:

<example
  name="Custom input"
  :file="[
    '/_content/examples/custom-input-default-config/custom-input-default-config.vue',
    '/_content/examples/custom-input-default-config/formkit.config.js'
  ]">
</example>

### Plugin libraries

The above example extends the `@formkit/inputs` library (via `defaultConfig`). However, a powerful feature of FormKit is its ability to [load input libraries from multiple plugins](/advanced/core#library). These inputs can then be registered anywhere plugins can be defined:

- Globally
- Per group
- Per form
- Per list
- Per input

Let’s refactor our hello world input to use its own plugin:

<example
  name="Custom input - plugin"
  file="/_content/examples/custom-input-plugin/custom-input-plugin.vue">
</example>

<callout type="tip" label="Plugin inheritance">
Notice in the above example our plugin was defined on a parent of the element that actually used it! This is thanks to <a href="/advanced/core#plugins">plugin inheritance</a> — a core feature of FormKit plugins.
</callout>

## Schema vs component

Your input can be written using [FormKit’s schema](/advanced/schema) or a generic Vue component. There are pros and cons to each approach:

| Code   | Pros                                                                                                                                                                                                                                                                                                                                          | Cons                                                                                                                                                                                                                                                                                                                           |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Vue    | <ul><li>Learning curve (you likely know how to write a Vue component).</li><li>More mature dev tooling.</li><li>Slightly faster initial render.</li></ul>                                                                                                                                                                                     | <ul><li>Cannot use the <a href="/essentials/inputs#sections-schema"><code>:sections-schema</code> prop</a> to modify structure.</li><li>Plugins cannot modify schema to change rendered output.</li><li>Framework specific (Vue only).</li><li>Easy to write inputs that don’t play well with the FormKit ecosystem.</li></ul> |
| Schema | <ul><li>Structure can be modified via the <code>:sections-schema</code> prop (if you allow it).</li><li>Plugins can modify/change the rendered output.</li><li>Framework agnostic (future portability to when FormKit supports new frameworks).</li><li>Ecosystem compatibility (great for publishing your own open source inputs).</li></ul> | <ul><li>Learning curve (need to <a href="/advanced/schema">understand schemas</a>).</li><li>Slightly slower initial render.</li><li>Less mature dev tooling.</li></ul>                                                                                                                                                         |

<callout type="warning" label="Components in schemas">
Even if you prefer to write a custom input using a standard Vue Component, you can still use a schema in your input definition. Please read the <a href="#using-createinput-to-extend-the-base-schema">Using <code>createInput</code> to extend the base schema</a> section.
</callout>

The primary takeaway is if you are planning to use a custom input on multiple projects — then consider using the schema-based approach. If your custom input will only be used on a single project and flexibility is not a concern, use a Vue component.

### Future proofing

In the future, FormKit may expand to support additional frameworks (ex: React or Svelte. If this is something you are interested in, <a href="mailto:feedback@formkit.com">let us know!</a>.) Writing your inputs using schema means your inputs will be compatible (perhaps minimal changes) with those frameworks too.

## Schema Inputs

All of FormKit’s core inputs are written using schemas to allow for the greatest flexibility possible. You have two primary options when writing your own schema inputs:

- [Extend the base schema](#using-createinput-to-extend-the-base-schema) (recommended).
- Write your input from scratch.

It is important to understand the basic structure of a “standard” FormKit input, which is broken down into [sections](/essentials/inputs#sections):

<figure class="full">
  <formkit-input-diagram></formkit-input-diagram>
  <figcaption>Composition of a standard FormKit text input.</figcaption>
</figure>

The `input` section in the diagram above is typically what you’ll swap out when creating your own inputs — keeping the wrappers, labels, help text, and messages intact. However, if you want to control these aspects as well, you can also write your own input from scratch.

#### Using `createInput` to extend the base schema

To create inputs using the base schema you can use the `createInput()` utility from the `@formkit/vue` package. This function accepts 2 arguments:

- (required) A schema node _or_ a Vue component, which it inserts into the base schema at the `input` section (see diagram above).
- (optional) An object of [input definition](#input-definition) properties to merge with an auto-generated one.

The function returns a ready-to-use [input definition](#input-definition).

When providing a _component_ as the first argument, `createInput` will generate a schema object that references your component within the base schema. Your component will be passed a single `context` prop:

```js
{
  $cmp: 'YourComponent',
  props: {
    context: '$node.context'
  }
}
```

When providing a schema object, your schema is directly injected into the base schema object. Notice that our hello world example now supports outputting "standard" FormKit features like labels, help text, and validation:

<example
  name="Create input"
  file="/_content/examples/create-input/create-input.vue">
</example>

#### Writing schema inputs from scratch

It might make sense to write your inputs completely from scratch without using any of the base schema features. When doing so, just provide the [input definition](#input-definition) your full schema object.

<example
  name="Create input"
  file="/_content/examples/scratch-schema-input/scratch-schema-input.vue">
</example>

In the above example, we were able to re-create the same features as the `createInput` example — namely — label, help text, and validation message output. However, we are still missing a number of "standard" FormKit features like slot support. If you are attempting to publish your input or maintain API compatibility with the other FormKit inputs, take a look at the [input checklist](#input-checklist).

## Component inputs

For most users, [passing a Vue component to `createInput`](#using-createinput-to-extend-the-base-schema) provides a good balance between customization and value-added features. If you’d like to completely eject from schema-based inputs all together, you can pass a component directly to an input definition.

Component inputs receive a single prop — [the `context` object](/advanced/context). It’s then up to you to write a component to encompasses the desired features of FormKit (labels, help text, message display, etc.). Checkout the [input checklist](#input-checklist) for a list of what you’ll want to output.

## Input & output values

Inputs have two critical roles:

- Receiving user input.
- Displaying the current value.

### Receiving input

You can receive input from any user interaction and the input can set its value to any type of data. Inputs are _not_ limited to strings and numbers — they can happily store Arrays, Objects, or custom data structures.

Fundamentally, all an input needs to do is call `node.input(value)` with a value. The `node.input()` method is automatically debounced, so feel free to call it frequently — like every keystroke. Typically, this looks like binding to the `input` event.

The [`context` object](/advanced/context-object) includes an input handler for basic input types: `context.handlers.DOMInput`. This can be used for text-like inputs where the value of the input is available at `event.target.value`. If you need a more complex event handler, you can [expose it using "features"](#adding-features).

Any user interaction can be considered an input event. For many native HTML inputs, that interaction is captured with the [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).

```js
// An HTML text input written in schema:
{
  $el: 'input',
  attrs: {
    onInput: '$handlers.DOMInput'
  }
}
```

The equivalent in a Vue template:

```vue
<template>
  <input @input="context.DOMInput" />
</template>
```

### Displaying values

Inputs are also responsible for displaying the current value. Typically, you’ll want to use the `node._value` or `$_value` in schema to display a value. This is the "live" non-debounced value. The currently _committed_ value is `node.value` (`$value`). Read more about "value settlement" <a href="/advanced/core#setting-values">here</a>.

```js
// An HTML text input written in schema:
{
  $el: 'input',
  attrs: {
    onInput: '$handlers.DOMInput',
    value: '$_value'
  }
}
```

The equivalent in a Vue template:

```vue
<template>
  <input :value="context._value" @input="context.handlers.DOMInput" />
</template>
```

<callout type="warning" label="_value vs value">
The only time the uncommitted input <code>_value</code> should be used is for displaying the value on the input itself — in all other locations, it is important to use the committed <code>value</code>.
</callout>

## Adding props

The [standard FormKit props](/essentials/inputs#props--attributes) that you can pass to the `<FormKit>` component (like `label` or `type`) are available in the root of the [context object](/advanced/context) and in the [core node `props`](/advanced/core#config--props), and you can use these props in your schema by directly referencing them in expressions (ex: `$label`). Any props passed to a `<FormKit>` component that are not _node props_ end up in the `context.attrs` object (just `$attrs` in the schema).

If you need additional props, you can declare them in your input definition. Props can also be used for internal input state (much like a `ref` in a Vue 3 component). FormKit uses the `props` namespace for both purposes (see the autocomplete example below for an example of this). Props should _always_ be defined in camelCase and used in your Vue templates with kebab-case.

<example
  name="Custom props"
  file="/_content/examples/custom-props/custom-props.vue">
</example>

When extending the base schema by using the `createInput` helper, pass a second argument with input definition values to merge:

<example
  name="Custom props - createInput"
  file="/_content/examples/custom-props-create-input/custom-props-create-input.vue">
</example>

## Adding features

Features are the preferred way to add functionality to a custom input type. A "feature" is simply a function that receives the [core node](/advanced/core#node) as an argument. Effectively, they are plugins without inheritance (so they only apply to the current node). You can use features to add input handlers, manipulate values, interact with props, listen to events, and much more.

Features are defined in an array to encourage code reuse when possible. For example, we [use a feature called “options”](https://github.com/formkit/formkit/blob/master/packages/inputs/src/features/options.ts) on `select`, `checkbox`, and `radio` inputs.

As an example, let's imagine you want to build an input that allows users to enter two numbers, and the value of the input is the sum of those two numbers:

<example
  name="Custom input - sum numbers"
  file="/_content/examples/custom-sum/custom-sum.vue">
</example>

## Examples

Below are some examples of custom inputs. They are not intended to be comprehensive or production ready, but rather illustrate some custom input features.

### Simple text input

This is the simplest possible input and does not leverage any of FormKit’s built in DOM structure and only outputs a text input — however it is a fully functional member of the group it is nested inside of and able to read and write values.

<example
  name="Create input"
  file="/_content/examples/standard-text-input/standard-text-input.vue">
</example>

<callout type="tip" label="DOM Input">
In the above example the <code>$handlers.DOMInput</code> is a built-in convenience function for <code>(event) => node.input(event.target.value)</code>.
</callout>

### Autocomplete input

Let’s take a look at a slightly more complex example that utilizes `createInput` to provide all the standard FormKit structure while still providing a custom input interface.

<example
  name="Create input"
  file="/_content/examples/autocomplete/autocomplete.vue">
</example>

## Input checklist

FormKit exposes dozens of value-added features to even the most mundane inputs. When writing a custom input for a specific project, you only need to implement the features that will actually be used on that project. However, if you plan to distribute your inputs to others, you will want to ensure these features are available. For example, the standard `<FormKit type="text">` input uses the following schema for its `input` element:

```js
{
  $el: 'input',
  bind: '$attrs',
  attrs: {
    type: '$type',
    disabled: '$disabled',
    class: '$classes.input',
    name: '$node.name',
    onInput: '$handlers.DOMInput',
    onBlur: '$handlers.blur',
    value: '$_value',
    id: '$id',
  }
]
```

There are several features in the above schema that may not be immediately obvious like the `onBlur` handler. The following checklist is intended to help input authors cover all their bases:

<input-checklist></input-checklist>
