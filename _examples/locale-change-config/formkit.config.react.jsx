import { defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'

export default defineFormKitConfig({
  locales: {
    de: {
      ui: {
        submit: 'Senden',
      },
      validation: {
        required({ name }) {
          return `${name[0].toUpperCase() + name.slice(1)} ist ein Pflichtfeld.`
        },
        email: 'Dies ist keine gueltige E-Mail.',
      },
    },
  },
  icons: {
    ...genesisIcons,
  },
})
