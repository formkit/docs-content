<script>
// %partial%::javascript::
// main.js (your main Vue file)
import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from '@formkit/vue'

createApp(App)
  .use(
    plugin,
    defaultConfig({
      config: {
        classes: {
          input: 'my-class',
        },
      },
    })
  )
  .mount('#app')
// %partial%::javascript::
</script>
