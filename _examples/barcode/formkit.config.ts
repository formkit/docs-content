import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme.js'
import { barcode } from '@formkit/barcode'
import '@formkit/barcode/genesis'

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
