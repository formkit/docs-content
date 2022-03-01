import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config.js' // our config with a custom RootClasses function
import './index.css' // whatever css includes your Tailwind setup

createApp(App)
  .use(
    plugin,
    defaultConfig(config) // add our custom config to the default config
  )
  .mount('#app')
