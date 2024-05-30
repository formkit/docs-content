// formkit.config.ts
import { defaultConfig } from '@formkit/vue'
import { createMaxLengthCountdownPlugin } from '@formkit/addons'
import '@formkit/addons/css/maxlengthCountdown'

const config = defaultConfig({
  plugins: [
    createMaxLengthCountdownPlugin({
      useAsDefault: true,
    }),
  ],
})

export default config
