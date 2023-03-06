import { defaultConfig } from '@formkit/vue'
import { createMultiStepPlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [createMultiStepPlugin()],
})

export default config
