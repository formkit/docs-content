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

### Adding the Legacy Pro Genesis Theme

::Callout
---
type: "warning"
label: "Legacy Genesis Theme"
---
If you are using the legacy Genesis CSS theme then follow the instructions below. 

Note: All Tailwind themes from [https://themes.formkit.com](https://themes.formkit.com) ship with support for Pro inputs so the instructions below are not required for Tailwind users.
::

If you are using the legacy Genesis CSS theme in your project then you will need to install the accompanying Pro CSS as well:

```js
// main.js or formkit.config.ts
// Genesis for Pro is dependent on Genesis
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
```
