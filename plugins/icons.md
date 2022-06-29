---
title: Icons
description: Easily add icons to your inputs using the provided FormKit icons or supply you own'
---

# Icons

FormKit comes with over 130 icons out-of-the-box! With the exception of the brand icons (like YouTube, TikTok, or Visa), all icons are original and MIT-licensed for free use within your project. You can use our icons, add your own, or easily connect to a 3rd-party icon set.

Here's a demo of icons in different sections (prefix, suffix, etc.) of various types of inputs:

<example
name="Icons Introduction"
file="/\_content/examples/icons/intro.vue"
formkit-version="next"
view="render">
</example>

## Available icons

The `@formkit/icons` package ships with over 130 common icons to make getting started easy! Use the search below to filter the available icons:

<icon-gallery></icon-gallery>

## Installation & setup

For most users **no installation is required** to use icons (although we recommend [adding your icons to the `iconRegistry`](#adding-icons-to-the-iconregistry) for best performarnce). The icons are included via a 1st-party themes plugin called `createThemePlugin()`, which is enabled by default if you are using FormKit's `defaultConfig()`.

<callout type="note" label="Enabled by default">
The FormKit <code>createThemePlugin()</code> is enabled by default in the FormKit’s <code>defaultConfig()</code>. If your
project is using <code>defaultConfig()</code>, then getting started is as simple as using the <code>${sectionKey}-icon</code>
props on your <code>FormKit</code> components and no installation is required.
</callout>

When using the `defaultConfig` that ships with FormKit there are several top-level options you can use to customize your experience.
See the `createThemePlugin` docs in the next section for expanded explanations of each.

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createThemePlugin } from '@formkit/themes'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig{
  ...
  theme: 'genesis', // allows loading a FormKit theme via CDN
  icons: { heart: '<svg...' }, // allows defining icons for use without remote fetching
  iconLoaderUrl: (iconName) => `https://...`, // where to load remote icons
  iconLoader: (iconName) => {}, // function for more direct control than iconLoaderUrl replacement
  ...
}.mount('#app')
```

</client-only>

### If your project uses a custom config

If your project is **not** using FormKit’s provided `defaultConfig` then to add icons to your project you need to install
the `createThemePlugin()` in your FormKit project's config:

- Import `createThemePlugin()` from the `@formkit/themes` package.
- Add `createThemePlugin()` to your project's plugin array inside of your FormKit config.

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createThemePlugin } from '@formkit/themes'
import { plugin } from '@formkit/vue'

// IMPORTANT: This is only required for apps NOT using defaultConfig()
createApp(App).use(plugin, {
  ...
  plugins: [
    createThemePlugin()
  ]
  ...
}.mount('#app')
```

</client-only>

The `createThemePlugin` takes 4 optional arguments:

- `theme`: A string representation of the theme you would like to use, eg. `'genesis'`. When provided, if a a matching theme is found will be loaded from a CDN and injected into the site head.
- `icons`: An object of SVG icons to be added to the internal `iconRegistry` where keys are icon names and values are the SVG code, eg `{ heart: '<svg ...' '}`
- `iconLoaderUrl`: A function that receives `iconName` returns a URL string where the icon can be loaded if it's not already in the registry. [See example](#using-fontawesome-with-a-custom-iconloaderurl)
- `iconLoader`: A function that receives `iconName` and returns a Promise that resolves to a `string` that is an SVG definition or to `undefined`. Used when you need more control than just modifying the `iconLoaderUrl`. [See example](#an-example-heroicons-iconloader)

Once the theme plugin is installed in your project your FormKit inputs will have icon props available to them.

## Registering icons

### How are icons loaded?

FormKit goes through 4 steps when attempting to load an icon. They are, in order:

1. **SVG prop value** - If the prop value provided is a literal SVG definition (e.g. `prefix-icon="<svg ..."`), then the provided SVG will be used.
2. **The iconRegistry** - If the prop value is a string that does _not_ start with `<svg`, then FormKit looks in the theme plugin’s `iconRegistry` — a set of key/value pairs of icon names and SVG definitions — for a matching key.
3. **Your project's CSS variables** - If there is a CSS variable that matches `--fk-icon-${yourIconName}` defined in your CSS, then it will be parsed and loaded into the `iconRegistry`. The value of the CSS variable is expected to be a base64 encoded SVG — it should not be wrapped in quotes. This is how FormKit ships default icons for inputs in the `genesis` theme.
4. **The JSDelivr CDN** - If no matching icon can be found in your codebase, then a request will be made to the `@formkit/icons` package using the current version of FormKit installed in your project. If a matching icon name is found it will be used.

Because FormKit falls back to CDN requests for icons, you can easily get started in a new project by providing supported icon names to your input’s icon props
and they will be loaded for you automatically — no setup required!. 🪄

Remotely loaded SVGs are added to the internal `iconRegistry` in memory and additional requests for the icon will be cached until a user reloads the page.

### Adding icons to the iconRegistry

Magic CDNs are great — but your project will benefit from the performance gains of having icons registered locally in your project.
You can do this by adding icons to your root FormKit config. FormKit icons can be imported from the `@formkit/icons` package.

<client-only>

```bash
yarn add @formkit/icons
```
</client-only>

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { applicationIcons, ethereum } from '@formkit/icons'
import { thirdPartyIcon } from '@some-other-icon-package'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig({
  icons: {
    ...applicationIcons, // spread an entire group of icons
    ethereum, // or add single icons
    thirdPartyIcon, // you can import any SVG icon
    formkit: `<svg ...` // or define your own
  }
  // createThemePlugin() is included in defaultConfig()
  // so we do not need to worry about setting it up.
}).mount('#app')
```
</client-only>

<callout type="note" label="Performance">
FormKit automatically loads missing icons from its icon package on the JSDelivr CDN. This is great for quickly getting up
and running when building a form, but we recommend adding the icons you end up using to your project via import for best performance.
</callout>

## Outputting icons

### Adding icons to inputs

Many FormKit inputs support `suffix` and `prefix` icons. You can use the `prefix-icon` and `suffix-icon` props on any
`text`-like input such as `text`, `email`, `search`, `date`, etc. These props are also available on the `select`, `color`,
and `range` inputs as well.

The `select` input has a `select-icon` prop that allows you to change the icon used for the select input’s control.

The `file` input has `file-remove-icon` and `file-item-icon` props:

<example
name="Icons Introduction"
file="/\_content/examples/icons/usage-basic.vue">
</example>

### Using custom SVG icons

Sometimes you need to render a one-off icon in your project. While you can add custom SVGs to `iconRegistry` via the `icons` object in your
project’s FormKit config, you can also directly supply an SVG definition to an icon prop and the SVG will be rendered for you:

<example
name="Icons Introduction"
file="/\_content/examples/icons/inline-svg.vue">
</example>

### Using the `<FormKitIcon />` component

FormKit ships with a component called `<FormKitIcon />` that allows you out output any icon from the `iconRegistry` anywhere
within your project. Need an icon you're using in FormKit on some other part of your UI? No problem:

<example
name="Icon Component"
file="/\_content/examples/icons/icon-component.vue">
</example>

## Icon click handlers

Every icon prop also registers a click handler prop. The `prefix-icon` prop will
have a corresponding `@prefix-icon-click` prop, etc.

Each click handler prop receives the input's core `node` and the click `event` as arguments.

<example
name="Icons Introduction"
file="/\_content/examples/icons/handle-click.vue">
</example>

## Using 3rd-party libraries

There's tons of great options out there when you’re shopping around for icons to use in your project. If you want to use
3rd-party icons in your FormKit project then you can supply a custom `iconLoaderUrl` or complete `iconLoader` (either globally, at the node config level, or as a component prop)
which is responsible for retrieving icons that do not already exist in the `iconRegistry`.

Note that the `iconLoaderUrl` and `iconLoader` functions are _only meant to handle missing icons_! For the best possible performance you can (and should) load asy SVG icons
you _know_ you will be using into the `iconRegistry` by using the `icons` configuration prop in your FormKit config.

Sometimes — in cases such as a form builder or CMS — you don't know in advance which icons you’ll need. That's where remote loading of icons shines.

- The `iconLoaderUrl` and `iconLoader` functions each receive the current `iconName` being requested as an argument
- The return value of `iconLoaderUrl` should be a string representation of a URL which is the full path to a remote CDN value for your icon — including the `iconName`. This is the easiest way to change the fallback loading behavior.
- if you need more control then use `iconLoader` which allows you full control of all the logic for remote icon fetching. This function should return a `Promise` that resolves to a `string` or `undefined`.
- You only need to use `iconLoaderUrl` _or_ `iconLoader` — if you supply both then only `iconLoader` will be used.

### Using FontAwesome with a custom `iconLoaderUrl`

Below is an implementation of FormKit loading icons from FontAwesome by replacing the `iconLoaderUrl` with a different CDN path.

<example
name="FontAwesome Icons"
init-file-tab="formkit.config.js"
:file="[
  '/\_content/examples/icons/font-awesome/index.vue',
  '/\_content/examples/icons/font-awesome/formkit.config.js'
]">
</example>

### An example Heroicons `iconLoader``

Below is an implementation of FormKit with a fully custom `iconLoader` that fetches missing icons from Heroicons instead of the FormKit icon set.

<example
name="Heroicons Icons"
init-file-tab="formkit.config.js"
:file="[
  '/\_content/examples/icons/heroicons/index.vue',
  '/\_content/examples/icons/heroicons/formkit.config.js'
]">
</example>
