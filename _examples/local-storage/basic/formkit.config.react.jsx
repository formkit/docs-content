import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createLocalStoragePlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [
    createLocalStoragePlugin({
      prefix: 'formkit',
      maxAge: 1000 * 60 * 60,
    }),
  ],
  icons: {
    ...genesisIcons,
  },
})
