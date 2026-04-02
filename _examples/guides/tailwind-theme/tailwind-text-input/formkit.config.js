import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import myTailwindTheme from './tailwind-theme.js'

export default defineFormKitConfig({
  config: {
    classes: generateClasses(myTailwindTheme),
  },
})
