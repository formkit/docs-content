### Using the Web UI

The easiest way to get started with FormKit Tailwind Themes is to install the themes package and head to [themes.formkit.com](https://themes.formkit.com), customize a theme, and choose `Download theme`.

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
npx formkit@latest theme
```

This command will create a `formkit.theme.{ts|js}` file in the root of your project. To complete the setup you will need use the `rootClasses` from this theme file in your `formkit.config.{ts|js}`:

```js
// formkit.config.ts
import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from './formkit.theme'

export default defineFormKitConfig({
  config: {
    rootClasses,
  },
})
```

Finally, you'll need to add the `formkit.theme.{ts|js}` file to your CSS using a `@source` directive. This ensures Tailwind scans the theme file for class names to include in your CSS:

```css
/* main.css (or your primary CSS file) */
@import "tailwindcss";
@source "./formkit.theme.ts";
@source "./formkit.config.ts";
```

::Callout
---
type: "tip"
label: "Tailwind CSS 3"
---
If you're using Tailwind CSS 3, add the theme file to your `tailwind.config.js` content array instead:
```js
// tailwind.config.js
module.exports = {
  content: [
    "./app.vue",
    "./formkit.theme.ts"
  ]
}
```
::

If you run the command again, you will be taken to [https://themes.formkit.com](https://themes.formkit.com) where you can customize your chosen theme.

```bash
# with existing formkit.theme file in your project root
> npx formkit@latest theme
? Found local theme file for <themeName>, edit this theme? › (Y/n)
```

