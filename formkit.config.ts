import { defineFormKitConfig } from '@formkit/vue'
import { createProPlugin, inputs } from '@formkit/pro'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'

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
