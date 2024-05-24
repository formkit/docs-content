import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { floatingLabelTextInput } from './floatingLabelTextInput.js'

export default {
  inputs: {
    floatingLabelTextInput
  },
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}