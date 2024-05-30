/* In this file, export your final config.
It will automatically be injected into the playground for you.
Imports from other playground files are supported. */

import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createMultiStepPlugin } from '@formkit/addons'

const multiStepPlugin = createMultiStepPlugin({
  tabStyle: 'progress',
  allowIncomplete: false,
})

export default {
  plugins: [multiStepPlugin],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
}
