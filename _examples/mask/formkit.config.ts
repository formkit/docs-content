import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
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
  },
})
