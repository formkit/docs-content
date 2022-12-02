export const max_sum = (node, max = 20) => {
  return Object.values(node.value).reduce((a, b) => a + b) >= max
}
