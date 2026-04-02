### Astro

First, install Astro's Vue integration. You can refer to [Astro's Vue integration docs](https://docs.astro.build/en/guides/integrations-guide/vue/) for more detail.

Inside your Astro config file (`astro.config.*`), add an `_app` entrypoint. The `_app` entrypoint file is just a configuration file for Vue:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

export default defineConfig({
  integrations: [vue({ appEntrypoint: '/src/pages/_app' })],
})
```

Next, install the `@formkit/vue` package:

```sh
npm install @formkit/vue
```

The `@formkit/vue` package ships with a Vue plugin and a default configuration for easy setup:

```ts
// src/pages/_app.ts
import type { App } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'

export default (app: App) => {
  app.use(plugin, defaultConfig)
}
```

::Callout
---
type: "warning"
label: "Vue Components"
---
Astro does not let you use <code>FormKit</code> directly inside Astro files, so you should create a wrapper around your forms.
::

Now add FormKit to your Astro Vue components:

```vue
<script setup>
const submitHandler = async (fields) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log(fields)
}
</script>

<template>
  <FormKit type="form" @submit="submitHandler">
    <FormKit type="text" label="Name" name="name" />
    <FormKit type="email" label="Email" name="email" />
  </FormKit>
</template>
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
import Form from '../components/Form.vue'
---

<Form client:visible />
```

That's it. You're now ready to use the `<FormKit>` component in your Astro application.
