import { defineFormKitConfig } from '@formkit/react'
import { generateClasses } from '@formkit/themes'

export default defineFormKitConfig({
  config: {
    classes: generateClasses({
      global: {
        outer: 'SHAZAM',
      },
      text: {
        outer: 'bizz',
        input: '$reset fizz',
      },
      email: {
        outer: 'bap',
        input: '$reset bop',
      },
    }),
  },
})
