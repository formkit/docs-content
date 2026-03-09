import { defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { genesisIcons } from '@formkit/icons'
import { createAutoAnimatePlugin } from '@formkit/addons'

const pro = createProPlugin('fk-52971f34220', proInputs)

export default defineFormKitConfig({
  plugins: [pro, createAutoAnimatePlugin()],
  icons: {
    ...genesisIcons,
  },
})
