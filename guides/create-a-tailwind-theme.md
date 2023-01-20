---
title: Create a Tailwind CSS theme
description: Follow this guide to learn how to leverage Tailwind CSS with your FormKit forms and inputs
---

# Create a Tailwind CSS theme

<page-toc></page-toc>

In this guide, we’ll walk through the process of creating a custom Tailwind theme for your forms and inputs. Tailwind has risen to the forefront of CSS utility class libraries, and FormKit was authored with its capabilities in mind. Let’s get started!

<callout type="tip" label="SFC Build tool">
This guide assumes you are using a standard Vue 3 build tool like Vite, Nuxt 3, or Vue CLI that will allow you to import <code>.vue</code> single file components.
</callout>

<callout type="warning" label="Don't include the default theme">
If you plan to use Tailwind CSS for your form styles then please ensure that your project is <strong>not</strong> importing the base <code>genesis</code> theme that ships with FormKit — otherwise you will get weird styling results.
</callout>

## Inline usage

In the context of a `.vue` file that represents a component, it's possible to create a Tailwind theme using the `section-key` [class props](/essentials/styling#section-key-class-props) or the `classes` [prop](/essentials/styling#classes-prop) provided by FormKit.

If your component represents your entire form and your project only requires a single form, this may be all that you need. Here is an example of applying the same Tailwind classes to a FormKit `text` input using both the `section-key` props and the `classes` prop:

<example
  file="/_content/examples/guides/tailwind-theme/inline-usage/example.vue"
  css-framework="tailwind"
  :add-tailwind-files="false"
  :editable="true">
</example>

This is a low-barrier way to apply Tailwind styles to your FormKit forms, but what if you have multiple forms? Copy-pasting class lists between components is not ideal and will lead to inadvertent variations in styling across your project over time.

Let's explore how we can apply Tailwind classes globally to _all_ FormKit inputs within our project.

## Using @formkit/themes

FormKit ships a first-party package `@formkit/themes` that includes Tailwind CSS support — making it easy to create a Tailwind CSS theme for FormKit in your project.

The package enables you to author your theme as a JavaScript object grouped by input `type` and `sectionKey`. Additionally, you can access a number of Tailwind variants based on input and form state such as `formkit-invalid:` and `formkit-disabled:` which allow you to dynamically change your input styling.

To get started we need to add the package to our project.

<client-only>

```bash
npm install @formkit/themes
```

</client-only>

From there we need to do two things:

- Add the `formKitTailwind` plugin from `@formkit/themes` to our project's `tailwind.config.js` file.
- Import the `generateClasses` helper function from `@formkit/themes` and use it where we define our FormKit config options.

<client-only>

```js
// tailwind.config.js
const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports {
  ...
  plugins: [
    formKitTailwind
  ]
  ...
}
```

```js
// app.js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
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
// tailwind.config.js for Nuxt users
const formKitTailwind = require('@formkit/themes/tailwindcss')

export default {
  // add the formkit.config.js file
  content: ['./src/**/*.{html,js}', './path/to/formkit.config.js'],
  plugins: [formKitTailwind],
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
  :add-tailwind-files="false"
  :editable="true"></example>

## Using variants

The `formKitTailwind` plugin from `@formkit/themes` provides a number of variants you can use in your class lists to dynamically respond to input and form state.

<callout type="tip" label="Group variants">
If you're using variants in a nested case, the variants may be linked to its parent instead of itself.
To fix that, add to the outer section <code>group/{modifier}</code>, and use the variant with the same modifier <code>formkit-invalid/{modifier}:</code>
</callout>

The currently provided variants are:

- `formkit-disabled:`
- `formkit-invalid:`
- `formkit-errors:`
- `formkit-complete:`
- `formkit-loading:`
- `formkit-submitted:`
- `formkit-multiple:`
- `formkit-prefix-icon`
- `formkit-suffix-icon`

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
  :add-tailwind-files="false"
  :editable="true"></example>

## A complete Tailwind theme — recreating Genesis CSS

<VideoCard
  title="Create a Tailwind CSS Theme - Vue School Course"
  poster="https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
  watch-time="11 mins"
  external-vid="https://vueschool.io/lessons/create-a-tailwind-css-theme-for-formkit?friend=formkit">
</VideoCard>

Now we're cooking! To create a comprehensive theme all we need to do is define class lists for the `sectionKeys` of all the other input types we'll use in our project.

There are some improvements we can make though. The `generateClasses` helper function from `@formkit/themes` allows for a special `global` key that will apply to _all_ inputs. This is helpful for `sectionKeys` such as `help` and `messages` that are usually styled the same across all input types in a project.

<callout type="tip" label="Global and Family Class Lists">
By using the <code>global</code> and <code>family:</code> keys in your theme object you can apply a class lists to <em>all</em> inputs that have a given <code>sectionKey</code> either globally or within a family of inputs. This is useful for things like labels or help text when you want to share styling across a wide variety of inputs.
</callout>

Let's create a "Kitchen Sink" of input types, each having their defined class lists applied. Here is the theme in isolation for better readability:

<client-only>

```js
// The following Tailwind theme aspires to be a reproduction of the 
// default optional Genesis CSS theme that ships with FormKit

