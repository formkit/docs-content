import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createLocalStoragePlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [
    createLocalStoragePlugin({
      prefix: 'formkit',
      maxAge: 1000 * 60 * 60, // 1 hour
    }),
  ],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
