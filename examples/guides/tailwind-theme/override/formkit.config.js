import { generateClasses } from '@formkit/themes'
import theme from './theme.js'

export default {
  config: {
    classes: generateClasses(theme)
  }
}