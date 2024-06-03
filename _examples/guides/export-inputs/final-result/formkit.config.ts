import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { floatingLabelTextInput } from './floating-label-text-input.js'

export default defineFormKitConfig({
  inputs: {
    floatingLabelTextInput,
  },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
