import { genesisIcons } from '@formkit/icons'
import { generateClasses } from '@formkit/themes'
import { rootClasses } from './formkit.theme.js'

export default {
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
}
