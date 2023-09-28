---
title: Optimizing for production
description: Follow this guide to learn how to slim down your FormKit installation for production.
---

# Optimizing for production

FormKit ships with a lot of functionality out of the box. This is great for getting started, but the `defaultConfig` may include features and inputs you aren’t using. In this guide, we'll learn how to slim down our FormKit installation for production.

## Examining the defaultConfig

Most FormKit users get started by using the provided `defaultConfig` — but what does this actually include?

- Adds the `@formkit/validation` plugin with all rules.
- Adds the `@formkit/i18n` plugin with the `en` locale (plus any additional locales you've added).
- Adds the `@formkit/inputs` plugin with all non-pro inputs.
- Adds the `@formkit/theme` plugin with CDN loaded icons, or any explicitly loaded icons.
- Adds the `@formkit/vue` bindings to allow FormKit to interface with Vue.

The defaultConfig also exposes a convenient object syntax to provide configuration options all of the plugins above. For example, to provide an input to the `@formkit/inputs` plugin instantiation the default config allows you to pass an `inputs` property:

```js
app.use(plugin, defaultConfig({
  inputs: {
    myInput: createInput(/* input options */)
  }
}))
```

For more details checkout the [source code of the `defaultConfig`](https://github.com/formkit/formkit/blob/master/packages/vue/src/defaultConfig.ts).


