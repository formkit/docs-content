## Theming

If you prefer the legacy Genesis CSS theme, install the theme and icon packages:

```sh
npm install @formkit/themes @formkit/icons
```

Then import Genesis and register the default icons in your FormKit config:

```ts
import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
})
```

Genesis is unopinionated enough to use as-is, or as a starting point for your own CSS.
