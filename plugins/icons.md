---
title: Icons
description: Easily add icons to your inputs’ prefix and suffix section keys. Use the supplied FormKit icons or supply you own'
---

# Icons

FormKit ships with a 1st-party add-on that allows you to easily add icons to the prefix and suffix of most input types.
The package ships with over 40 common icons that are all MIT Licensed and free to use within your project — or you can include your own.

<example
name="Icons Introduction"
file="/\_content/examples/icons/intro.vue"
formkit-version="next"
view="render">
</example>

## Installation

To add the `Icons` add-on to your FormKit project:

- Install the `@formkit/icons` package
- Import `createIconPlugin` from the `@formkit/icons` package
- Import any icons you would like to use from the package. You can import sets (eg. `applicationIcons`) or individual icons (eg. `add`, `dollar`).
- Add the icon plugin to your config and pass it the icons you want to use in your project.

<client-only>

```bash
yarn add @formkit/icons
```

</client-only>

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createIconPlugin, applicationIcons, ethereum } from '@formkit/icons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig({
  plugins: [
    createIconPlugin({
      ...applicationIcons, // spread a collection of icons
      ethereum, // add an individual icon
      myCustomIcon: `<svg xmlns="http://...` // or define custom SVGs to use as icons
    })
  ]
}).mount('#app')
```

</client-only>

## Usage

### outputting icons

Once you have the Icons add-on installed in your project you can use any the SVGs that you have defined in `createIconPlugin`
by adding them to your inputs via the new `icon` prop.

<example
name="Icons Introduction"
file="/\_content/examples/icons/usage-basic.vue">
</example>

By default, icons are shown in the `prefix` section of an input. If you'd like to show an icon in the `suffix` of an input field
you can do so with the `icon-suffix` prop.

<example
name="Icons Introduction"
file="/\_content/examples/icons/usage-suffix.vue">
</example>

You can change the default location of an icons to always be the `suffix` by using the `iconPosition` configuration option in your project

<client-only>

```js
// main.js
...
createApp(App).use(plugin, defaultConfig({
  config: {
    iconPosition: 'suffix' // make the `icon` prop output in the suffix section
  }
  ...
}).mount('#app')
...

```
</client-only>

If you want to ensure that an icon is always rendered at the `prefix` or `suffix` slot regardless of the `iconPosition` configuration setting
then you can always use the explicit `icon-prefix` and `icon-suffix` props.

<example
name="Icons Introduction"
file="/\_content/examples/icons/explicit-props.vue">
</example>

### Custom SVG icons

Sometimes you just need to render a one-off icon in your project. While you can add custom SVGs to the list of icons available when you call
`createIconPlugin` you can also directly supply an SVG definition to the `icon`, `icon-prefix` or `icon-suffix` prop and that SVG will be rendered for you.

<example
name="Icons Introduction"
file="/\_content/examples/icons/inline-svg.vue">
</example>

### Handling icon clicks

What if you want to respond to a user clicking on an icon? You can register a click handler with the `@icon-click` property, which will
receive the `node` and the icon `location` as arguments.

<example
name="Icons Introduction"
file="/\_content/examples/icons/handle-click.vue">
</example>

<callout type="warning" label="One click handler for both icons">
If you output both <code>prefix</code> and <code>suffix</code> icons it's important to note that the same <code>@icon-click</code> handler will fire for both icons.
Use the provided <code>location</code> argument to scope your click handler to whichever icon click events you wish to respond to.
</callout>

## Available icons

The `@formkit/icons` package ships with over 40 common icons to make getting started easy! Use the search below to filter the available icons which are grouped by category.

<icon-gallery></icon-gallery>

## Using 3rd-party icons

### By defining SVGs
Sometimes you'll want to user 3rd-party icons with the `@formkit/icons` package. The easiest way to use 3rd-party icons is to define the SVGs inline
and name them by passing them to `createIconPlugin` when setting up your project.

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createIconPlugin } from '@formkit/icons'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig({
  plugins: [
    createIconPlugin({
      myCustomIcon: `<svg xmlns="http://...`, // define SVGs inline
      anotherIcon: `<svg xmlns="http://...`
    })
  ]
}).mount('#app')
```

```html
<template>
  <FormKit
    type="text"
    icon="myCustomIcon"
    icon-suffix="anotherIcon"
  />
</template>
```

### By using a custom component

But what about libraries like Font Awesome that provide their own component for rendering icons? How would we use something like that in our project?

The `defineIconPlugin()` function has a trick up its sleave to help with this. If you supply a function that returns [FormKit schema](/advanced/schema)
as the first argument to `defineIconPlugin()` — instead of an object of icons — then your function will run each time an icon is processed and allow you to define the markup that you'd like to
render for that icon. In doing so, you can supply a custom component and provide the icon's prop value to it.

Here's an example using Font Awesome with the `@formkit/icons` plugin. To get it working we do the following:

- Include the necessary Font Awesome packages in our project (Font Awesome currently only supports Vue 3 on their `@prelease` tag).
- Set up Font Awesome to use icons according to their documentation.
- Create a function that returns schema that will render the `icon` we provide to our FormKit element inside of a `FontAwesomeIcon` component
- Supply our custom schema function to `defineIconPlugin()`.

Here it is all put together:

<example
name="Icons Introduction"
file="/\_content/examples/icons/font-awesome.vue"
:show-import-map="true"
:set-show-file-tabs="true"
import-map="/\_content/examples/icons/importMap.json">
</example>

<callout type="warning" label="A note on Font Awesome">
Font Awesome does not currently support Vue 3 on their latest release. If you want to use Font Awesome with Vue 3 be sure to
install <code>@fortawesome/vue-fontawesome@3.0.0-5</code> or higher.
</callout>

</client-only>
