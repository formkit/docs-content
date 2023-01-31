// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep.css'

const config = defaultConfig({
  plugins: [createMultiStepPlugin()],
})

export default config
