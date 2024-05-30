### formkit.config.ts
```js
import { fr } from '@formkit/i18n'

const config = {
  locales: { fr },
  locale: 'fr',
}

export default config
```

### app.js (or equivalent)
```js
// ...
import config from 'formkit.config.ts'

app.use(plugin, defaultConfig(config))
```
