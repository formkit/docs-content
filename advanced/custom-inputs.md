# Custom inputs

<cta label="Building your first custom input?" type="ghost" href="/" button="Read the guide"></cta>

FormKit includes a lot of inputs out of the box, but you can also define your own inputs that automatically take advantage of FormKit’s value added features like validation, error messages, data modeling, grouping, labels, help text and many other features that make FormKit inputs robust.

Inputs are comprised of 2 essential parts:

1. [An input definition](#input-definition).
2. [The input’s code](#input-code).

<callout type="warning" label="Start with the guide">
If you are just getting started with custom inputs, consider reading the <a href="/guides/custom-inputs">“Creating your own inputs”</a> guide. The content on this page is intended to explain the intricacies of custom inputs for advanced use cases like authoring a plugin or library. Not required for many common use cases.
</callout>

## Input definition

Input definitions are objects that contain the necessary information to initialize an input — like which props to accept, what schema or component to render, and if any additional feature code should be included. The shape of the definition object is:

```js
{
  // Node type: input, group, or list.
  type: 'input',
  // Schema to render (schema object or function that returns an object)
  schema: [],
  // A Vue component to render (use schema _OR_ component but not both)
  component: YourComponent,
  // (optional) Input specific props the <FormKit> component should accept.
  // should be an array of cameCase strings
  props: ['fooBar'],
  // (optional) Array of functions that receive the node.
  features: []
}
```

Input definitions can be passed directly to a `FormKit` component as the `type` prop, or exposed with a [plugin library](/advanced/node#library).

### Using the `type` prop

Let’s make the simplest possible input — one that only outputs "Hello world".

<example
  name="Custom input"
  file="/_content/examples/custom-input/custom-input"
  langs="vue">
</example>

Even though this simplistic example doesn’t contain any input/output mechanism it still qualifies as a full input. It can have a value, run validation rules (they wont be displayed, but they can block form submissions), and execute plugins. Fundamentally all inputs are [core nodes](/advanced/core#node) and the input’s definition provides the mechanisms to interact with that node.

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

Now that we’ve defined our input we can use it anywhere in the application.

<example
  name="Custom input"
  file="/_content/examples/custom-input-default-config/custom-input-default-config"
  langs="vue">
</example>

### Plugin libraries

The above example extends the `@formkit/inputs` library (via `defaultConfig`). However a powerful feature of FormKit is its ability to [load input libraries from multiple plugins](/advanced/core#library). These inputs can then be registered anywhere plugins can be defined:

- Globally
- Per group
- Per form
- Per list
- Per input

Let’s refactor our hello world input to use its own plugin:

<example
  name="Custom input - plugin"
  file="/_content/examples/custom-input-plugin/custom-input-plugin"
  langs="vue">
</example>

<callout type="tip" label="Plugin inheritance">
Notice in the above example our plugin was defined on a parent of the element that actually used it! This is thanks to <a href="/advanced/core#plugins">plugin inheritance</a> — a core feature of FormKit plugins.
</callout>

## Input code

Your input can be written using [FormKit’s schema](/advanced/schema) or a generic Vue component. There are pros and cons to each approach:

| Code   | Pros                                                                                                                                                                                                                                                                                                                    | Cons                                                                                                                                                                                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vue    | <ul><li>Learning curve (you likely know how to write a Vue component).</li><li>More mature dev tooling.</li><li>Slightly faster initial render.</li></ul>                                                                                                                                                               | <ul><li>Cannot use the <code>:schema</code> prop to modify structure.</li><li>Plugins cannot modify schema to change rendered output.</li><li>Framework specific (Vue only).</li><li>Easy to write inputs that don’t play well with the FormKit ecosystem.</li></ul> |
| Schema | <ul><li>Structure can be modified via the <code>:schema</code> prop (if you allow it).</li><li>Plugins can modify/change the rendered output.</li><li>Framework agnostic (future proof to new FormKit framework support).</li><li>Ecosystem compatibility (great for publishing your own open source inputs).</li></ul> | <ul><li>Learning curve (need to <a href="/advanced/schema">understand schemas.</a>)</li><li>Slightly slower initial render.</li><li>Less mature dev tooling.</li></ul>                                                                                               |

The primary takeaway? If you are creating a custom input that you plan to use on multiple projects — then consider using the schema based approach. If you are writing an input that will only be used on a single project and flexibility is not a concern, use a Vue component.

<callout type="info" label="Future frameworks">
In the future FormKit may expand to support additional frameworks in the future (ex: React. If this is something you are interested in, <a href="mailto:feedback@formkit.com">let us know!</a>.) Writing your inputs using schema means your inputs will be compatible (perhaps minimal changes) with those frameworks too.
</callout>

### Schema inputs

All of FormKit’s core inputs are written using schemas to allow for the greatest flexibility possible. You essentially have two options when writing your own schema inputs:

- [Extend the base schema](#using-createinput-to-extend-the-base-schema) (recommended).
- Write your input from scratch.

It is important to understand the basic structure of a “standard” FormKit input. Let’s examine this diagram:

<figure>
  <formkit-input-diagram></formkit-input-diagram>
  <figcaption>Composition of a standard FormKit text input.</figcaption>
</figure>

The `input` composition key in the above diagram is typically what you’ll swap out when creating your own inputs — keeping the label, wrappers, help text and messages. However, if you want to control the _entire_ input (wrappers, labels, inputs, help text, messages etc) you can also write your own input from scratch.

#### Using `createInput` to extend the base schema

To create inputs using the base schema you can use the `createInput()` utility from the `@formkit/vue` package. This function accepts 2 arguments:

- (required) Either a schema node or a Vue component and inserts it into the base schema at the `input` composition key (see diagram above).
- (optional) An object of [input definition](#input-definition) properties to merge with an auto-generated one.

When providing a component as the first argument, `createInput` will create a schema object (`$cmp`) to use your component within the base schema. When providing a schema object, your schema is directly injected into the base schema object. Notice that our hello world example now supports outputting "standard" FormKit features like labels, help text, and validation:

<example
  name="Create input"
  file="/_content/examples/create-input/create-input"
  langs="vue">
</example>

#### Writing schema inputs from scratch

[TK]

## Initialization in depth

When a developer writes the code: `<FormKit type="foobar" />` how does FormKit know what to load? To understand the answer, it is helpful to outline the steps involved.

1. The `<FormKit>` Vue component merges props with global configuration options.
2. A new instance [core node](/advanced/core#node) is initialized using these merged options.
3. The core node checks for plugins that [define a library](/advanced/core#plugins).
4. Plugin libraries are asked if they can “define” the current node.
5. If the node gets defined then the input’s Vue component or schema is mounted. If the node is not defined an exception is thrown.
