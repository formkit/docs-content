# Internationalization (i18n)

FormKit ships with internationalization support for all of it’s interfaces and validation messages. It’s easy to contribute a new locale!

<callout type="tip" label="Translators needed">
Writing a locale for your own native language is a great way to contribute to FormKit, and an easy way to get started with open source too! We are always eager to see pull requests for new locales — if you’re interested, read the <a href="/essentials/contributing">contributing docs.</a>
</callout>

## Adding a locale

FormKit’s `defaultConfig` includes the english locale by default — to add an additional locale, import it from `@formkit/i18n` and append it to the `locales` option wherever you initialized the FormKit plugin. To set the active locale specify it with the `locale` option:

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { de, fr, zh } from '@formkit/i18n'

const app = createApp(App)
app.use(
  plugin,
  defaultConfig({
    // Define additional locales
    locales: { de, fr, zh },
    // Define the active locale
    locale: 'fr',
  })
)
app.mount('#app')
```
