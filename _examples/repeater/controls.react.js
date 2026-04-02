export const initialValues = {
  users: [{ name: 'foofoo' }, { name: 'barbar' }],
}

export function unshiftValue(setValues) {
  setValues((current) => ({
    ...current,
    users: [{ name: 'first' }, ...current.users],
  }))
}

export function pushLast(setValues) {
  setValues((current) => ({
    ...current,
    users: [...current.users, { name: 'moomoo' }],
  }))
}

export function changeFirst(setValues) {
  setValues((current) => ({
    ...current,
    users: current.users.map((user, index) =>
      index === 1 ? { name: 'booboo' } : user
    ),
  }))
}

export function spliceIt(setValues) {
  setValues((current) => {
    const users = [...current.users]
    users.splice(1, 2, { name: 'spliced' }, { name: 'double splice' })
    return { ...current, users }
  })
}

export function shiftFirst(setValues) {
  setValues((current) => ({
    ...current,
    users: current.users.slice(1),
  }))
}

export function popValue(setValues) {
  setValues((current) => ({
    ...current,
    users: current.users.slice(0, -1),
  }))
}

export async function spliceRemove(setValues) {
  setValues((current) => {
    const users = [...current.users]
    users.splice(1, 4)
    return { ...current, users }
  })
  await new Promise((resolve) => setTimeout(resolve, 200))
}

export function replaceIt(setValues) {
  setValues({
    users: [
      { name: 'first' },
      { name: 'second' },
      { name: 'third' },
    ],
  })
}

export function injectAtIndexOne(setValues) {
  setValues((current) => {
    const users = [...current.users]
    users.splice(1, 0, { name: 'injected' })
    return { ...current, users }
  })
}

export function sortIt(setValues) {
  setValues((current) => ({
    ...current,
    users: [...current.users].sort((a, b) => (a.name > b.name ? 1 : -1)),
  }))
}
