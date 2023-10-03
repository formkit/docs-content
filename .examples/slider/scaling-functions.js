export const customQuad = {
  forward: (value, min, max) => {
    if (value <= min) return min
    const scale = ((value - min) / (max - min)) ** 2
    return min + scale * (max - min)
  },
  reverse: (value, min, max) => {
    const scale = Math.sqrt((value - min) / (max - min))
    return min + scale * (max - min)
  },
}

export const customSine = {
  forward: (value, min, max) => {
    if (value <= min) return min
    if (value >= max) return max
    const scale =
      0.5 *
      (1 + Math.sin((Math.PI * (value - min)) / (max - min) - Math.PI / 2))
    return min + scale * (max - min)
  },
  reverse: (value, min, max) => {
    const scale =
      Math.asin(2 * ((value - min) / (max - min)) - 1) / Math.PI + 0.5
    return min + scale * (max - min)
  },
}
