// formkit.config.ts
import { defineFormKitConfig } from '@formkit/vue'
import { createMaxLengthCountdownPlugin } from '@formkit/addons'
import '@formkit/addons/css/maxlengthCountdown.css'

export default defineFormKitConfig({
  plugins: [
    createMaxLengthCountdownPlugin({
      useAsDefault: true,
    }),
  ],
})
