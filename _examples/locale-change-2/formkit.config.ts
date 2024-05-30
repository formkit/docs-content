import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { zh } from '@formkit/i18n'

export default defineFormKitConfig({
  locales: { zh },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
