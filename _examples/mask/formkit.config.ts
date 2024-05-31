import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'
import { createProPlugin, inputs } from '@formkit/pro'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, inputs)

export default defineFormKitConfig({
  plugins: [pro],
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
