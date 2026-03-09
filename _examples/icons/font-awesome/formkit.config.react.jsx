import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  iconLoaderUrl: (iconName) =>
    `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${iconName}.svg`,
})
