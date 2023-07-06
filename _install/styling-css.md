## Theming

The default FormKit theme (called "genesis") can be added by installing the `@formkit/themes` package.

### CDN Usage

To load `genesis` via CDN, supply it to the `theme` property of your `defaultConfig`:

```js
...
defaultConfig({
  theme: 'genesis' // will load from CDN and inject into document head
})
...
```

### Direct import

```sh
npm install @formkit/themes
```

Assuming you are using a bundler like Vite, Webpack or Nuxt — you can then directly import the theme:

```js
// main.js or formkit.config.ts
import '@formkit/themes/genesis'
```

### Add required icons

By default the icons required by the `genesis` theme will be loaded from CDN when requested. If you prefer to include the icons directly in your bundle for increased perfomance, to avoid any pop-in, or to alleviate possible SSR issues then import the `genesisIcons` set from `@formkit/icons` and spread them into the `icons` property of your FormKit config.

```js
import { genesisIcons } from '@formkit/icons'
...
const config = defaultConfig({
  icons: {
    ...genesisIcons
  }
})
...
```