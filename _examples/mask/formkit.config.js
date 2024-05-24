import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'

export default {
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses,
    tokens: {
      z: {
        type: 'char',
        token: 'z',
        pattern: /[A-Za-z0-9]/,
        placeholder: '_',
        selectDirection: 'left',
      },
    },
  }
}