export default {
  // Global styles apply to _all_ inputs with matching section keys
  global: {
    fieldset: 'max-w-md border border-gray-400 rounded px-2 pb-1',
    help: 'text-xs text-gray-500',
    inner: 'formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
    input: 'appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none',
    label: 'block mb-1 font-bold text-sm',
    legend: 'font-bold text-sm',
    loaderIcon: 'inline-flex items-center w-4 text-gray-600 animate-spin',
    message: 'text-red-500 mb-1 text-xs',
    messages: 'list-none p-0 mt-1 mb-0',
    outer: 'mb-4 formkit-disabled:opacity-50',
    prefixIcon: 'w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
    suffixIcon: 'w-7 pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto'
  },
  
  // Family styles apply to all inputs that share a common family
  'family:box': {
    decorator: 'block relative h-5 w-5 mr-2 rounded bg-white bg-gradient-to-b from-transparent to-gray-200 ring-1 ring-gray-400 peer-checked:ring-blue-500 text-transparent peer-checked:text-blue-500',
    decoratorIcon: 'flex p-[3px] w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
    help: 'mb-2 mt-1.5',
    input: 'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
    label: '$reset text-sm text-gray-700 mt-1 select-none',
    wrapper: 'flex items-center mb-1',
  },
  'family:button': {
    input: '$reset inline-flex items-center bg-blue-600 text-white text-sm font-normal py-3 px-6 rounded',
    wrapper: 'mb-1',
    prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
    suffixIcon: '$reset block w-4 ml-2 stretch',
  },
  'family:dropdown': {
    dropdownWrapper: 'my-2 w-full drop-shadow-lg rounded [&::-webkit-scrollbar]:hidden',
    emptyMessageInner: 'flex items-center justify-center text-sm p-2 text-center w-full text-gray-500 [&>span]:mr-3 [&>span]:ml-0',
    inner: 'max-w-md relative flex ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 rounded mb-1 formkit-disabled:focus-within:ring-gray-400 formkit-disabled:focus-within:ring-1 [&>span:first-child]:focus-within:text-blue-500',
    input: 'w-full px-3 py-2',
    listbox: 'bg-white drop-shadow-lg rounded overflow-hidden',
    listboxButton: 'flex w-12 self-stretch justify-center mx-auto',
    listitem: 'pl-7 relative hover:bg-gray-300 data-[is-active="true"]:bg-gray-300 data-[is-active="true"]:aria-selected:bg-blue-600 aria-selected:bg-blue-600 aria-selected:text-white',
    loaderIcon: 'ml-auto',
    loadMoreInner: 'flex items-center justify-center text-sm p-2 text-center w-full text-blue-500 formkit-loading:text-gray-500 cursor-pointer [&>span]:mr-3 [&>span]:ml-0',
    option: 'p-2.5',
    optionLoading: 'text-gray-500',
    placeholder: 'p-2.5 text-gray-400',
    selector: 'flex w-full justify-between items-center [&u]',
    selectedIcon: 'block absolute top-1/2 left-2 w-3 -translate-y-1/2',
    selectIcon: 'flex box-content w-4 px-2 self-stretch grow-0 shrink-0',
  },
  'family:text': {
    inner: 'flex items-center max-w-md ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded mb-1',
    input: 'w-full px-3 py-2 border-none text-base text-gray-700 placeholder-gray-400',
  },
  
  // Specific styles apply only to a given input type
  color: {
    inner: 'flex max-w-[5.5em] w-full formkit-prefix-icon:max-w-[7.5em] formkit-suffix-icon:formkit-prefix-icon:max-w-[10em]',
    input: '$reset appearance-none w-full cursor-pointer border-none rounded p-0 m-0 bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none',
    suffixIcon: 'min-w-[2.5em] pr-0 pl-0 m-auto'
  },
  file: {
    fileItem: 'flex items-center text-gray-800 mb-1 last:mb-0',
    fileItemIcon: 'w-4 mr-2 shrink-0',
    fileList: 'shrink grow peer px-3 py-2 formkit-multiple:data-[has-multiple="true"]:mb-6',
    fileName: 'break-all grow text-ellipsis',
    fileRemove: 'relative z-[2] ml-auto text-[0px] hover:text-red-500 pl-2 peer-data-[has-multiple=true]:text-sm peer-data-[has-multiple=true]:text-blue-500 peer-data-[has-multiple=true]:ml-3 peer-data-[has-multiple=true]:mb-2 formkit-multiple:bottom-[0.15em] formkit-multiple:pl-0 formkit-multiple:ml-0 formkit-multiple:left-[1em] formkit-multiple:formkit-prefix-icon:left-[3.75em]',
    fileRemoveIcon: 'block text-base w-3 relative z-[2]',
    inner: 'relative max-w-md cursor-pointer formkit-multiple:[&>button]:absolute',
    input: 'cursor-pointer text-transparent absolute top-0 right-0 left-0 bottom-0 opacity-0 z-[2]',
    noFiles: 'flex w-full items-center px-3 py-2 text-gray-400',
    noFilesIcon: 'w-4 mr-2'
  },
  radio: {
    decorator: 'rounded-full',
    decoratorIcon: 'w-5 p-[5px]'
  },
  range: {
    inner: '$reset flex items-center max-w-md',
    input: '$reset w-full mb-1 h-2 p-0 rounded-full',
    prefixIcon: '$reset w-4 mr-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
    suffixIcon: '$reset w-4 ml-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto'
  },
  select: {
    inner: 'flex relative max-w-md items-center rounded mb-1 ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>span:first-child]:focus-within:text-blue-500',
    input: 'w-full pl-3 pr-8 py-2 border-none text-base text-gray-700 placeholder-gray-400 formkit-multiple:p-0 data-[placeholder="true"]:text-gray-400 formkit-multiple:data-[placeholder="true"]:text-inherit',
    selectIcon: 'flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none',
    option: 'formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700'
  },
  textarea: {
    inner: 'flex max-w-md rounded mb-1 ring-1 ring-gray-400 focus-within:ring-blue-500 [&>label:first-child]:focus-within:text-blue-500',
    input: 'block w-full h-32 px-3 py-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline',
  },
  
  // PRO input styles
  autocomplete: {
    closeIcon: 'block grow-0 shrink-0 w-3 mr-3.5',
    inner: '[&>div>[data-value]]:absolute [&>div>[data-value]]:mb-0',
    option: 'grow text-ellipsis',
    selection: 'static flex left-0 top-0 right-0 bottom-0 mt-0 mb-2 rounded bg-gray-100',
  },
  rating: {
    inner: 'relative flex items-center w-[8em] formkit-disabled:bg-transparent',
    itemsWrapper: 'w-full',
    onItems: 'text-yellow-400',
    onItemWrapper: '[&>*]:w-full [&>svg]:h-auto [&>svg]:max-w-none [&>svg]:max-h-none',
    offItems: 'text-gray-500',
    offItemWrapper: '[&>*]:w-full [&>svg]:h-auto [&>svg]:max-w-none [&>svg]:max-h-none'
  },
  repeater: {
    content: 'grow p-3 flex flex-col align-center',
    controlLabel: 'absolute opacity-0 pointer-events-none',
    controls: 'flex flex-col items-center justify-center bg-gray-100 p-3',
    downControl: 'hover:text-blue-500 disabled:hover:text-inherit disabled:opacity-25',
    fieldset: 'py-4 px-5',
    help: 'mb-2 mt-1.5',
    item: 'flex w-full mb-1 rounded border border-gray-200',
    moveDownIcon: 'block w-3 my-1',
    moveUpIcon: 'block w-3 my-1',
    removeControl: 'hover:text-blue-500 disabled:hover:text-inherit disabled:opacity-25',
    removeIcon: 'block w-5 my-1',
    upControl: 'hover:text-blue-500 disabled:hover:text-inherit disabled:opacity-25'
  },
  taglist: {
    input: 'px-1 py-1 w-[0%] grow',
    removeSelection: 'w-2.5 mx-1 self-center text-black leading-none',
    tag: 'flex items-center my-1 p-1 bg-gray-200 text-xs rounded-full',
    tagWrapper: 'mr-1 focus:outline-none focus:text-white [&>div]:focus:bg-blue-500 [&>div>button]:focus:text-white',
    tagLabel: 'pl-2 pr-1',
    tags: 'flex items-center flex-wrap w-full py-1.5 px-2',
  },
  toggle: {
    altLabel: 'block w-full mb-1 font-bold text-sm',
    inner: '$reset inline-block mr-2',
    input: 'peer absolute opacity-0 pointer-events-none',
    innerLabel: 'text-[10px] font-bold absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1',
    thumb: 'relative left-0 aspect-square rounded-full transition-all w-5 bg-gray-100',
    track: 'p-0.5 min-w-[3em] relative rounded-full transition-all bg-gray-400 peer-checked:bg-blue-500 peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0',
    valueLabel: 'font-bold text-sm',
    wrapper: 'flex flex-wrap items-center mb-1'
  }
}
```

</client-only>

And here is our Tailwind theme when it is applied to all available FormKit inputs:

<callout type="tip" label="FormKit icons">
FormKit inputs ship with their own <code>decorator</code> icons that can be used in place of browser-default styles that typcially ship with checkboxes, radios, select inputs, and more. 

If you want to use these types of icons in your Tailwind theme be sure to import them from <code>@formkit/icons</code> and include them in your FormKit config.

</callout>

<example
  :file="[
    '/_content/examples/guides/tailwind-theme/tailwind-theme/example.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/theme.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/formkit.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/tailwind.config.js',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/KitchenSinkForm.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Autocomplete.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Dropdown.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Mask.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Rating.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Repeater.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Taglist.vue',
    '/_content/examples/guides/tailwind-theme/tailwind-theme/Toggle.vue'
  ]"
  init-file-tab="formkit.config.js"
  css-framework="tailwind"
  :add-tailwind-files="false"
  layout="auto"
  :editable="true"></example>

## Selective overrides

And there we have it! All FormKit inputs styled with Tailwind utility classes across our entire project.

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
  :add-tailwind-files="false"
  layout="auto"
  :editable="true"></example>

## Next steps

This guide has walked through creating a Tailwind theme that covers all input types included in FormKit, but there's still more that could be done in your own project.

Here are some ways to take the above guide even further:

- Add dark-mode support using Tailwind's built-in `dark:` modifier.
- Combine multiple variants such as `formkit-invalid:formkit-submitted:` to add extra emphasis to invalid fields when a user tries to submit an incomplete form.
- Publish your theme as an npm package for easy importing and sharing between projects.

Hopefully, this guide helped you understand how classes are applied to FormKit inputs and how you can leverage the `formKitTailwind` plugin from the `@formkit/themes` package to make use of Tailwind in your FormKit projects. If you want to dive in deeper, try reading about the [core internals of FormKit](/essentials/architecture) and [the FormKit schema](/essentials/schema)!

<cta label="Want more? Start by reading about FormKit core." button="Dig deeper" href="/essentials/architecture"></cta>
