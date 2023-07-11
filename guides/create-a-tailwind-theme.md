---
title: Create a Tailwind CSS theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS theme

:PageToc

In this guide, we’ll walk through the process of creating a custom Tailwind theme for your forms and inputs. Tailwind has risen to the forefront of CSS utility class libraries, and FormKit was authored with its capabilities in mind. Let’s get started!

::Callout
---
type: "tip"
label: "SFC Build tool"
---
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
::

::Callout
---
type: "warning"
label: "Don't include the default theme"
---
If you plan to use Tailwind CSS for your form styles then please ensure that your project is <strong>not</strong> importing the base <code>genesis</code> theme that ships with FormKit — otherwise you will get weird styling results.
::

## Inline usage

In the context of a `.vue` file that represents a component, it's possible to create a Tailwind theme using the `section-key` [class props](/essentials/styling#section-key-class-props) or the `classes` [prop](/essentials/styling#classes-prop) provided by FormKit.

If your component represents your entire form and your project only requires a single form, this may be all that you need. Here is an example of applying the same Tailwind classes to a FormKit `text` input using both the `section-key` props and the `classes` prop:

::Example
---
file: "_content/_examples/guides/tailwind-theme/inline-usage/example.vue"
css-framework: "tailwind"
add-tailwind-files: false
editable: true
---
::

This is a low-barrier way to apply Tailwind styles to your FormKit forms, but what if you have multiple forms? Copy-pasting class lists between components is not ideal and will lead to inadvertent variations in styling across your project over time.

Let's explore how we can apply Tailwind classes globally to _all_ FormKit inputs within our project.

## Using @formkit/themes

FormKit ships a first-party package `@formkit/themes` that includes Tailwind CSS support — making it easy to create a Tailwind CSS theme for FormKit in your project.

The package enables you to author your theme as a JavaScript object grouped by input `type` and `sectionKey`. Additionally, you can access a number of Tailwind variants based on input and form state such as `formkit-invalid:` and `formkit-disabled:` which allow you to dynamically change your input styling.

To get started we need to add the package to our project.

```bash
npm install @formkit/themes
```

From there we need to do two things:

- Add the `formKitTailwind` plugin from `@formkit/themes` to our project's `tailwind.config.js` file.
- Create a theme file (something like `tailwind-theme.js`) in our project.
- Import the `generateClasses` helper function from `@formkit/themes` and use it with our theme in our FormKit config options.

```js
// tailwind.config.js
const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports {
  ...
  content: [
    ...
    './tailwind-theme.js',
  ],
  plugins: [
    formKitTailwind
  ]
  ...
}
```

```js
// tailwind-theme.js
export default {
  // our theme will go here.
  // ...
  // text: {
  //   label: 'font-bold text-gray-300',
  //   ...
  // }
  // ...
}
```

```js
// app.js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import myTailwindTheme from './tailwind-theme.js'
import '../dist/index.css' // wherever your Tailwind styles exist

createApp(App)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: generateClasses(myTailwindTheme),
      },
    })
  )
  .mount('#app')
```

Once this setup is complete we are ready to begin writing our Tailwind theme!

## Our first Tailwind input

To start, let's apply some sensible classes to a `text` style input. This will cover a large surface area because we'll easily re-use these styles to other text-like inputs such as `email`, `password`, `date`, etc.

To specifically target `text` inputs we'll create a `text` key in our theme object and then apply classes to each `sectionKey` as needed.

Here is a `text` input with Tailwind classes applied:

::Example
---
file: [
  '_content/_examples/guides/tailwind-theme/tailwind-text-input/example.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-text-input/tailwind-theme.js',
  '_content/_examples/guides/tailwind-theme/tailwind-text-input/formkit.config.js',
  '_content/_examples/guides/tailwind-theme/tailwind-text-input/tailwind.config.js'
]
init-file-tab: "tailwind-theme.js"
css-framework: "tailwind"
add-tailwind-files: false
editable: true
---
::


## Using variants

The `formKitTailwind` plugin from `@formkit/themes` provides a number of variants you can use in your class lists to dynamically respond to input and form state.

::Callout
---
type: "tip"
label: "Group variants"
---
If you're using variants in a nested case, the variants may be linked to its parent instead of itself.
To fix that, add to the outer section <code>group/{modifier}</code>, and use the variant with the same modifier <code>formkit-invalid/{modifier}:</code>
::

The currently provided variants are:

- `formkit-disabled:`
- `formkit-invalid:`
- `formkit-checked:`
- `formkit-errors:`
- `formkit-complete:`
- `formkit-loading:`
- `formkit-submitted:`
- `formkit-multiple:`
- `formkit-prefix-icon`
- `formkit-suffix-icon`

You use these variants in the same way you use the built-in Tailwind variants such as `dark:` and `hover:`.

