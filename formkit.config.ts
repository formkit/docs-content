import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { rootClasses } from '~/formkit.theme'
import { genesisIcons } from '@formkit/icons'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, inputs)

export default defineFormKitConfig({
  plugins: [pro],
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
