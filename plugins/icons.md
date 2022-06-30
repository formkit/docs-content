---
title: Icons
description: Easily add icons to your inputs using the provided FormKit icons or supply you own'
---

# Icons

FormKit comes with over 130 icons out-of-the-box! With the exception of the brand icons (like YouTube, TikTok, or Visa) all icons are original and MIT-licensed for free use within your project. You can use [our icons](#available-icons), [add your own](#adding-icons-to-the-iconregistry), or easily [connect to a 3rd-party icon set](#using-3rd-party-libraries).

Using icons in your project is as easy as providing your desired icon name to one of an input's icon props.

<client-only >

```html
<FormKit prefix-icon="email" />
<FormKit suffix-icon="settings" />
<FormKit type="select" select-icon="caretDown" />
```
</client-only>

It's that easy! 🎉

#### A quick demo of icons in action

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

For most users **no installation is required** to use icons (although we recommend [adding your icons to the `iconRegistry`](#adding-icons-to-the-iconregistry)
for best performarnce). Icon support is provided via a 1st-party FormKit plugin called `createThemePlugin()` — This plugin
is enabled by default if you are using FormKit's `defaultConfig()`.

<callout type="note" label="Icon functionality is installed by default in FormKit">
The FormKit <code>createThemePlugin()</code> is enabled by default in the FormKit’s <code>defaultConfig()</code>. If your
project is using <code>defaultConfig()</code> (this is usually the case), then getting started is as simple as using the
<code>${section}-icon</code> props available on <code>FormKit</code> components — no additional setup required.
</callout>

When using the `defaultConfig` that ships with FormKit there are several top-level configuration options you can use to
customize your experience. See the `createThemePlugin` docs in the next section for expanded explanations of each.

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { createThemePlugin } from '@formkit/themes'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig({
  ...
  icons: { heart: '<svg...' }, // allows defining icons for use without remote fetching
  iconLoaderUrl: (iconName) => `https://...`, // where to load remote icons
  iconLoader: (iconName) => {}, // function for more direct control than iconLoaderUrl replacement
  ...
}).mount('#app')
```

</client-only>

### If your project uses a custom config

If your project is **not** using FormKit’s provided `defaultConfig` then you will need to install
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

- `theme`: A string representation of a FormKit theme name, eg. `'genesis'`. When provided, if a a matching FormKit theme is found it will be loaded via CDN automatically.
- `icons`: An object of SVG icons to be added to the internal `iconRegistry`. Keys are icon names and values are SVGs, eg `{ heart: '<svg ...' }`
- `iconLoaderUrl`: A function that receives `iconName` and returns a URL where the icons can be loaded not found in the `iconRegistry`. [See example](#using-fontawesome-with-a-custom-iconloaderurl)
- `iconLoader`: A function that receives `iconName` and returns a Promise that resolves to a SVG (as a string) or `undefined`. Use this when you need more control than just overriding the `iconLoaderUrl`. [See example](#an-example-heroicons-iconloader)

Once the theme plugin is installed in your project your FormKit inputs will have icon props available to use.

## Registering icons

### How are icons loaded?

FormKit goes through 4 steps when attempting to load an icon. They are, in order:

1. **SVG prop value** - If the prop value is an SVG (e.g. `prefix-icon="<svg ..."`), then the provided SVG will be used.
2. **The iconRegistry** - If the prop value is a string that is not an SVG then FormKit will look for the icon in its internal `iconRegistry` for a matching key.
3. **Your project's CSS variables** - If there is a CSS variable that matches `--fk-icon-${yourIconName}` defined in your CSS it will be loaded into the `iconRegistry`. The value of the CSS variable should be a base64-encoded SVG — it should not be wrapped in quotes. This is how FormKit ships default icons for inputs in its 1st-party themes.
4. **Via CDN** - If no matching icon can be found in your codebase, then a request will be made to the `@formkit/icons` package via CDN. If a matching icon name is found it will be used. You can [override where remote icons are loaded](#using-fontawesome-with-a-custom-iconloaderurl) if you'd like to use a 3rd-party icon library as a fallback.

Because FormKit falls back to CDN requests for icons, you can easily get started in a new project by providing supported icon names to your input’s icon props
and they will be loaded for you automatically — no additional setup required!. 🪄

Remotely loaded SVGs are added to the internal `iconRegistry` the first time an icon is fetched. Additional requests for the same icon will be cached until a user reloads your application.

### Adding icons to the iconRegistry

Magic CDNs are great — but for the best possible performance you should register icons you know you will be using locally in your project.
You can do this by adding icons to your root FormKit config. FormKit's 1st-party icons can be imported from the `@formkit/icons` package.

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
  ...
  icons: {
    ...applicationIcons, // spread an entire group of icons
    ethereum, // or add single icons
    thirdPartyIcon, // you can import any SVG icon
    formkit: `<svg ...` // or define your own
  }
  ...
}).mount('#app')
```
</client-only>

<callout type="note" label="Performance">
FormKit automatically loads missing icons from its icon package via CDN. This is great for quickly getting up
and running, but we recommend registering icons you know you will end up using into the <code>iconRegistry</code> for best performance.
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

Sometimes you need to render a one-off icon in your project. You can directly supply an SVG definition to an icon prop
and the SVG will be rendered for you:

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

Every icon prop registers a click-handler prop. The `prefix-icon` prop will
have a corresponding `@prefix-icon-click` prop, etc.

Each click-handler prop receives the input's core `node` and the click `event` as arguments.

<example
name="Icons Introduction"
file="/\_content/examples/icons/handle-click.vue">
</example>

## Using 3rd-party libraries

If you want to use a 3rd-party icon set in your FormKit project you can supply a custom `iconLoaderUrl` or complete `iconLoader`
(either globally, at the node config level, or as a component prop) which is responsible for retrieving icons that do not
already exist in the `iconRegistry`.

<callout type="note" label="Loaders are for fallbacks">

The `iconLoaderUrl` and `iconLoader` functions are _only meant to handle missing icons_! For the best possible performance
you can (and should) load any SVG icons you know you will be using into the `iconRegistry` by using the `icons` configuration prop in your FormKit config.

</callout>

Sometimes — in cases such as a form builder or CMS — you don't know in advance which icons you’ll need. That's where remote loading of icons shines.

- The `iconLoaderUrl` and `iconLoader` functions each receive the current `iconName` as an argument
- The return value of `iconLoaderUrl` should be a URL to a remote CDN where the icon SVG can be found. This is the easiest way to change the fallback loading behavior.
- if you need more control use `iconLoader` which allows replacement of all the logic for remote icon fetching. This function should return a `Promise` that resolves to `string` (the SVG) or `undefined`.
- You only need to use `iconLoaderUrl` _or_ `iconLoader` — if you supply both then `iconLoader` takes precedence.

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
