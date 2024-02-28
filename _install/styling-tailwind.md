## Theming

:TailwindInstallInstructions

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
