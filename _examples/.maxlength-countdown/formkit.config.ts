// formkit.config.ts
import { defineFormKitConfig } from '@formkit/vue'
import { createMaxLengthCountdownPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [
    createMaxLengthCountdownPlugin({
      useAsDefault: true,
    }),
  ],
})
