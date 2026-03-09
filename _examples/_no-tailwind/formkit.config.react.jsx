import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin(import.meta.env.VITE_FORMKIT_PRO_KEY, proInputs)

export default defineFormKitConfig({
  plugins: [pro],
  icons: {
    ...genesisIcons,
  },
})
