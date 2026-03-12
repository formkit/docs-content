// formkit.config.js
import { defineFormKitConfig } from '@formkit/vue'
import { createMaxLengthCountdownPlugin } from '@formkit/addons'
import '@formkit/addons/css/maxlengthCountdown'

export default defineFormKitConfig({
  plugins: [
    createMaxLengthCountdownPlugin({
      useAsDefault: true,
    }),
  ],
})
