<script setup>
import { ref } from 'vue'
const value = ref(null)

// Destructuring FormKit's context object to get
async function searchBreweries({ page, hasNextPage }) {
  const res = await fetch(`https://api.openbrewerydb.org/breweries/?query=per_page=10&page=${page}`)
  if (res.ok) {
    const data = await res.json()
    if (Array.isArray(data) && data.length) hasNextPage()
    return data.map((item) => {
      return {
        label: item.name,
        value: item.id
      }
    })
  }
  return
}
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose an article"
    :options="searchBreweries"
  />
  <pre wrap>
    Value {{ value }}
  </pre>
</template>
