import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { barcode } from '@formkit/barcode'
import '@formkit/barcode/genesis'

export default {
  inputs: {
    barcode,
  },
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}
