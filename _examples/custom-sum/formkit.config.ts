import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from '~/formkit.theme'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
    classes: {
      // adding custom classes for our $classes.addend calls
      addend: 'appearance-none bg-gray-100 my-0 mx-2 w-16 px-1',
    },
  },
})
