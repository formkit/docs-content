import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme.js'
import { zh } from '@formkit/i18n'

export default {
  locales: { zh },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
}
