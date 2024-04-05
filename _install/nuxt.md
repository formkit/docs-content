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

# If you're using PNPM you should also install some dependency packages.
# pnpm install @formkit/core @formkit/vue
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

Though unstyled, FormKit is now registered using the default config and you can start using the `<FormKit>` component.
