import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  props: {
    validation: 'required|length:5,20',
  },
})
