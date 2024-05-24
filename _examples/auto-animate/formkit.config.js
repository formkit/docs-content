import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { createAutoAnimatePlugin } from '@formkit/addons'

export default {
  plugins: [
    createAutoAnimatePlugin()
  ],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}