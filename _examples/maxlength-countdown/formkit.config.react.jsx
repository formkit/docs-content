import { defineFormKitConfig } from '@formkit/react'
import { createMaxLengthCountdownPlugin } from '@formkit/addons'
import '@formkit/addons/css/maxlengthCountdown.css'

export default defineFormKitConfig({
  plugins: [
    createMaxLengthCountdownPlugin({
      useAsDefault: true,
    }),
  ],
})
