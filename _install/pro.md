## Adding Pro Inputs

Installing FormKit Pro is easy! Here are the steps:

#### 1. Get a Project Key

Login to your FormKit Pro account at [pro.formkit.com](https://pro.formkit.com) and create a project. A `Project Key` will be provided to you.

#### 2. Install the package

Next, install the `@formkit/pro`:

```bash
npm install @formkit/pro
```

#### 3. Configure your project

Import the `createProPlugin` helper and any desired Pro Inputs from `@formkit/pro`:

```js
// main.js or formkit.config.ts
import { createProPlugin, rating, toggle } from '@formkit/pro'
```

Create the Pro plugin with your `Project Key` and desired Pro Inputs:

```js
// main.js or formkit.config.ts
const proPlugin = createProPlugin('fk-00000000000', {
  rating,
  toggle,
  // ... and any other Pro Inputs
})
```

Lastly, add the plugin to your FormKit config:

```js
// main.js or formkit.config.ts
const config = defaultConfig({
  plugins: [proPlugin],
})
```

### Adding Pro Genesis Theme

::Callout
---
type: "warning"
label: "Tailwind"
---
If you are using Tailwind — the styles for Pro Inputs are already included in your base Genesis theme.
::

Formkit extends the default Genesis theme for Pro Inputs. You can directly import it:

```js
// main.js or formkit.config.ts
// Genesis for Pro is dependent on Genesis
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
```

### Adding icons

By default the icons required by the `genesis` theme will be loaded from CDN when requested. If you prefer to include the icons directly in your bundle for increased perfomance, to avoid any pop-in, or to alleviate possible SSR issues then import the `genesisIcons` set from `@formkit/icons` and spread them into the `icons` property of your FormKit config.

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

That's it! now your pro inputs should be beautifully styled.

::Cta
---
label: "Creating your first form with FormKit" 
href: "/getting-started/your-first-form" 
button: "Next step"
---
::