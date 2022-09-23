<script setup>
import { ref } from 'vue'
const value = ref(null)
async function loadMovies({ page, hasNextPage }) {
  const res = await fetch('https://api.themoviedb.org/4/list/8218730?page=1&api_key=f48bcc9ed9cbce41f6c28ea181b67e14')
  if (res.ok) {
    const data = await res.json()
    //console.log('data', data)
    hasNextPage()
    return data.map((item) => ({ label: item.title.rendered, value: item.id }))
  }
  return []
}
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose an article"
    :options="loadMovies"
  />
  <pre wrap>
    Value {{ value }}
  </pre>
</template>