Let's add some variants for `formkit-invalid` and `formkit-disabled` to our text input:

::Example
---
file: [
  '_content/_examples/guides/tailwind-theme/tailwind-variants/example.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-variants/tailwind-theme.js',
  '_content/_examples/guides/tailwind-theme/tailwind-variants/formkit.config.js',
  '_content/_examples/guides/tailwind-theme/tailwind-variants/tailwind.config.js'
]
init-file-tab: "tailwind-theme.js"
css-framework: "tailwind"
add-tailwind-files: false
editable: true
---
::


## A complete Tailwind theme — recreating Genesis CSS

::VideoCard
---
title: "Create a Tailwind CSS Theme - Vue School Course"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "11 mins"
external-vid: "https://vueschool.io/lessons/create-a-tailwind-css-theme-for-formkit?friend=formkit"
---
::

Now we're cooking! To create a comprehensive theme all we need to do is define class lists for the `sectionKeys` of all the other input types we'll use in our project.

There are some improvements we can make though. The `generateClasses` helper function from `@formkit/themes` allows for a special `global` key that will apply to _all_ inputs. This is helpful for `sectionKeys` such as `help` and `messages` that are usually styled the same across all input types in a project.

::Callout
---
type: "tip"
label: "Global and Family Class Lists"
---
By using the <code>global</code> and <code>family:</code> keys in your theme object you can apply a class lists to <em>all</em> inputs that have a given <code>sectionKey</code> either globally or within a family of inputs. This is useful for things like labels or help text when you want to share styling across a wide variety of inputs.
::

Let's create a "Kitchen Sink" of input types, each having their defined class lists applied. Here is the theme in isolation for better readability:

:TailwindTheme

And here is our Tailwind theme when it is applied to all available FormKit inputs:

::Callout
---
type: "tip"
label: "FormKit icons"
---
FormKit inputs ship with their own <code>decorator</code> icons that can be used in place of browser-default styles that typcially ship with checkboxes, radios, select inputs, and more.

If you want to use these types of icons in your Tailwind theme be sure to import them from <code>@formkit/icons</code> and include them in your FormKit config.

::

::Example
---
file: [
  '_content/_examples/guides/tailwind-theme/tailwind-theme/example.vue',
  '_content/_examples/tailwind-theme.js',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/formkit.config.js',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/tailwind.config.js',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/KitchenSinkForm.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Autocomplete.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Datepicker.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Dropdown.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Mask.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Rating.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Repeater.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Taglist.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Toggle.vue',
  '_content/_examples/guides/tailwind-theme/tailwind-theme/Transferlist.vue'
]
init-file-tab: "formkit.config.js"
css-framework: "tailwind"
add-tailwind-files: false
layout: "auto"
editable: true
---
::


## Selective overrides

And there we have it! All FormKit inputs styled with Tailwind utility classes across our entire project.

If we need to override any specific one-offs within our project, we can do so using the [section-key class props](/essentials/styling#section-key-class-props) or the [classes](/essentials/styling#classes-prop) prop on a given `FormKit` input within our project which was covered in the opening section of this guide.

Of particular importance when doing an override is the special [`$reset` modifier](/essentials/styling#resetting-classes) for class lists. When the FormKit class system encounters a `$reset` class it will erase the current class list for the given section and only collect class names that occur after the `$reset` token was encountered. This is valuable in a system like Tailwind where it would be painful to have to write override classes or individually disable classes for every globally configured class when deviating from our theme:

::Example
---
file: [
  '_content/_examples/guides/tailwind-theme/override/example.vue',
  '_content/_examples/tailwind-theme.js',
  '_content/_examples/guides/tailwind-theme/override/formkit.config.js',
  '_content/_examples/guides/tailwind-theme/override/tailwind.config.js',
]
init-file-tab: "example.vue"
css-framework: "tailwind"
add-tailwind-files: false
layout: "auto"
editable: true
---
::


## Next steps

This guide has walked through creating a Tailwind theme that covers all input types included in FormKit, but there's still more that could be done in your own project.

Here are some ways to take the above guide even further:

- Add dark-mode support using Tailwind's built-in `dark:` modifier.
- Combine multiple variants such as `formkit-invalid:formkit-submitted:` to add extra emphasis to invalid fields when a user tries to submit an incomplete form.
- Publish your theme as an npm package for easy importing and sharing between projects.

Hopefully, this guide helped you understand how classes are applied to FormKit inputs and how you can leverage the `formKitTailwind` plugin from the `@formkit/themes` package to make use of Tailwind in your FormKit projects. If you want to dive in deeper, try reading about the [core internals of FormKit](/essentials/architecture) and [the FormKit schema](/essentials/schema)!

::Cta
---
label: "Want more? Start by reading about FormKit core." 
button: "Dig deeper" 
href: "/essentials/architecture"
---
::
