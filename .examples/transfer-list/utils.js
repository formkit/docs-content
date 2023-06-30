export function initials(str) {
  return str
    .split(' ')
    .slice(0, 2)
    .map((item) => item.charAt(0).toUpperCase())
    .join('')
}

export const michaelJordan = (node) => {
  return node.value[0] === '34'
}