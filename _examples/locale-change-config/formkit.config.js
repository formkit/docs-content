import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme.js'

export default {
  locales: {
    de: {
      ui: {
        submit: 'Senden',
      },
      validation: {
        required({ name }) {
          return `${
            name[0].toUpperCase() + name.substr(1)
          } ist ein Pflichtfeld.`
        },
        email: 'Dies ist keine gültige E-Mail.',
      },
    },
  },
  icons: {
    ...genesisIcons,
  },
  config: {
    rootClasses,
  },
}
