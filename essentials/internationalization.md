# Internationalization (i18n)

FormKit ships with internationalization support for all of it’s interfaces and validation messages. It’s easy to contribute a new locale!

## Using a locale

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

## Contribute a locale

Writing a locale for your own native language is a great way to contribute to FormKit, and an easy way to get started with open source too! We are always eager to see pull requests for new locales. To support this effort we’ve created a small web app to help make the translation process as easy as possible.

<cta label="Want to contribute?" button="Locale builder" link="https://i18n.formkit.com"></cta>
