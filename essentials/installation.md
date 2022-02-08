---
title: Getting Started
description: Get up and running with FormKit in your project.
---

# Installation

FormKit can be downloaded using a package manager like `npm` or `yarn` or it can be used directly via CDN.

## With Vue

Most new projects use a build tool like Vite, Snowpack, or webpack. This makes installing npm dependencies a piece of cake 🍰.

<client-only>
```sh
npm install @formkit/vue
```
</client-only>

The `@formkit/vue` package ships with a Vue plugin and a default configuration for easy setup.

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig).mount('#app')
```
</client-only>

<callout type="tip" label="Default theme">
If you’d like to install Genesis — the default FormKit theme — please follow the installation instructions on <a href="/essentials/styling">the styling documentation</a>.
</callout>

That's it! You're now ready to use the `<FormKit>` component in your Vue application. The `defaultConfig` includes all of FormKit's inputs, validation rules, and the English language. You can replace the `defaultConfig` with your own configuration, which allows for improved tree-shaking (only include the rules and languages you want to actually use) and more fine-grained control.

<callout type="warning" label="Vue 2">
FormKit only supports Vue 3. If you're required to use Vue 2 on a project, consider using the spiritual ancestor of FormKit — <a href="https://vueformulate.com" target="_blank">Vue Formulate</a>.
</callout>

## With Nuxt

Using FormKit with Nuxt requires minimal setup. First include the Nuxt module as a dependency within your project:

<client-only>
```sh
npm install @formkit/nuxt
```
</client-only>

Then in your `nuxt.config` file add the module to your modules list:

<client-only>

```js
// nuxt.config
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt'
  ]
})
```
</client-only>

That's it! FormKit is now registered in your project using the default config and you can start using the `<FormKit>` component.

### Configuring with Nuxt
If you would like to supply your own configuration, create a `formkit.config` file adjacent to your `nuxt.config` file. Like the `nuxt.config` file itself, `.ts`, `.mjs`, and `.js` are all valid file extensions depending on your project's needs:

<client-only>
```sh
myProject/
|- formkit.config.ts
|- nuxt.config.ts
```
</client-only>

This configuration file will be automatically included if detected in your project directory. If you would like to supply a custom
path to your `formkit.config`, you can override the default location using the `configFile` option under the `formkit` key.
**Any path you supply should be relative to the root of your Nuxt project**.

<client-only>

```js
// nuxt.config
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt'
  ],
  formkit: {
    configFile: './my/custom/location/formkit.config.ts'
  }
})
```
</client-only>

By default, your configuration will *extend* the `defaultConfig` that ships with FormKit. This is the desired behavior
for the majority of projects. However, if you need to define the entire FormKit config yourself — from scratch — you may do so
by setting the `defaultConfig` option for the module to `false`:

<client-only>

```js
// nuxt.config
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: [
    '@formkit/nuxt'
  ],
  formkit: {
    defaultConfig: false,
    configFile: './my/custom/location/formkit.config.ts'
    // ^ this is now a full config replacement, not override.
  }
})
```
</client-only>

That's it! FormKit is ready to use and — if you read this far — specifically tailored to your Nuxt project's needs.

<callout type="warning" label="Nuxt 2">
FormKit only supports Nuxt 3. If you're required to use Nuxt 2 on a project, consider using the spiritual ancestor of FormKit — <a href="https://vueformulate.com" target="_blank">Vue Formulate</a> — which also ships with its own Nuxt module.
</callout>


## Starter Project

If you would like to get up and running on a new project quickly to kick the tires, then consider
cloning the our available [FormKit Vue Starter Project on Github](https://github.com/formkit/formkit-vue-starter-project).
