// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [
    createAutoHeightTextareaPlugin(),
  ],
})

export default config