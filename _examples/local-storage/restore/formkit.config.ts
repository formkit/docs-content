import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createLocalStoragePlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createLocalStoragePlugin()],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
