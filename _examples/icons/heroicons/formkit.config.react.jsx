import { defineFormKitConfig } from '@formkit/react'

export default defineFormKitConfig({
  iconLoader: (iconName) => {
    return fetch(
      `https://cdn.jsdelivr.net/npm/heroicons/outline/${iconName}.svg`
    )
      .then(async (response) => {
        const icon = await response.text()
        if (icon.startsWith('<svg')) {
          return icon
        }
        return undefined
      })
      .catch((error) => {
        console.error(error)
        return undefined
      })
  },
})
