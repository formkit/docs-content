---
title: Create a Tailwind CSS Theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS Theme

In this guide, we’ll walk through the process of creating a custom Tailwind theme for your forms and inputs. Tailwind has risen to the forefront of CSS utility class libraries, and FormKit was authored with its capabilities in mind. Let’s get started!

<callout type="tip" label="SFC Build tool">
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
</callout>

## The FormKit defaults

Before we begin with anything Tailwind specific, it's important to understand how the default FormKit classes are applied. The `rootClasses` function assigns bases classes to all FormKit elements — including all nested and wrapping markup.

The default `rootClasses` function is minimal and generates a `formkit-${section-key}` class for every DOM element within a FormKit input. It looks like this:


<example
  file="/_content/examples/guides/tailwind-theme/default-root-classes/formkit.config.js"
  mode="editor"
  :editable="false">
</example>

The `rootClasses` function is called for every DOM node within a FormKit component and expects a return value of an object with `true` or `false` values, which enable / disable classes.

Here is what the markup of a FormKit input of type `text` looks like when passing through the above default `rootClasses` function.

<example
  file="/_content/examples/guides/tailwind-theme/default-root-classes/default-text-input.vue"
  tabs="html"
  layout="column">
</example>

If we provide our own `rootClasses` function to supply Tailwind utility classes — instead of the default FormKit classes — then we will be able to generate defaults for all input types across our entire project by branching on the `sectionKey` and `node` values of the `rootClasses` function each time it is called.

## Add custom rootClasses

There are a few things we need to ready our FormKit project for Tailwind styling.

- Ensure that we are not importing any base FormKit theme such as `genesis`.
- Include Tailwind in our project so that our applied classes take effect.
- Create a custom `rootClasses` function and supply it to FormKit so that we can target specific inputs and their sub-markup with Tailwind classes.

To create a custom `rootClasses` function create a FormKit config object that has a `config.rootClasses` function and supply it to FormKit's `defaultConfig` function as an override when registering FormKit with Vue:

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/custom-root-classes/app.js',
    '/_content/examples/guides/tailwind-theme/custom-root-classes/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/custom-root-classes/tailwind.config.js'
  ]"
  mode="editor"
  init-file-tab="app.js"
  :editable="false"></example>

This is the basic structure required to get our custom classes into a FormKit element's markup and ensure that applied Tailwind classes take effect. Next, we'll start with getting our desired Tailwind styling onto a `text` element and ramp up from there.

## Our first Tailwind input

To start, let's apply some sensible classes to a `text` style input. This will cover a large surface area because we'll easily be able to extend these styles to other text-like inputs such as `email`, `password`, `date`, etc.

To specifically target `text` inputs, we'll make use of the data available to us in `rootClasses` function via the provided `node` argument. We'll define class lists in nested objects that represent all the Tailwind classes we want for each `sectionKey` in our input based on the `type` of said input. The end goal will be to have a single file with an easily-editable class lists for all sections within any given input type.

Here is the `text` input from the example above with Tailwind classes applied. The source code is heavily commented to explain what's happening at each step.

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/tailwind-text-input/example.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-text-input/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-text-input/rootClasses.js',
  ]"
  init-file-tab="rootClasses.js"
  css-framework="tailwind"
  layout="column"
  :editable="true"></example>

## Ramping up to a full theme

Phew! That was a lot of boilerplate to get everything into the right place. But now that we have a system to work off of, the rest will go more quickly.

We'll use the same pattern above for each of the other input types we need to style.

Let's create a "Kitchen Sink" of input types, each having their defined class lists applied. Additionally, we'll further break up our files into separate imports to assist with readability.

<callout type="warning" label="Tailwind and Pseudo-elements">
Some form elements such as the button for a <code>file</code> input and the internals of the <code>color</code> input are not directly accessible via DOM nodes that can have classes applied. In the example below please note the global styles in the <code>example.vue</code> file that compliment the Tailwind class lists.
</callout>

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/tailwind-theme/example.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/rootClasses.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/classConfig.js',
  ]"
  init-file-tab="classConfig.js"
  css-framework="tailwind"
  layout="auto"
  :editable="true"></example>

## Next Steps

And there we have it! All FormKit core inputs styled with Tailwind utility classes across our entire project.

If we need to override any specific one-offs we can do so using the [Section-key class props](/essentials/styling#section-key-class-props) on a given `FormKit` input within our project.

Here are some ways to take the above guide even further:

- Add dark-mode support using Tailwind's built-in `dark:` modifier.
- Refactor the `classConfig.js` object to be a function that returns the config object and has methods exposed for easy surgical overrides.
- Encapsulate all of our `classConfig.js` and `rootClasses.js` logic into a plugin that can be easily installed from a GitHub repo or npm package without the need for writing boilerplate.

Hopefully, this guide helped you understand how classes are applied to FormKit inputs and how you can leverage the `rootClasses` function to make use of Tailwind in your FormKit projects. If you want to dive in deeper, try reading about the [core internals of FormKit](/advanced/core) and [the FormKit schema](/advanced/schema)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>


