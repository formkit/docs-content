import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: {
      addend: 'appearance-none bg-transparent my-0 mx-2 w-16 px-1',
    },
  },
})
