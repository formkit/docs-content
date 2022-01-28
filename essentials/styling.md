---
title: Styling
description: Add custom styling to your FormKit components - both globally and per-instance.
---

# Styling

FormKit ships robust and accessible markup — but with no assumptions about your
desired styles. There is an _optional_ base theme (as seen in these docs)
called `Genesis` that you can use in your projects.

#### Installing Genesis theme

To install Genesis, first install the `@formkit/themes` package.

```sh
npm install @formkit/themes
```

Then in your `main.js` (wherever you boot Vue up) include the Genesis `theme.css` (this assumes you are using a build tool like Vite, Webpack, Snopack, or Nuxt):

```js
import `@formkit/themes/genesis/theme.css`
```

## Custom classes

Most users will want to apply their own styles and classes to FormKit's provided markup.
FormKit provides numerous methods to apply classes for your project.

Classes can be modified for all [sections](/essentials/inputs#sections) using any of the following methods (from highest to lowest specificity):

- [The `{section-key}-class` props](#section-key-class-props). (most specific)
- [The `classes` prop](#classes-prop).
- [The `classes` configuration option](#classes-configuration).
- [The `rootClasses` configuration function](#root-classes-function). (least specific)

The classes follow a strict hierarchy. Initially, classes are produced by the `rootClasses` function. They can then be modified by the `classes` configuration option, then by the `classes` prop, and finally by the `{section-key}-class` prop. At each of these stages classes can be [appended](#appending-classes), [reset](#resetting-classes), or [selectively modified](#removing-classes).

## Appending classes

To append a class, simply return the string you want to append, or provide an object of classes with boolean values — `true` properties will be appended.

<example
name="Appending classes"
file="/_content/examples/append-classes/append-classes.vue"
tabs="html"></example>

## Resetting classes

Classes produced by all earlier hierarchy steps can be completely removed by providing a special (not rendered) class `$reset` in either string format or object format.

<example
name="Resetting classes"
file="/_content/examples/resetting-classes/resetting-classes.vue"
tabs="html"></example>

## Removing classes

Classes produced by an earlier step in the class hierarchy can be selectively removed by providing an object with the value `false` for the class you want to remove. This includes removing formkit's default `formkit-` prefixed classes.

<example
name="Removing classes"
file="/_content/examples/removing-classes/removing-classes.vue"
tabs="html"></example>

<callout type="tip">
In addition to the four methods listed above, more generalized overrides are also available, like overriding an input’s schema, using the <code>classes</code> node hook, or utilizing slots.
</callout>

## Section-key class props

The simplest way to modify the classes of an element inside a FormKit input is via the `{section-key}-class` props. To add a class to a specific section element, like `label`, you simply add the `label-class` prop.

<example
name="Section-key class"
file="/_content/examples/section-key-class/section-key-class.vue"
tabs="html"></example>

## Classes prop

The classes prop is similar to the section-key class prop except it allows setting classes on all sections at the same time.

<example
name="Classes prop"
file="/_content/examples/classes-prop/classes-prop.vue"
tabs="html"></example>

## Classes configuration

The classes configuration option is similar to the classes prop, except it applies to all inputs the configuration is applied to. FormKit's unique configuration system allows for you to apply classes globally on your project or just inputs within a certain group or form.

### Global class configuration

<example
  name="Global configuration"
  file="/_content/examples/global-classes/global-classes.vue"
  mode="editor"
  :editable="false"
  :line-numbers="false"></example>

### Class configuration on a group, list, or form

<example
name="Classes prop"
file="/_content/examples/classes-config/classes-config.vue"
tabs="render,html"></example>

## Root classes function

`rootClasses` is a configuration function that is responsible
for producing the default classes for each element. This function already has a default value which produces all the default classes (like `formkit-outer` and `formkit-label`) that ship with FormKit — so replacing this single function allows you to easily replace all initial classes. This makes it an ideal candidate for writing custom themes when using utility frameworks like Tailwind.

The `rootClasses` function is passed 2 arguments (respectively):

- The [section key](/essentials/inputs#sections) (like `label` or `input`).
- The [input’s node](/essentials/input-node).

The function will be called once for each section and it _must_ return
an object of classes with boolean values.

While typical usage of `rootClasses` is at the global config level to apply
classes to your entire project - you can also use it with the `config` prop to override
a specific form or input within your project with a class list computed from the logic
within your provided function.

<example
name="Root classes function"
file="/_content/examples/root-classes/root-classes.vue"
tabs="html"></example>

<callout type="tip">
Because <code>rootClasses</code> is a configuration option, you can apply it per input, per group, or globally.
</callout>

## Tailwind CSS Example

Due to the `rootClasses` function's ability to modify every form within your project
when used at the global config level, it becomes easy to intelligently apply default
class lists to your inputs.

### Configuring Tailwind with `rootClasses` in the global config

<example
  name="Global config with Tailwind"
  mode="editor"
  :editable="false"
  :line-numbers="false"
  file="/_content/examples/tailwind-classes/global-config.vue"></example>

That's a lot of markup! In reality you'll probably want to create your `rootClasses`
function as a FormKit plugin in a separate file (or npm installable theme!) and
import it and provide it to the `defaultConfig`.

<example
  name="Global config with Tailwind - truncated"
  mode="editor"
  :editable="false"
  :line-numbers="false"
  file="/_content/examples/tailwind-classes/global-config-short.vue"></example>

### An example using Tailwind from the global config

Because we have set our Tailwind classes in our global config, our inputs now
inherit the correct class lists automatically. You can override the classes further
from here - such as in the case of the second text input here.

<example
  name="Global config with Tailwind"
  css-framework="tailwind"
  :file="[
    '/_content/examples/tailwind-classes/example.vue',
    '/_content/examples/tailwind-classes/formkit.config.js'
  ]"></example>
