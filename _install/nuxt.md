### Nuxt 3

::VideoCard
---
title: "Nuxt 3 Setup - Vue School Course"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "4 mins"
external-vid: "https://vueschool.io/lessons/project-setup-and-formkit-config?friend=formkit"
---
::

Using FormKit with Nuxt requires minimal setup. First include the Nuxt module as a dependency within your project:

```sh
npm install @formkit/nuxt
```

Then in your `nuxt.config` file add the module to your modules list:

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  }
})
```

That's it! FormKit is now registered in your project using the default config and you can start using the `<FormKit>` component.

::Callout
---
type: "tip"
label: "Auto loading"
---
In the past FormKit used a global plugin to install itself. This has the negative side effect of including itself Nuxt’s entry bundle. To avoid this FormKit now supports an `autoImport` option. When enabled FormKit no longer uses a global plugin but automatically injects the "global" configuration options only on the pages or components that use it.

In the future this will become the default. To enable it today set `autoImport: true` in your `nuxt.config.ts`
::