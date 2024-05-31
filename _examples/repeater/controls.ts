import { ref } from 'vue'

const values = ref({
  users: [{ name: 'foofoo' }, { name: 'barbar' }],
})

const unshiftValue = () => {
  values.value.users.unshift({ name: 'first' })
}

const pushLast = () => {
  values.value.users.push({ name: 'moomoo' })
}

const changeFirst = () => {
  values.value.users[1] = { name: 'booboo' }
}

const spliceIt = () => {
  values.value.users.splice(
    1,
    2,
    { name: 'spliced' },
    { name: 'double splice' }
  )
}

const shiftFirst = () => {
  values.value.users.shift()
}

const popValue = () => {
  values.value.users.pop()
}

const spliceRemove = async () => {
  values.value.users.splice(1, 4)
  await new Promise((r) => setTimeout(r, 200))
}

const replaceIt = () => {
  values.value.users = [
    { name: 'first' },
    { name: 'second' },
    { name: 'third' },
  ]
}

const injectAtIndexOne = () => {
  values.value.users.splice(1, 0, { name: 'injected' })
}

const sortIt = () => {
  values.value.users.sort((a, b) => (a.name > b.name ? 1 : -1))
}

export {
  values,
  unshiftValue,
  pushLast,
  changeFirst,
  spliceIt,
  shiftFirst,
  popValue,
  spliceRemove,
  replaceIt,
  injectAtIndexOne,
  sortIt,
}
