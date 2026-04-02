import { defineFormKitConfig } from '@formkit/vue'

export default defineFormKitConfig({
  config: {
    rootClasses(sectionKey, node) {
      return {
        [`formkit-${sectionKey}`]: true,
      }
    },
  },
})
