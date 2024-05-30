import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { floatingLabelTextInput } from './floatingLabelTextInput.js'

export default {
  inputs: {
    floatingLabelTextInput,
  },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
}
