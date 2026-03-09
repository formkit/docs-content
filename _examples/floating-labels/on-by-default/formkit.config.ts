import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels.css'

export default defineFormKitConfig({
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true,
    }),
  ],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
