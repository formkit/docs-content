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

### Using a Tailwind prefix

If your project uses a [Tailwind prefix](https://tailwindcss.com/docs/styling-with-utility-classes#using-the-prefix-option), pass the same prefix to the CLI and every class in the generated theme will be prefixed to match:

```bash
# Tailwind v4 — @import "tailwindcss" prefix(tw);
npx formkit@latest theme --prefix tw

# Tailwind v3 — prefix: 'tw-' in tailwind.config.js
npx formkit@latest theme --prefix tw-
```

The prefix is saved in the theme file, so re-running `npx formkit@latest theme` to edit your theme keeps it.
