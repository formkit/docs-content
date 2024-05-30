import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'

export default defineFormKitConfig({
  props: {
    validation: 'required|length:5,20',
  },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
})
