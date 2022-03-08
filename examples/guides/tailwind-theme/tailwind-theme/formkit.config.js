import { generateClasses } from '@formkit/tailwindcss'
import theme from './theme.js'

export default {
  config: {
    classes: generateClasses(theme)
  }
}