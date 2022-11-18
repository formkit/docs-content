---
title: Getting Started
description: Get up and running with FormKit in your project.
---

# Installation

The simplest way to get a new project started with FormKit is by using FormKit CLI's `create-app`. Alternatively, if you already have a project, you can manually install [with Vue](#with-vue), [with Nuxt](#with-nuxt) or [with Astro](#with-astro).

## With create-app

`create-app` is the fastest way to start a new project with FormKit pre-configured for you. It walks you through all the necessary steps, and allows you to optionally add TypeScript support, use Nuxt or Vite as your starting template, or set up Pro Inputs.

### Run the FormKit CLI

At your terminal, run `npx formkit create-app` to start your new project:

<client-only>

```sh
npx formkit create-app
```

</client-only>

`create-app` will ask you some questions about your project so it can determine what it needs to install and setup for you:

<client-only>

```sh
✔ Please enter a name for the project › <your-project-name>
✔ What framework would you like to use? › Vite / Nuxt
✔ What language should be used? › TypeScript / Javascript
✔ Would you like to install FormKit Pro? › no / yes
✔ Enter a project key from https://pro.formkit.com: › <fk-00000000000>
```

</client-only>

Once this is completed, you can follow the instructions to install all dependencies and start a development server:

<client-only>

```sh
Created formkit-app!

To run your new app:
📁 cd <your-project-name>
✅ npm install
🚀 npm run dev
```

</client-only>

## With Vue

Most new projects use a build tool like Vite, Snowpack, or webpack. This makes installing npm dependencies a piece of cake 🍰:

<client-only>

```sh
npm install @formkit/vue
```

</client-only>

The `@formkit/vue` package ships with a Vue plugin and a default configuration for easy setup:

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

createApp(App).use(plugin, defaultConfig).mount('#app')
```

</client-only>

That's it! You're now ready to use the `<FormKit>` component in your Vue 3 application. The `defaultConfig` includes all of FormKit's inputs, validation rules, and the English language. You can replace the `defaultConfig` with your own configuration, which allows for improved tree-shaking (only include the rules and languages you want to actually use) and more fine-grained control.

<callout type="tip" label="next">
You can install the upcoming version of FormKit (unstable) anytime by opting to installing the "next" version tag: <code>npm install @formkit/vue@next</code>
</callout>

<callout type="warning" label="Vue 2">
FormKit only supports Vue 3. If you're required to use Vue 2 on a project, consider using the spiritual ancestor of FormKit — <a href="https://vueformulate.com" target="_blank">Vue Formulate</a>.
</callout>

## Default theme

The default FormKit theme (called "genesis") can be added via CDN or by installing the `@formkit/themes` package.

### CDN Usage

To load `genesis` via CDN, supply it to the `theme` property of your `defaultConfig`:

<client-only>

```js
...
defaultConfig({
  theme: 'genesis' // will load from CDN and inject into document head
})
...
```

</client-only>

### Direct import

<client-only>

```sh
npm install @formkit/themes
```

</client-only>

Assuming you are using a bundler like Vite, Webpack or Nuxt — you can then directly import the theme:

<client-only>

```js
// main.js or formkit.config.ts
import '@formkit/themes/genesis'
```

</client-only>

## Pro Inputs

Installing FormKit Pro is easy! Here are the steps:

#### 1. Get a Project Key

Login to your FormKit Pro account at [pro.formkit.com](https://pro.formkit.com) and create a project. A `Project Key` will be provided to you.

#### 2. Install the package

Next, install the `@formkit/pro` package using `npm`, `yarn`, or other package manager:

<client-only>

```bash
yarn add @formkit/pro
```

</client-only>

#### 3. Configure your project

Import the `createProPlugin` helper and any desired Pro Inputs from `@formkit/pro`:

<client-only>

```js
// Import createProPlugin helper and any desired inputs
import { createProPlugin, rating, toggle } from '@formkit/pro'
```

</client-only>

Create the Pro plugin with your `Project Key` and desired Pro Inputs:

<client-only>

```js
// Create the Pro plugin with your Project Key and desired inputs
const proPlugin = createProPlugin('fk-00000000000', {
  rating,
  toggle,
  // ... and any other Pro Inputs
})
```

</client-only>

Lastly, add the plugin to your FormKit config:

<client-only>

```js
// You probably already have this as part of initial installation
import { defaultConfig } from '@formkit/vue'

// Add proPlugin to your config (in this case — the defaultConfig)
const config = defaultConfig({
  plugins: [proPlugin],
})
```

</client-only>

#### Optional Pro theme

Formkit extends the default Genesis theme for Pro Inputs. You can directly import it:

<client-only>

```js
// Genesis for Pro is dependent on Genesis
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
```

</client-only>

### Full example with Pro Inputs

Here's a full example of FormKit and FormKit Pro installed:

<client-only>

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createProPlugin, rating, toggle } from '@formkit/pro'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

// create proPlugin
const proPlugin = createProPlugin('fk-00000000000', {
  rating,
  toggle,
})

// extend defaultConfig
const config = defaultConfig({
  plugins: [proPlugin],
})

// Register FormKit with the new config
createApp(App).use(plugin, config).mount('#app')
```

