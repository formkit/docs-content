import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep.css'

export default defineFormKitConfig({
  plugins: [createMultiStepPlugin()],
  icons: {
    ...genesisIcons,
  },
})
