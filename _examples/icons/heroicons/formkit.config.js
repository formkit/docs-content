import { rootClasses } from './formkit.theme.js'

export default {
  iconLoader: (iconName) => {
    // Return a Promise that resolves
    // to a string or undefined.
    // ... do other stuff here if you need to,
    // you have full control.
    return fetch(
      `https://cdn.jsdelivr.net/npm/heroicons/outline/${iconName}.svg`
    )
      .then(async (r) => {
        const icon = await r.text()
        if (icon.startsWith('<svg')) {
          return icon
        }
        return undefined
      })
      .catch((e) => {
        console.error(e)
        return undefined
      })
  },
  config: {
    rootClasses,
  },
}
