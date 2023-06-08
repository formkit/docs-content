## Using with Typescript

For TypeScript users, it can be helpful to type your `formkit.config.ts` export as `DefaultConfigOptions` explicitly:

```js
// formkit.config.ts
import { fr } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'

const config: DefaultConfigOptions = {
  locales: { fr },
  locale: 'fr',
}

export default config
```