## Theming

For a Tailwind-powered setup, install the FormKit theme and icon packages:

```sh
npm install @formkit/themes @formkit/icons
```

Then generate a starter FormKit theme file:

```sh
npx formkit@latest theme
```

This creates `formkit.theme.ts`. Use the exported `rootClasses` in your React FormKit config:

```ts
import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
```

Finally, make sure Tailwind scans both your FormKit theme file and config file:

```css
@import "tailwindcss";
@source "./formkit.theme.ts";
@source "./formkit.config.ts";
```

If you're using Tailwind CSS 3, add those files to the `content` array in `tailwind.config.js` instead.
