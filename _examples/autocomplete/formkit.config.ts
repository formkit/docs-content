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
          'absolute top-full left-0 min-w-[15em] bg-white shadow-md m-0 p-0 list-none overflow-hidden rounded-md dark:bg-slate-800',
        dropdownItem:
          'p-2 border-b border-gray-200 data-[selected=true]:bg-blue-100 dark:border-gray-700 dark:data-[selected=true]:bg-blue-800 dark:text-gray-200',
        input: 'w-full !p-[0.55em]',
        value:
          'flex items-center justify-between w-full p-[0.55em] bg-gray-100 dark:bg-slate-800 !text-gray-800 dark:!text-gray-200 rounded-md after:content-["×"] after:first-letter:ml-[0.5em] after:text-[1.1em] hover:text-current hover:!no-underline dark:hover:text-current dark:hover:!no-underline',
      },
    }),
  },
})
