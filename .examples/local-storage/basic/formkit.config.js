import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'
import { createLocalStoragePlugin } from '@formkit/addons'

export default {
  plugins: [
    createLocalStoragePlugin({
      prefix: 'formkit',
      maxAge: 1000 * 60 * 60, // 1 hour
    }),
  ],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}
