import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { createLocalStoragePlugin } from '@formkit/addons'

export default {
  plugins: [createLocalStoragePlugin()],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}