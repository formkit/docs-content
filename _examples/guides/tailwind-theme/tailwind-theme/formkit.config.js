import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { generateClasses } from '@formkit/themes'
import myTailwindTheme from './tailwind-theme.js'

export default defineFormKitConfig({
  config: {
    // pass our theme object to generateClasses
    classes: generateClasses(myTailwindTheme),
  },
  icons: {
    // include supporting icons from @formkit/icons
    ...genesisIcons,
  },
})
