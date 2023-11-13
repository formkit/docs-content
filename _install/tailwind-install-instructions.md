
### Using the CLI 

To get started theming FormKit with Tailwind in your project run the following command in the root of your project:

```bash
npx formkit theme
```

You will be guided through choosing an existing theme as starting point for your project. Run the command again and you will be taken to [https://themes.formkit.com](https://themes.formkit.com) where you can customize your chosen theme.

```bash
# with existing formkit.theme file in your project root
> npx formkit theme
? Found local theme file for <themeName>, edit this theme? › (Y/n)
```

### Using the Web UI

Alternatively you can head directly to [https://themes.formkit.com](https://themes.formkit.com), customize a chosen theme to your liking, and then choose `Download theme` to be given specific commands to run in the root of your project.

::ArticleCard
---
img: "https://themes.formkit.com/og.png"
label: "FormKit Themes"
title: "Versatile, configurable, MIT-licensed Tailwind themes for use in your projects. Spend less time styling — more time building."
href: "https://themes.formkit.com"
---
::

### Adding icons

By default the icons required by FormKit will be loaded from CDN when requested. If you prefer to include the icons directly in your bundle for increased perfomance, to avoid any pop-in, or to alleviate possible SSR issues then import the `genesisIcons` set from `@formkit/icons` and spread them into the `icons` property of your FormKit config.

```sh
npm install @formkit/icons
```

```js
import { genesisIcons } from '@formkit/icons'
...
const config = defaultConfig({
  plugins: [proPlugin],
  icons: {
    ...genesisIcons
  }
})
...
```

### Further customization

Once you have a theme in your project you can customize it further by following the documentation provided in the [styling section of the FormKit docs](/essentials/styling).