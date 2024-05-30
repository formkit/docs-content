import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createAutoAnimatePlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createAutoAnimatePlugin()],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
