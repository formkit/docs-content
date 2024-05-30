import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from '~/formkit.theme'

export default defineFormKitConfig({
  iconLoaderUrl: (iconName) =>
    `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${iconName}.svg`,
  config: {
    rootClasses,
  },
})
