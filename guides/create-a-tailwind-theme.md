---
title: Create a Tailwind CSS Theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS theme

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

## Using @formkit/tailwindcss

FormKit ships a first-party package `@formkit/tailwindcss` that makes it simple to create a Tailwind theme for FormKit in your project.

The plugin enables you to author your theme as a JavaScript object grouped by input `type` and `sectionKey`. Additionally, it exposes a number of Tailwind variants based on input and form state such as `formkit-invalid:` and `formkit-disabled:` which allow you to dynamically change your input styling.

To get started we need to add the package to our project.

<client-only>

```bash
npm install @formkit/tailwindcss
```

</client-only>

From there we need to do two things:

- Add the `@formkit/tailwindcss` plugin to our project's `tailwind.config.js` file.
- Import `generateClasses` from `@formkit/tailwindcss` and use it where we define our FormKit config options.

<client-only>

```js
// tailwind.config.js
module.exports {
  ...
  plugins: [
    require('@formkit/tailwindcss').default
  ]
  ...
}
```

```js
// app.js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/tailwindcss'
import '../dist/index.css' // wherever your Tailwind styles exist

createApp(App)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses({
          // our theme will go here.
          // ...
          // text: {
          //   label: 'font-bold text-gray-300',
          //   ...
          // }
          // ...
        }),
      },
    })
  )
  .mount('#app')
```

</client-only>

<callout type="warning" label="Path needed if using formkit.config.js">
If you are using a single file for configuration, like <code>formkit.config.js</code> within Nuxt, instead of <code>app.js</code>, you will need to add the path to that file to your <code>tailwind.config.js</code> inside the <code>content</code> property:
</callout>

<client-only>

```js
export default {
  // add the formkit.config.js file
  content: ['./src/**/*.{html,js}', './path/to/formkit.config.js'],
  plugins: [FormKitPlugin ]
}
```

</client-only>


Once this setup is complete we are ready to begin writing our Tailwind theme!

## Our first Tailwind input

To start, let's apply some sensible classes to a `text` style input. This will cover a large surface area because we'll easily re-use these styles to other text-like inputs such as `email`, `password`, `date`, etc.

To specifically target `text` inputs we'll create a `text` key in our theme object and then apply classes to each `sectionKey` as needed.

Here is a `text` input with Tailwind classes applied:

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/tailwind-text-input/example.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-text-input/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-text-input/tailwind.config.js'
  ]"
  init-file-tab="formkit.config.js"
  css-framework="tailwind"
  layout="column"
  :editable="true"></example>

## Using variants

The `@formkit/tailwindcss` provides a number of variants you can use in your class lists to dynamically respond to input and form state.

The currently provided variants are:

- `formkit-disabled:`
- `formkit-invalid:`
- `formkit-errors:`
- `formkit-complete:`
- `formkit-loading:`
- `formkit-submitted:`
- `formkit-multiple:`
- `formkit-action:`
- `formkit-message-validation:`
- `formkit-message-error:`

You use these variants in the same way you use the built-in Tailwind variants such as `dark:` and `hover:`.

Let's add some variants for `formkit-invalid` and `formkit-disabled` to our text input:

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/tailwind-variants/example.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-variants/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-variants/tailwind.config.js'
  ]"
  init-file-tab="formkit.config.js"
  css-framework="tailwind"
  layout="column"
  :editable="true"></example>

## Creating a full theme

Now we're cooking! To create a comprehensive theme all we need to do is define class lists for the `sectionKeys` of all the other input types we'll use in our project.

There are some improvements we can make though. The `generateClasses` function from `@formkit/tailwindcss` allows for a special `global` key that will apply to _all_ inputs. This is helpful for `sectionKeys` such as `help` and `messages` that are usually styled the same across all input types in a project.

Let's create a "Kitchen Sink" of input types, each having their defined class lists applied. Additionally, we'll move our theme to a separate file to assist with readability:

<callout type="tip" label="Global Class Lists">
By using the <code>global</code> key in your theme object you can apply a class list to <em>all</em> inputs that have a given <code>sectionKey</code>. This is useful for things like labels or help text when you want to style them identically regardless of input type.
</callout>

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/tailwind-theme/example.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/theme.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/tailwind.config.js',
  ]"
  init-file-tab="theme.js"
  css-framework="tailwind"
  layout="auto"
  :editable="true"></example>

## Selective overrides

And there we have it! All FormKit core inputs styled with Tailwind utility classes across our entire project.

If we need to override any specific one-offs within our project, we can do so using the [section-key class props](/essentials/styling#section-key-class-props) or the [classes](/essentials/styling#classes-prop) prop on a given `FormKit` input within our project which was covered in the opening section of this guide.

Of particular importance when doing an override is the special [`$reset` modifier](/essentials/styling#resetting-classes) for class lists. When the FormKit class system encounters a `$reset` class it will erase the current class list for the given section and only collect class names that occur after the `$reset` token was encountered. This is valuable in a system like Tailwind where it would be painful to have to write override classes or individually disable classes for every globally configured class when deviating from our theme:

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/override/example.vue',
    '/_content/examples/guides/tailwind-theme/override/theme.js',
    '/_content/examples/guides/tailwind-theme/override/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/override/tailwind.config.js',
  ]"
  init-file-tab="example.vue"
  css-framework="tailwind"
  layout="auto"
  :editable="true"></example>

## Next steps

This guide has walked through creating a Tailwind theme that covers all input types included in FormKit core, but there's still more that could be done in your own project.

Here are some ways to take the above guide even further:

- Add dark-mode support using Tailwind's built-in `dark:` modifier.
- Combine multiple variants such as `formkit-invalid:formkit-submitted:` to add extra emphasis to invalid fields when a user tries to submit an incomplete form.
- Publish your theme as an npm package for easy importing and sharing between projects.

Hopefully, this guide helped you understand how classes are applied to FormKit inputs and how you can leverage the `@formkit/tailwindcss` package to make use of Tailwind in your FormKit projects. If you want to dive in deeper, try reading about the [core internals of FormKit](/advanced/core) and [the FormKit schema](/advanced/schema)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/advanced/core"></cta>
