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
    classes: {
      digit:
        'text-xl w-10 h-10 border bg-transparent border-gray-300 rounded-md text-center mr-1 mb-2 last:mr-0 dark:border-gray-800',
    },
  },
})
