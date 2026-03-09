import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { barcode } from '@formkit/barcode'
import '@formkit/barcode/genesis'

export default defineFormKitConfig({
  inputs: {
    barcode,
  },
  icons: {
    ...genesisIcons,
  },
})
