import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  inputs: {
    hello: {
      type: 'input',
      schema: ['Hello world'],
    },
  },
})
