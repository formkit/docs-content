---
title: Create a Tailwind CSS Theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS Theme

In this guide, we’ll walk through the process of creating a custom Tailwind theme for your forms and inputs. Tailwind has risen to the forefront of CSS utility class libraries and FormKit was authored with its capabilities in mind. Let’s get started!

<callout type="tip" label="SFC Build tool">
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
</callout>

## The FormKit defaults

Before we start with anything Tailwind specific it's important to understand how the default FormKit classes are applied. The `RootClasses` function is responsible for the assignment of bases classes to all FormKit elements — including all nested and wrapping markup.

The default `RootClasses` function is minimal and generates a `formkit-${section-key}` class for every DOM element so that external stylesheets can target DOM elements. It looks like this:

<example
  file="/_content/examples/guides/tailwind-theme/default-root-classes/formkit.config.js"
  mode="editor"
  :editable="false">
</example>

The `RootClasses` function is called for every DOM node within a FormKit component and expects a return value of an object with `true` or `false` values which enable / disable classes.

Here is what the markup a FormKit input of type `text` looks like when passing through the above default `RootClasses` function.

<example
  file="/_content/examples/guides/tailwind-theme/default-root-classes/default-text-input.vue"
  tabs="html"
  layout="column">
</example>

If we provide our own RootClasses function to supply Tailwind utility classes instead of the default FormKit classes then we will be able to generate defaults for all input types across our entire project by branching on the `sectionKey` and `node` values of the `RootClasses` function each time it is called for a DOM node.

## Set up a custom RootClasses function

There are a few things we need to do in order to ready our project FormKit project for Tailwind styling.

- Ensure that we are not importing any base FormKit theme such as `genesis`.
- Include Tailwind in our project so that our applied classes take effect. For the purposes of this demo we'll be using Tailwind JIT hosted on a CDN. You're free to include Tailwind in whatever way makes sense for your project.
- Create a custom `RootClasses` function and supply it to FormKit so that we can target specific inputs and their sub-markup with Tailwind classes.

To create a custom RootClasses function create a FormKit config object that has a `config.rootClasses` function and supply it to FormKit's `defaultConfig` function as an override when registering FormKit with Vue:

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/custom-root-classes/app.js',
    '/_content/examples/guides/tailwind-theme/custom-root-classes/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/custom-root-classes/tailwind.config.js'
  ]"
  mode="editor"
  init-file-tab="app.js"
  :editable="false"></example>

This is the basic structure required to get our custom classes into FormKit element markup and ensure that applied Tailwind classes take effect. Next we'll start with getting our desired Tailwind styling onto a `text` element and ramp up from there.

## Our first Tailwind input

To start, let's apply some sensible classes to a `text` style input. This will cover a large surface area because we'll easily be able to extend these styles to other text type inputs such as `email`, `password`, `date`, etc.

In order to target `text` and only `text` inputs we'll make use of the data available to us in `rootClasses` function via the provided `node` argument. We'll define class lists in nested objects that represent all the Tailwind classes we want for each `sectionKey` in our input based on the `type` of said input.

The result will be a keyed object of `true` values that enable all the defined classes with our FormKit element's internal markup.

Here is the same `text` input from the example above with Tailwind classes applied.

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

Phew! That was a bit of boilerplate to get everything into the right place. But now that we have a system in place the rest will go more quickly.

We'll use the same pattern above for the other input types we need to style.

Let's create a "Kitchen Sink" of input types which will each have their defined class lists applied. Additionally, we'll further break up our files with imports to assist with readability.

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

And there we have it! All of our FormKit core inputs are styled with Tailwind utility classes across our entire project.

If we need to override any specific one-offs we can do so using the [Section-key class props](/essentials/styling#section-key-class-props) on a given `FormKit` input within our project.

Here are some ways to take the above guide even further:

- Add dark-mode support using Tailwind's built-in `dark:` modifier.
- Refactor the `classConfig.js` object to be a function that returns the config object and has methods exposed for easy surgical overrides.
- Encapsulate all of our `classConfig.js` and `rootClasses.js` logic into a plugin that can be easily installed from a github repo or npm package.

Hopefully this guide helped you understand how classes are applied to FormKit inputs and how you can leverage the `rootClasses` function to make use of Tailwind in your FormKit projects. If you want to dive in deeper, try reading about the [core internals of FormKit](/advanced/core) and [the FormKit schema](/advanced/schema)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>


