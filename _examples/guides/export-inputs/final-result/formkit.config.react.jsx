import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'
import { floatingLabelTextInput } from './floating-label-text-input.js'

export default defineFormKitConfig({
  inputs: {
    floatingLabelTextInput,
  },
  icons: {
    ...genesisIcons,
  },
})
