import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { barcode } from '@formkit/barcode'

export default defineFormKitConfig({
  inputs: {
    barcode,
  },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
