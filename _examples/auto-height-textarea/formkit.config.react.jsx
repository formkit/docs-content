import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createAutoHeightTextareaPlugin()],
  icons: {
    ...genesisIcons,
  },
})
