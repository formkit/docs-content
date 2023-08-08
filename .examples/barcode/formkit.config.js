import { defaultConfig } from '@formkit/vue'
import { barcode } from '@formkit/barcode'
import '@formkit/barcode/genesis'

const config = defaultConfig({
  inputs: {
    barcode,
  },
})

export default config
