import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createFloatingLabelsPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createFloatingLabelsPlugin()],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
