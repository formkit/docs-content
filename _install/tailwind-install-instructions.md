FormKit provides a Tailwind version of the Genesis theme you can use as starting point in your own project. To use this pre-made Tailwind copy the following theme into a file (something like `theme.js`) in your project.

:TailwindTheme

Now, import your Tailwind theme into your `formkit.config` file and add it to your project's configuration. You will also need to import the supporting icons from the `@formkit/icons` package.

```sh
npm install @formkit/icons
```

```js
// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './theme.js' // change to your theme's path

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}
```

Next, add the path to your theme to your `tailwind.config` file's content array. Additionally you should add the `FormKitVariants` plugin to your `tailwind.config.js` in order to make use of helpful FormKit variants such as `formkit-invalid:` in your project.

```js
// tailwind.config.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    ...
    './theme.js',
  ],
  plugins: [FormKitVariants],
}
```