import { rootClasses } from './formkit.theme.js'

export default {
  iconLoaderUrl: (iconName) =>
    `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/solid/${iconName}.svg`,
  config: {
    rootClasses,
  },
}
