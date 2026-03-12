import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createFloatingLabelsPlugin } from '@formkit/addons'

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
