### Vue

Most new projects use a build tool like Vite, Snowpack, or webpack. This makes installing npm dependencies a piece of cake 🍰:

```sh
npm install @formkit/vue
```

The `@formkit/vue` package ships with a Vue plugin and a default configuration for easy setup:

```js
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from 'App.vue'

createApp(App).use(plugin, defaultConfig).mount('#app')
// remember, each Vue plugin needs its own .use()
// .use(router).use(plugin2)
```

That's it! You're now ready to use the `<FormKit>` component in your Vue 3 application.
