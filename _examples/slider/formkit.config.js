import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/addons/css/floatingLabels'

export default {
  plugins: [createFloatingLabelsPlugin()],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}