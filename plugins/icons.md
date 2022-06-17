---
title: Icons
description: Easily add icons to your inputs using the provided FormKit icons or supply you own'
---

# Icons

FormKit ships with a 1st-party themes plugin called `createThemePlugin()`. Included in this plugin is the ability to easily
add icons to your inputs or replace existing icons FormKit ships by default. FormKit ships with over 130 common icons that are
all MIT Licensed and free to use within your project — or you can include your own.

<example
name="Icons Introduction"
file="/\_content/examples/icons/intro.vue"
formkit-version="next"
view="render">
</example>

## Available icons

The `@formkit/icons` package ships with over 130 common icons to make getting started easy! Use the search below to filter the available icons which are grouped by category.

<icon-gallery></icon-gallery>

## Installation & setup

<callout type="note" label="Enabled by default">
The FormKit <code>createThemePlugin</code> is enabled by default in the FormKit’s <code>defaultConfig()</code>. If your
project is using <code>defaultConfig()</code> then getting started is as simple as using the <code>${sectionKey}-icon</code>
props on your <code>FormKit</code> components and no installation is required.
</callout>

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

createApp(App).use(plugin, {
  ...
  plugins: [
    createThemePlugin()
  ]
  ...
}.mount('#app')
```

</client-only>

Once the theme plugin is installed in your project your FormKit inputs will have icon props available to them.

## Registering icons

### How are icons loaded?

FormKit goes through 4 steps when attempting to load an icon. They are, in order:

- If the prop value provided is a literal SVG definition (e.g. `prefix-icon="<svg ..."`) then the provided SVG will be used.
- If the prop value is a string that does _not_ start with `<svg` then FormKit looks in the theme plugin’s `iconRegistry` — a set of key/value pairs of icon names and SVG definitions — for a matching key.
- Your project's CSS variables. If there is a CSS variable that matches `--fk-icon-${yourIconName}` defined in your CSS then it will be parsed and loaded into the `iconRegistry`. The value of the CSS variable is expected to be a base64 encoded SVG — it should not be wrapped in quotes. This is how FormKit ships default icons for inputs in the `genesis` theme.
- The JSDelivr CDN — If no matching icon can be found in your codebase then a request will be made to the `@formkit/icons` package using the current version of FormKit installed in your project. If a matching icon name is found it will be used.

Because FormKit falls back to CDN requests for icons you can easily get started in a new project by providing supported icon names to your input’s icon props
and they will be loaded for you automatically — no setup required!. 🪄

Remotely loaded SVGs are added to the internal `iconRegistry` in memory and additional requests for the icon will be cached until a user reloads the page.

### Adding icons to the iconRegistry

Magic CDN are great — but your project will benefit from the performance gains of having icons registered locally in your project.
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

the `file` input has `file-remove-icon` and `file-item-icon` props.

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

## Icon click handlers

Every icon prop also registers a click handler prop. The `prefix-icon` prop will
have a corresponding `@prefix-icon-click` prop, etc.

Each click handler prop receives the input's core `node` and the click `event` as arguments.

<example
name="Icons Introduction"
file="/\_content/examples/icons/handle-click.vue">
</example>
