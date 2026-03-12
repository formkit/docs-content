import { defineFormKitConfig } from '@formkit/react'
import { createMaxLengthCountdownPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [
    createMaxLengthCountdownPlugin({
      useAsDefault: true,
    }),
  ],
})
