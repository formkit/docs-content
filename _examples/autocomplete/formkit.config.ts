import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { generateClasses } from '@formkit/themes'
import { rootClasses } from '~/formkit.theme'
import autocomplete from './autocomplete-input.js'

export default defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
  inputs: {
    myAutocomplete: autocomplete,
  },
  config: {
    rootClasses,
    classes: generateClasses({
      myAutocomplete: {
        inner: 'relative !p-0',
        dropdown:
          'absolute top-full left-0 min-w-[15em] bg-white shadow-md m-0 p-0 list-none overflow-hidden rounded-md',
        dropdownItem:
          'p-2 border-b border-gray-200 data-[selected=true]:bg-blue-100',
        input: 'w-full !p-[0.55em]',
        value:
          'flex items-center justify-between w-full p-[0.55em] bg-gray-100 rounded-md after:content-["×"] after:first-letter:ml-[0.5em] after:text-[1.1em',
      },
    }),
  },
})
