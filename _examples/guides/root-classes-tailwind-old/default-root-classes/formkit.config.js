export default {
  config: {
    rootClasses (sectionKey, node) {
      return {
        [`formkit-${sectionKey}`]: true
      }
    }
  }
}
