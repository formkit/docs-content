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

// Create the Pro plugin with your `Project Key` and desired Pro Inputs:
const proPlugin = createProPlugin('fk-00000000000', {
  rating,
  toggle,
  // any other Pro Inputs
})

// add the plugin to your FormKit config:
const config = defaultConfig({
  plugins: [proPlugin],
})
```
