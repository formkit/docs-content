import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: {
      digit:
        'text-xl w-10 h-10 border bg-transparent border-gray-300 rounded-md text-center mr-1 mb-2 last:mr-0 dark:border-gray-800',
    },
  },
})
