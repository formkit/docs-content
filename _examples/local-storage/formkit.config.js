// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createLocalStoragePlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [
    createLocalStoragePlugin({
      prefix: 'formkit',
      maxAge: 1000 * 60 * 60, // 1 hour
    }),
  ],
})

export default config
