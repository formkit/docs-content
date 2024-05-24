import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { createMultiStepPlugin } from '@formkit/addons'

export default {
  plugins: [createMultiStepPlugin()],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}