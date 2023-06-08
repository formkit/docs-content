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

### app.ts (or equivalent)
```js
// ...
import config from 'formkit.config.ts'

app.use(plugin, defaultConfig(config))
```