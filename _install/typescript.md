## Using with Typescript

For TypeScript users, it can be helpful to type your `formkit.config.ts` export as `DefaultConfigOptions` explicitly:

```js
// formkit.config.ts
import { fr } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'

export default defaultConfig({
  locales: { fr },
  locale: 'fr',
})
```
