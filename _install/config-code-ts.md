### formkit.config.ts
```js
import { fr } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'

export default defaultConfig({
  locales: { fr },
  locale: 'fr',
})
```

### app.ts (or equivalent)
```js
// ...
import config from 'formkit.config.ts'

app.use(plugin, defaultConfig(config))
```
