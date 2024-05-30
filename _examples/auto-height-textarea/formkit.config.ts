import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createAutoHeightTextareaPlugin()],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
