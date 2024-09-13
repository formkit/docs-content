### For Tailwind

FormKit ships with a Tailwind version of the Genesis theme. To use this pre-made Tailwind theme in your project, import it from `@formkit/themes/tailwindcss/genesis` and add it to your `formkit.config.js`. You'll also want to include the necessary `genesisIcons` import from `@formkit/icons`.

```js
// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/dist/tailwindcss/genesis'

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(genesis),
  },
}
```

The `genesis` theme import is nice for brevity, but the Tailwind parser will need to be provided the path to the full theme file in your `node_modules` in order to know which classes are being used. Additionally, you should add the `FormKitVariants` plugin to your `tailwind.config.js` in order to make use of helpful FormKit variants such as `formkit-invalid:` in your project.

```js
// tailwind.config.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  plugins: [FormKitVariants],
}
```
