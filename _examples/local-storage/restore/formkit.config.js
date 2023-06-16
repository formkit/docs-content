// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createLocalStoragePlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [createLocalStoragePlugin()],
})

export default config
