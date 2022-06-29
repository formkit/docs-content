---
title: Styling
description: Add custom styling to your FormKit components - both globally and per-instance.
---

# Styling

FormKit ships robust and accessible markup — but with no assumptions about your
desired styles. There is an _optional_ base theme (as seen in these docs)
called `Genesis` that you can use in your projects.

### Installing Genesis theme

#### CDN Usage

To load `genesis` via CDN, supply it to the `theme` property of your `defaultConfig`.

<client-only>

```js
...
defaultConfig({
  theme: 'genesis' // will load from CDN and inject into document head
})
...
```
</client-only>

#### Direct import

To install Genesis, first install the `@formkit/themes` package.

<client-only>

```sh
npm install @formkit/themes
```
</client-only>

Then in your `main.js` (wherever you boot Vue up) include the Genesis `theme.css` (this assumes you are using a build tool like Vite, Webpack, Snowpack, or Nuxt):

<client-only>

```js
import '@formkit/themes/genesis'
```
</client-only>

## Outer attributes

For styling purposes some attributes are automatically added to and removed from the `outer` section of all FormKit inputs:

- `data-type` — The type of input, `text`, `select`, `checkbox` etc.
- `data-multiple` — For inputs that accept the `multiple` attribute, this will be appended when the input has the multiple attribute (like the `select` input).
- `data-disabled` — Present when an input is disabled.
- `data-complete` — Present when the input is "complete". Intended to be used for styling the input when a user has completed filling out the input (like a green checkmark). [Read about `context.state.complete`](/advanced/context#state) for information what conditions cause this to be `true`.
- `data-invalid` — Present when the input has failing validation rules and the messages for the failing rules are visible.
- `data-errors` — Present when the input has explicitly set errors.

You can use the above attributes to easily provide realtime visual feedback for users filling out your forms:

<example
name="Appending classes"
file="/\_content/examples/outer-data-attrs/outer-data-attrs.vue">
</example>

## Custom classes

Most users will want to apply their own styles and classes to FormKit's provided markup.
FormKit provides numerous methods to apply classes for your project.

Classes can be modified for all [sections](/essentials/inputs#sections) using any of the following methods (from highest to lowest specificity):

- [The `{section-key}-class` props](#section-key-class-props). (most specific)
- [The `classes` prop](#classes-prop).
- [The `classes` configuration option](#classes-configuration).
- [The `rootClasses` configuration function](#the-rootclasses-function). (least specific)

The classes follow a strict hierarchy. Initially, classes are produced by the `rootClasses` function. They can then be modified by the `classes` configuration option, then by the `classes` prop, and finally by the `{section-key}-class` prop. At each of these stages classes can be [appended](#appending-classes), [reset](#resetting-classes), or [selectively modified](#removing-classes).

## Appending classes

To append a class, simply return the string you want to append, or provide an object of classes with boolean values — `true` properties will be appended:

<example
name="Appending classes"
file="/_content/examples/append-classes/append-classes.vue"
tabs="html"></example>

## Resetting classes

Classes produced by all earlier hierarchy steps can be completely removed by providing a special (not rendered) class `$reset` in either string format or object format:

<example
name="Resetting classes"
file="/_content/examples/resetting-classes/resetting-classes.vue"
tabs="html"></example>

## Removing classes

Classes produced by an earlier step in the class hierarchy can be selectively removed by providing an object with the value `false` for the class you want to remove. This includes removing formkit's default `formkit-` prefixed classes:

<example
name="Removing classes"
file="/_content/examples/removing-classes/removing-classes.vue"
tabs="html"></example>

<callout type="tip">
In addition to the four methods listed above, more generalized overrides are also available, like overriding an input’s schema, using the <code>classes</code> node hook, or utilizing slots:
</callout>

## Section-key class props

The simplest way to modify the classes of an element inside a FormKit input is via the `{section-key}-class` props. To add a class to a specific section element, like `label`, you simply add the `label-class` prop:

<example
name="Section-key class"
file="/_content/examples/section-key-class/section-key-class.vue"
tabs="html"></example>

## Classes prop

The classes prop is similar to the section-key class prop except it allows setting classes on all sections at the same time:

<example
name="Classes prop"
file="/_content/examples/classes-prop/classes-prop.vue"
tabs="html"></example>

## Classes configuration

The classes configuration option is similar to the classes prop, except it applies to all inputs the configuration is applied to. FormKit's unique configuration system allows for you to apply classes globally on your project or just inputs within a certain group or form:

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

## Using generateClasses from @formkit/themes

FormKit ships with a helper function called `generateClasses` included in `@formkit/themes`.

The `generateClasses` function takes a javascript object keyed by input type with values of a sub-object keyed by `${sectionKey}` with values of strings. With this function you can quickly apply class lists to sections within inputs based on a given inputs' type.

<example
name="generateClasses example"
:file="[
  '/_content/examples/generate-classes/generate-classes.vue',
  '/_content/examples/generate-classes/formkit.config.js'
]"
init-file-tab="formkit.config.js"
tabs="html"></example>

## The rootClasses function

`rootClasses` is a configuration function that is responsible
for producing the default classes for each element. This function already has a default value which produces all the default classes (like `formkit-outer` and `formkit-label`) that ship with FormKit — so replacing this single function allows you to easily replace all initial classes. This makes it an ideal candidate for writing custom themes when using utility frameworks like Tailwind.

The `rootClasses` function is passed 2 arguments (respectively):

- The [section key](/essentials/inputs#sections) (like `label` or `input`).
- The [input’s node](/advanced/core#node).

The function will be called once for each section and it _must_ return
an object of classes with boolean values.

While typical usage of `rootClasses` is at the global config level to apply
classes to your entire project - you can also use it with the `config` prop to override
a specific form or input within your project with a class list computed from the logic
within your provided function:

<example
name="Root classes function"
file="/_content/examples/root-classes/root-classes.vue"
tabs="html"></example>

<callout type="tip">
Because <code>rootClasses</code> is a configuration option, you can apply it per input, per group, or globally.
</callout>

## Modifying classes within schema

In addition to modifying classes via config or props _on a  `<FormKit>` component_, you can use the same techniques within [schema](/essentials/generation#schema):

### Section-key class props within schema
Within schema, you can also modify the classes of an element inside an input via the `{section-key}Class` properties. For example, to add a class to the label section, you can add the `labelClass` property:

<client-only>

```js
{
  $formkit: 'text',
  name: 'email',
  // adds 'appended-class' to the "label" section
  labelClass: 'appended-class'
},
```
</client-only>

### Classes prop within schema

Much like the [classes prop](#classes-prop) on a `<FormKit>` component, you can modify the class list for any [section](/essentials/inputs#sections) of an input with the `classes` property on a schema node:

<client-only>

```js
{
  $formkit: 'text',
  name: 'email',
  // modifies classes on both the "outer" and "inner" sections of this input
  classes: {
    outer: 'new-outer-class',
    inner: {
      $reset: true, // resets classes on the "inner" section
      'new-inner-class': true
    }
  },
},
```
</client-only>

### Config within schema
Since config is passed down to descendant inputs, you can alter classes via config on a parent, such as a `form`, `list`, or a `group`, and this will affect all descendants to any depth:

<example
name="Classes prop"
file="/_content/examples/classes-config-schema/classes-config-schema.vue"
tabs="render,html"></example>

## Tailwind CSS

Want to use Tailwind with FormKit? We've written a guide walking through the process using both inline class props as well as using the `FormKitVariants` plugin and the `generateClasses` helper function from `@formkit/themes` to create a global Tailwind theme:

<cta label="Guide: Create a Tailwind CSS theme" button="Read now" href="/guides/create-a-tailwind-theme"></cta>
