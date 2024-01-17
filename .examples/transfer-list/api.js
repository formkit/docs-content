export async function getGuests() {
  const res = await fetch(
    'https://api-formkit-docs-examples.formkit.workers.dev/guests'
  )
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      return data.data.map((result) => {
        return {
          label: result.name,
          value: result.id,
        }
      })
    }
  }
  return []
}

export async function paginateGuests({ page, hasNextPage }) {
  const res = await fetch(
    `https://api-formkit-docs-examples.formkit.workers.dev/guests?page=${page}`
  )
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      if (data.current_page < data.total_pages) {
        hasNextPage()
      }
      return data.data.map((result) => {
        return {
          label: result.name,
          value: result.id,
        }
      })
    }
  }
  return []
}

export async function searchGuests({ search }) {
  if (!search) {
    return []
  }
  const res = await fetch(
    `https://api-formkit-docs-exmaples.formkit.workers.dev/guests?search=${search}`
  )
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      return data.data.map((result) => {
        return {
          label: result.name,
          value: result.id,
        }
      })
    }
  }
  return []
}

export async function getGuest(id, cachedOption) {
  if (cachedOption) return cachedOption
  const res = await fetch(
    `https://api-formkit-docs-examples.formkit.workers.dev/guests/${id}`
  )
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      return {
        label: data.data.name,
        value: data.data.id,
      }
    }
  }
}

export async function loadGuest(id, cachedOption) {
  if (cachedOption && cachedOption.hasLoaded) return cachedOption
  const res = await fetch(
    `https://api-formkit-docs-examples.formkit.workers.dev/guests/${id}`
  )
  if (res.ok) {
    const data = await res.json()
    if (data.data) {
      return {
        name: data.data.name,
        label: data.data.name + ` (age ${data.data.age})`,
        value: data.data.id,
        age: data.data.age,
        phone: data.data.phone,
        email: data.data.email,
        hasLoaded: true,
      }
    }
  }
}
