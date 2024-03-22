## Configuration

To configure FormKit, create a `formkit.config.js` in the root of your Nuxt project. The Nuxt module automatically uses the `formkit.config.js` at the root of your project to extend FormKit's functionality. Your config file should export a [configuration object](/essentials/configuration#what-is-defaultconfig).

### formkit.config.js
```js
import { fr } from '@formkit/i18n'

export default {
  locales: { fr },
  locale: 'fr',
}
```

### Using environment variables in formkit.config.js

There may be instances where you want to use Nuxt's `runtimeConfig` variables inside of your `formkit.config.js` file — such as keeping a FormKit Pro API key from being published in your codebase. To achieve this you can provide a function to `defineFormKitConfig` which returns a configuration object. Your function will be called by Nuxt and have access to `runtimeConfig`.

```js
import { fr } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'

export default defineFormKitConfig(() => {
  // here we can access `useRuntimeConfig` because
  // our function will be called by Nuxt.
  const config = useRuntimeConfig()

  // and we can use the variables to import secrets.
  //
  // ⚠️ this is just an example — if you want to use FormKit Pro
  // you will need to install the @formkit/pro dependency.
  const pro = createProPlugin(config.FORMKIT_PRO_KEY, inputs)

  return {
    plugins: [pro],
    locales: { fr },
    locale: 'fr',
  }
})
```

### Defining a custom FormKit config path

If you would like to supply a custom path to your `formkit.config`, you can override the default location using the `configFile` option under the `formkit` key. **Any path you supply should be relative to the root of your Nuxt project**:

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    autoImport: true,
    configFile: './my-configs/formkit.config.js',
  },
})
```

::Callout
---
type: "tip"
label: "Auto loading"
---
In the past, FormKit used a global plugin to install itself, thus including itself in Nuxt’s entry bundle. To avoid this, FormKit now supports an `autoImport` option. When enabled, FormKit injects the "global" configuration options only on the pages or components that use FormKit.

In the future, this will become the default. To enable it today set `autoImport: true` in your `nuxt.config.ts`
::

### Without extending `defaultConfig`

By default, your configuration will _extend_ the `defaultConfig` that ships with FormKit. This is the desired behavior
for the majority of projects. However, if you need to define the entire FormKit config yourself — from scratch — you may do so
by setting the `defaultConfig` option for the module to `false`:

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    autoImport: true,
    defaultConfig: false,
    configFile: './my-configs/formkit.config.js',
    // ^ this is now a full config replacement, not override.
  },
})
```
