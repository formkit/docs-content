If you have not already, add Tailwind CSS to your project following their [installation instructions](https://tailwindcss.com/docs/installation)

FormKit provides a Tailwind version of the Genesis theme you can use as a starting point in your own project. To use this pre-made Tailwind theme copy the following theme into a file (something like `tailwind-theme.js`) in your project.

:TailwindTheme

Now, import your Tailwind theme into your `formkit.config` file and add it to your project's configuration. 

You will need to import the `generateClasses` helper function from the `@formkit/themes` package as well as the supporting icons from the `@formkit/icons` package.

```sh
npm install @formkit/themes @formkit/icons
```

```js
// formkit.config.js
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme.js' // change to your theme's path

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}
```

Next, add the path to your theme to your `tailwind.config` file's content array — this is required so that Tailwind knows which classes you're using in your project. 

Additionally you should add the `FormKitVariants` plugin to your `tailwind.config.js` from the `@formkit/themes` package in order to make use of the FormKit-provided variants such as `formkit-invalid:` in your project.

```js
// tailwind.config.js
const FormKitVariants = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    ...
    './tailwind-theme.js',
  ],
  plugins: [FormKitVariants],
}
```