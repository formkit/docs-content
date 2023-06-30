// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'

const config = defaultConfig({
  plugins: [createFloatingLabelsPlugin()],
})

export default config
