export const customQuad = {
  forward: (value, min, max) => {
    return Math.sqrt(value / max) * max
  },
  reverse: (percentage, min, max) => {
    return percentage ** 2 / max
  },
}
export const customSine = {
  forward: (value, min, max) => {
    return max * (Math.asin(value / 50 - 1) / Math.PI + 0.5)
  },
  reverse: (percentage, min, max) => {
    return 50 * (Math.sin((Math.PI * (percentage - max / 2)) / max) + 1)
  },
}
