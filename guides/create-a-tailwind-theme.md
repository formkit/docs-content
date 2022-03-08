---
title: Create a Tailwind CSS Theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS Theme

In this guide, we’ll walk through the process of creating a custom Tailwind theme for your forms and inputs. Tailwind has risen to the forefront of CSS utility class libraries, and FormKit was authored with its capabilities in mind. Let’s get started!

<callout type="tip" label="SFC Build tool">
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
</callout>

## Inline usage

In the context of a `.vue` file that represents a component, it's possible to create a Tailwind theme using the `section-key` [class props](/essentials/styling#section-key-class-props) or the `classes` [prop](/essentials/styling#classes-prop) provided by FormKit.

If your component represents your entire form and your project only requires a single form, this may be all that you need. Here is an example of applying the same Tailwind classes to a FormKit `text` input using both the `section-key` props and the `classes` prop:

<example
  file="/_content/examples/guides/tailwind-theme/inline-usage/example.vue"
  css-framework="tailwind"
  :editable="true">
</example>

This is a low-barrier way to apply Tailwind styles to your FormKit forms, but what if you have multiple forms? Copy-pasting class lists between components is not ideal and will lead to inadvertent variations in styling across your project over time.

Let's explore how we can apply Tailwind classes globally to _all_ FormKit inputs within our project.

## Global FormKit defaults

Before we begin with anything Tailwind specific, it's important to understand how the default FormKit classes are applied. The `rootClasses` function assigns base classes to all FormKit elements — including all nested and wrapping markup.

The default `rootClasses` function is minimal and generates a `formkit-${section-key}` class for every DOM element within a FormKit input. It looks like this:

<example
  file="/_content/examples/guides/tailwind-theme/default-root-classes/formkit.config.js"
  mode="editor"
  :editable="false">
</example>

The `rootClasses` function is called for every DOM node within a FormKit component and expects a return value of an object with `true` or `false` values, which enable and disable classes.

Here is what the markup of a FormKit input of type `text` looks like when passing through the above default `rootClasses` function.

<example
  file="/_content/examples/guides/tailwind-theme/default-root-classes/default-text-input.vue"
  tabs="html"
  layout="column">
</example>

If we provide our own `rootClasses` function to supply Tailwind utility classes — instead of the default FormKit classes — then we will be able to generate defaults for all input types across our entire project by branching on the `sectionKey` and `node` values of the `rootClasses` function each time it is called.

## Add custom rootClasses

There are a few things we need to prepare our FormKit project for Tailwind styling:

- Ensure that we are not importing any base FormKit theme such as `genesis`.
- Include Tailwind in our project so that our applied classes take effect.
- Create a custom `rootClasses` function and supply it to FormKit so that we can target specific inputs and their sub-markup with Tailwind classes.

To create a custom `rootClasses` function, create a FormKit config object that has a `config.rootClasses` function and supply it to FormKit's `defaultConfig` function as an override when registering FormKit with Vue:

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

To specifically target `text` inputs, we'll make use of the data available to us in the `rootClasses` function via the provided `node` argument. We'll define class lists in nested objects that represent all the Tailwind classes we want for each `sectionKey` in our input based on the `type` of said input. The end goal will be to have a single file with an easily-editable class list for all sections within any given input type.

Here is the `text` input from the above example with Tailwind classes applied. The source code is heavily commented to explain what's happening at each step:

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

## Creating a full theme

Phew! That was a lot of boilerplate to get everything into the right place. But now that we have a system to work off of, the rest will go more quickly.

We'll use the same pattern above for each of the other input types we need to style.

Let's create a "Kitchen Sink" of input types, each having their defined class lists applied. Additionally, we'll further break up our files into separate imports to assist with readability.

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

## Selective overrides

And there we have it! All FormKit core inputs styled with Tailwind utility classes across our entire project.

If we need to override any specific one-offs within our project, we can do so using the [section-key class props](/essentials/styling#section-key-class-props) or the [classes](/essentials/styling#classes-prop) prop on a given `FormKit` input within our project which was covered in the opening section of this guide.

Of particular importance when doing an override is the special [`$reset` modifier](/essentials/styling#resetting-classes) for class lists. When the FormKit class system encounters a `$reset` class it will erase the current class list for the given section and only collect class names that occur after the `$reset` token was encountered. This is valuable in a system like Tailwind where it would be painful to have to write override classes or individually disable classes for every globally configured class when deviating from our theme.

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/override/example.vue',
    '/_content/examples/guides/tailwind-theme/override/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/override/rootClasses.js',
    '/_content/examples/guides/tailwind-theme/override/classConfig.js',
  ]"
  init-file-tab="example.vue"
  css-framework="tailwind"
  layout="auto"
  :editable="true"></example>

## Next steps

This guide has walked through creating a Tailwind theme that covers all input types included in FormKit core, but there's still more that could be done in your own project.

Here are some ways to take the above guide even further:

- Add dark-mode support using Tailwind's built-in `dark:` modifier.
- Refactor the `classConfig.js` object to be a function that returns the config object and has methods exposed for easy surgical overrides.
- Encapsulate all of our `classConfig.js` and `rootClasses.js` logic into a plugin that can be easily installed from a GitHub repo or npm package without the need for writing boilerplate.

Hopefully, this guide helped you understand how classes are applied to FormKit inputs and how you can leverage the `rootClasses` function to make use of Tailwind in your FormKit projects. If you want to dive in deeper, try reading about the [core internals of FormKit](/advanced/core) and [the FormKit schema](/advanced/schema)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>


