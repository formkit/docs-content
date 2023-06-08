## Configuration

to configure FormKit create a `formkit.config.ts` in the root of your Nuxt project. The provided Nuxt module automatically uses the `formkit.config.ts` that is at the root of your project to extend FormKit's functionality. Your config file should export a [configuration object](/essentials/configuration#what-is-defaultconfig).

### formkit.config.ts
```js
import { fr } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  locales: { fr },
  locale: 'fr',
}

export default config
```

### Defining a custom FormKit config path

If you would like to supply a custom path to your `formkit.config`, you can override the default location using the `configFile` option under the `formkit` key. **Any path you supply should be relative to the root of your Nuxt project**:

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    configFile: './my-configs/formkit.config.ts',
  },
})
```

### Without extending `defaultConfig`

By default, your configuration will _extend_ the `defaultConfig` that ships with FormKit. This is the desired behavior
for the majority of projects. However, if you need to define the entire FormKit config yourself — from scratch — you may do so
by setting the `defaultConfig` option for the module to `false`:

```js
// nuxt.config
export default defineNuxtConfig({
  modules: ['@formkit/nuxt'],
  formkit: {
    defaultConfig: false,
    configFile: './my-configs/formkit.config.ts',
    // ^ this is now a full config replacement, not override.
  },
})
```