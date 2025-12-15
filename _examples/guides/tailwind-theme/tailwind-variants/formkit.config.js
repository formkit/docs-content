import { generateClasses } from '@formkit/themes'
import myTailwindTheme from './tailwind-theme.js'

export default {
  config: {
    classes: generateClasses(myTailwindTheme),
  },
}
