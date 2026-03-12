## Adding Pro Inputs

Installing FormKit Pro in React follows the same plugin model as the rest of the React package.

#### 1. Get a Project Key

Login to your FormKit Pro account at [pro.formkit.com](https://pro.formkit.com) and create a project. A `Project Key` will be provided to you.

#### 2. Install the package

```bash
npm install @formkit/pro
```

#### 3. Add the Pro plugin to your config

```ts
import { defineFormKitConfig } from '@formkit/react'
import { createProPlugin, rating, toggle } from '@formkit/pro'

const proPlugin = createProPlugin('fk-00000000000', {
  rating,
  toggle,
})

export default defineFormKitConfig({
  plugins: [proPlugin],
})
```
