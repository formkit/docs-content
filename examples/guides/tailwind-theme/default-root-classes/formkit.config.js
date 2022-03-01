export default {
  config: {
    rootClasses (sectionKey, node) {
      return {
        // the default rootClasses function does
        // not make use of the node argument.
        [`formkit-${sectionKey}`]: true
      }
    }
  }
}
