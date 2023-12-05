## Using with Typescript

For TypeScript users, it can be helpful to type your `formkit.config.ts` export as `DefaultConfigOptions` explicitly:

```js
// formkit.config.ts
import { fr } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'

export default defineFormKitConfig({
  locales: { fr },
  locale: 'fr',
})
```