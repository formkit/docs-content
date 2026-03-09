import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
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
})
