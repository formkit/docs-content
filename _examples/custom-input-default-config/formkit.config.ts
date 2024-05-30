import { defineFormKitConfig } from '@formkit/vue'

export default defineFormKitConfig({
  inputs: {
    hello: {
      type: 'input',
      schema: ['Hello world'],
    },
  },
})
