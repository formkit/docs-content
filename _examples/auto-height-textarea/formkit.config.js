import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

export default {
  plugins: [
    createAutoHeightTextareaPlugin(),
  ],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}