
### Using the Web UI

The easiest way to get started with FormKit Tailwind Themes is to head to [themes.formkit.com](https://themes.formkit.com), customize a theme, and choose `Download theme`:

::ArticleCard
---
img: "https://themes.formkit.com/og.png"
label: "FormKit Themes"
title: "Versatile, configurable, MIT-licensed Tailwind themes for use in your projects. Spend less time styling — more time building."
href: "https://themes.formkit.com"
---
::

### Using the CLI 

Alternatively, you can use the FormKit CLI to select a theme for your project. Run the following command in the same directory as your `formkit.config.{ts|js}` file:

```bash
npx formkit theme
```

This command will create a `formkit.theme.{ts|js}` file in the root of your project. To complete the setup you will need use the `rootClasses` from this theme file in your `formkit.config.{ts|js}`:

```js
// formkit.config.ts
import { defaultConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'

export default defaultConfig({
  config: {
    rootClasses,
  },
})
```

Finally, you’ll need to add the `formkit.theme.{ts|js}` file to your Tailwind config file’s content property. This will ensure that the theme’s styles are included in your project’s CSS:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./formkit.theme.ts" // <-- add your theme file
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

If you run the command again, you will be taken to [https://themes.formkit.com](https://themes.formkit.com) where you can customize your chosen theme.

```bash
# with existing formkit.theme file in your project root
> npx formkit theme
? Found local theme file for <themeName>, edit this theme? › (Y/n)
```

