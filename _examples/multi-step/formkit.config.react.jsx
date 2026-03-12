import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { createMultiStepPlugin } from '@formkit/addons'
import { rootClasses } from '~/formkit.theme'
import '@formkit/addons/css/multistep.css'

export default defineFormKitConfig({
  plugins: [createMultiStepPlugin()],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
