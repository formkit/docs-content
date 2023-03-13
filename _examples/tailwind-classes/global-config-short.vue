<script>
  // %partial%::js::
  // main.js (your main Vue file)
  import { createApp } from 'vue'
  import App from './App.vue'
  import { plugin } from '@formkit/vue'
  import './index.css' // Styles that include Tailwind from your build process
  import tailwindTheme from './my-tailwind-theme'
  // ^ exports a function that accepts `node` and sets the value of
  // node.config.rootClasses to your rootClasses function from the previous example

  createApp(App)
    .use(plugin, defaultConfig({
      plugins: [tailwindTheme]
    }))
  .mount('#app')
  // %partial%::js::
</script>
