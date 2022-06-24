export default {
  iconLoader: async (iconName) => {
    // Returns a Promise that resolves to a string or undefined
    return fetch(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${iconName}.svg`)
      .then(async (r) => {
        const icon = await r.text()
        if (icon.startsWith('<svg')) {
          return icon
        }
        return undefined
      })
      .catch(e => console.error(e))
  }
}
