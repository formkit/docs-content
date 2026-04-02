import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { zh } from '@formkit/i18n'

export default defineFormKitConfig({
  locales: { zh },
  icons: {
    ...genesisIcons,
  },
})