</client-only>

That's it! You will be able to use any registered Pro Inputs in your project now, like `<FormKit type="rating" />`.

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
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
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
**Any path you supply should be relative to the root of your Nuxt project**:

<client-only>

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    configFile: './my-configs/formkit.config.mjs',
  },
})
```

</client-only>

For TypeScript users, it can be helpful to type your `formkit.config.ts` export as `DefaultConfigOptions` explicitly:

<client-only>

```js
// formkit.config.ts
import { fr } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  locales: { fr },
  locale: 'fr',
}

export default config
```

</client-only>

By default, your configuration will _extend_ the `defaultConfig` that ships with FormKit. This is the desired behavior
for the majority of projects. However, if you need to define the entire FormKit config yourself — from scratch — you may do so
by setting the `defaultConfig` option for the module to `false`:

<client-only>

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    defaultConfig: false,
    configFile: './my/custom/location/formkit.config.ts',
    // ^ this is now a full config replacement, not override.
  },
})
```

</client-only>

### Pro inputs

Installing FormKit Pro into your Nuxt project is just as easy as it is for Vue.

#### 1. Get a Project Key

Login to your FormKit Pro account at [pro.formkit.com](https://pro.formkit.com) and create a project. A `Project Key` will be provided to you.

#### 2. Install the package

Next, install the `@formkit/pro` package using `npm`, `yarn`, or another package manager:

<client-only>

```bash
yarn add @formkit/pro
```

</client-only>

#### 3. Configure your project

Import the `createProPlugin` helper and your desired Pro Inputs from `@formkit/pro`:

<client-only>

```js
// Import createProPlugin helper and any desired inputs
import { createProPlugin, autocomplete, rating } from '@formkit/pro'
```

</client-only>

Create the Pro plugin with your `Project Key` and desired Pro Inputs:

<!--After you have received your Project Key and installed the `@formkit/pro` package, go to your `formkit.config` file and add the Pro plugin:-->

<client-only>

```js
// formkit.config (adjacent to nuxt.config)
import { createProPlugin, autocomplete, rating } from '@formkit/pro'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

const pro = createProPlugin('fk-66f40b8a84', {
  autocomplete,
  rating,
})

export default {
  plugins: [pro],
}
```

</client-only>

That's it! FormKit is ready to use and — if you read this far — specifically tailored to your Nuxt project's needs.

<callout type="warning" label="Nuxt 2">
FormKit only supports Nuxt 3. If you're required to use Nuxt 2 on a project, consider using the spiritual ancestor of FormKit — <a href="https://vueformulate.com" target="_blank">Vue Formulate</a> — which also ships with its own Nuxt module.
</callout>

## With Astro

Astro installation process is similar to how we install Vue after adding a entrypoint to `astro.config.mjs` file:

<client-only>

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
})
```

</client-only>

The `_app` entrypoint file is just a configuration file for Vue, we can add FormKit there, by firstly adding the FormKit Vue package:

<client-only>

```sh
npm install @formkit/vue
```

</client-only>

The `@formkit/vue` package ships with a Vue plugin and a default configuration for easy setup:

<client-only>

```js
// src/pages/_app.ts
import type { App } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

export default (app: App) => {
  app.use(plugin, defaultConfig)
}
```

</client-only>

<callout type="warning" label="Vue Components">
Astro does not let you use <code>FormKit</code> directly inside Astro files, so you should create a wrapper around your forms.
</callout>

Now you can add FormKit to your Astro Vue components, to that you can create a component inside the components folder:

<client-only>

```html
<script setup>
  // src/components/Form.vue

  const submitHandler = async (fields) => {
    // Let's pretend this is an ajax request:
    await new Promise((r) => setTimeout(r, 1000))
    console.log(fields)
  }
</script>

<template>
  <FormKit type="form" @submit="submitHandler">
    <FormKit type="text" label="Name" name="name" />
    <FormKit type="email" label="Email" name="email" />
  </FormKit>
</template>
```

</client-only>

After that you just need to import and use it inside your Astro files:

<callout type="warning" label="Client Hydratation">
FormKit works best with client hydratation enabled, so make sure to use `client:visible` or `client:load`.
</callout>

<client-only>

```js
// src/pages/index.astro
---
import Form from '../components/Form.vue';
---

<Form client:visible />
```

</client-only>

That's it! You're now ready to use the `<FormKit>` component in your Astro application. The `defaultConfig` includes all of FormKit's inputs, validation rules, and the English language. You can replace the `defaultConfig` with your own configuration, which allows for improved tree-shaking (only include the rules and languages you want to actually use) and more fine-grained control.

<cta label="Using Tailwind or another utility framework?" href="/essentials/styling" button="Styling docs"></cta>
