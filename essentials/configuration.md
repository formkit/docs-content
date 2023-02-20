---
title: Configuration
description: Learn to customize your forms to your precise needs.
---

# Configuration

<page-toc></page-toc>

## Introduction

FormKit uses a unique hierarchical configuration system that is well suited for forms. To understand how this configuration works, there are 4 questions we need to answer:

1. [What are core nodes](#what-are-core-nodes)?
2. [What are node options](#what-are-node-options)?
3. [What are node props](#what-are-node-props)?
4. [What is node config](#what-is-node-config)?

## What are core nodes?

Every `<FormKit>` component has its own instance of a core node. This node is responsible for almost all of the component’s functionality. There are 3 types of core nodes: inputs, lists, and groups (forms are just a type of group!).

There is no global FormKit instance that controls the application. Instead, you can think of each node as its own little application — complete with its own configuration.

One last thing about nodes — they can all have parent nodes. Groups and lists can also have children. For example, a login form might have two children — the email and password inputs. You can draw this relationship as a simple tree diagram:

<figure>
  <simple-tree></simple-tree>
  <figcaption>Hover over each node to see its initial options.</figcaption>
</figure>

## What are node options?

When creating one of these "mini applications" that we call core nodes, some options can be passed in. Except in extremely advanced use cases, you won't be creating your own core nodes — this is normally done for you by the `<FormKit>` component. However, it can be useful to define some of the node options globally. This is done with the `@formkit/vue` plugin — 💡 **core node options are the same as the `@formkit/vue` plugin options**.

For example, in a typical FormKit Vue registration, we use `defaultConfig` which is just a function that returns core node options:

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

// 👀 defaultConfig is just a function that returns core node options!
createApp(App).use(plugin, defaultConfig)
```

</client-only>

### Available node options

The following is a list of all the available options that can be used when registering FormKit or creating a node individually. Options that are passed to the `@formkit/vue` plugin will be applied to every `<FormKit>` component’s core node when it is created.

<client-only>

```js
createNode({
  /**
   * Used to rename the global "FormKit" component.
   */
  alias: 'FormKit',
  /**
   * This array is normally built for you by the FormKit component.
   */
  children: [],
  /**
   * An object of config settings. Keep reading for more on this.
   */
  config: {},
  /**
   * The name of the node — normally this is mapped to the name of your input.
   */
  name: 'inputName',
  /**
   * Parent — this is normally set for you by the FormKit component.
   */
  parent: null,
  /**
   * An array of plugin functions
   */
  plugins: [],
  /**
   * Default prop values, keep reading to learn more.
   */
  props: {},
  /**
   * Used to rename the global "FormKitSchema" component.
   */
  schemaAlias: 'FormKitSchema',
  /**
   * All are only 1 of 3 values: 'input', 'group', or 'list'
   */
  type: 'input',
  /**
   * The initial value of the node.
   */
  value: 'foobar',
})
```

</client-only>

### What is `defaultConfig`?

Developers familiar with FormKit will notice that the above list of node options differs slightly from the values that can be passed into the `defaultConfig` function.

Many of FormKit’s features, like validation, inputs, and Vue support are provided courtesy of first-party plugins. The `defaultConfig` function configures many of these plugins before they are given over to the Vue plugin as node options. So, `defaultConfig` can accept any of the above node options, but also a few extras:

<client-only>

```js
defaultConfig({
  /**
   * Validation rules to add or override.
   * See validation docs.
   */
  rules: {},
  /**
   * Locales to register.
   * See internationalization docs.
   */
  locales: {},
  /**
   * Input definitions to add or override.
   * See docs on custom inputs.
   */
  inputs: {},
  /**
   * Explicit locale messages to override.
   * See internationalization docs.
   */
  messages: {},
  /**
   * The currently active locale. This is actually a config setting, but
   * defaultConfig accepts it as a top-level value to improve the DX.
   */
  locale: 'en',
  /**
   * Any of the above node options are accepted.
   */
  ...nodeOptions,
})
```

</client-only>

## What are node props?

All core nodes have a `props` object (`node.props`). FormKit core, and any third-party plugins or code can read and write values to this object. In fact, nearly every feature of FormKit references `node.props` to determine how it should operate.

For example, the validation plugin looks at `node.props.validation` to determine if there are any rules it needs to run. So the real question is — how are these props being set? There are 3 primary mechanisms for setting props:

- Direct assignment
- Component props
- Vue plugin options

Let’s see how we can set the validation rules of an input (`node.props.validation`) these three ways:

### 1. Direct assignment

If you have a node instance, you can directly assign it a prop value:

<example
  name="Direct node assignment"
  file="_content/examples/node-assignment/node-assignment.vue">
</example>

### 2. Component props

Any props passed to the `<FormKit>` input are assigned to the `node.props` object (you know the drill).

<example
  name="Component props"
  file="_content/examples/component-props/component-props.vue">
</example>

### 3. Vue plugin options

When registering the `@formkit/vue` plugin, you can provide prop values to be injected into to all `<FormKit>` components.

<example
  name="Component props"
  :file="[
    '_content/examples/vue-plugin-props/vue-plugin-props.vue',
    '_content/examples/vue-plugin-props/formkit.config.js',
  ]"
  init-file-tab="formkit.config.js">
</example>

<!-- ### Props worth configuring

Any plugin or feature can can read and write values to the `node.props` object so the following list is inherently not comprehensive depending on the plugins installed on your inputs — however the following table details some of the props leveraged by FormKit’s first-party plugins (validation, inputs, i18n etc):

| prop                | default                 | description                                                                                                          |
| ------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `delay`             | `20`                    | Milliseconds that a node is debounced before committing it’s `_value` to the `value` (and the rest of the nodes).    |
| `id`                | `input\_{n}`            | The input of the node                                                                                                |
| `type`              | `text`                  | Used by the `@formkit/inputs` library to determine which input definition to load (think `text`, `select`, `radio`). |
| `isForm`            | `boolean`               | Used by `@formkit/core` to determine if an input is an actual form element.                                          |
| `definition`        | `FormKitTypeDefinition` | The current input definition, should only be set via `node.define()`.                                                |
| `initial`           | `unknown`               | The value first set on a given node.                                                                                 |
| `options`           | `FormKitOptions`        | The options passed to `checkbox`, `radio`, and `select` inputs.                                                      |
| `onValue`           | `offValue`              | The on and off values for checkboxes.                                                                                |
| `incompleteMessage` | `"Form incomplete"`     | The message displayed to users when the form validation is not complete and they try to submit                       |

<callout type="warning" label="Caution">
This table is intended as a reference, but does not
</callout> -->

## What is node config?

Props are pretty powerful, but in addition to `node.props`, core nodes all have a config object `node.config`. This is where configuration hierarchy comes in. The `node.config` object acts like initial values for `node.props`. If a given prop is requested, like `node.props.validation`, and that property is not explicitly set using any of the [methods discussed above](#what-are-node-props), then FormKit will check the `node.config` object to see if it has a value. If it does not have a value, then it recursively checks the node parent's config object — then the grandparent's config object — and so on — until a value is found or it reaches a node with no parent.

<figure>
  <img src="/img/props-config-flow.svg" class="props-diagram">
  <figcaption>This diagram describes how a request for property of node.props resolves.</figcaption>
</figure>

What does this mean in practice? When you combine the tree like structure of forms (and their corresponding core nodes) and this hierarchical configuration you can do some pretty exciting things. For example, here we set the validation visibility of an entire form:

<example
  name="Validation visibility"
  file="_content/examples/validation-visibility/validation-visibility.vue">
</example>

It’s worth noting that plugins have their own inheritance model which differs from `config` and `props`, and is described in more detail in the [core documentation](/essentials/architecture).
