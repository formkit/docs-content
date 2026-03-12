### Astro

First, install Astro's React integration. You can refer to [Astro's React integration docs](https://docs.astro.build/en/guides/integrations-guide/react/) for more detail.

Inside your Astro config file (`astro.config.*`), enable the React integration:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  integrations: [react()],
})
```

Next, install the packages FormKit needs in a React Astro project:

```sh
npm install @formkit/react @formkit/core @formkit/inputs
```

Now create a React wrapper component for your form:

```jsx
// src/components/Form.jsx
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

export default function Form() {
  async function submitHandler(fields) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(fields)
  }

  return (
    <FormKitProvider config={defaultConfig()}>
      <FormKit type="form" onSubmit={submitHandler}>
        <FormKit type="text" label="Name" name="name" />
        <FormKit type="email" label="Email" name="email" />
      </FormKit>
    </FormKitProvider>
  )
}
```

After that, import and use it inside your Astro files:

::Callout
---
type: "warning"
label: "Client Hydration"
---
FormKit works best with client hydration enabled, so make sure to use `client:visible` or `client:load`.
::

```astro
---
import Form from '../components/Form.jsx'
---

<Form client:visible />
```
