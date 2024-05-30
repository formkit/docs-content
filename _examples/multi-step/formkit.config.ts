import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createMultiStepPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createMultiStepPlugin()],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
