<script setup>
import { ref } from 'vue'
const value = ref(null)
async function loadCurrentlyPopularMovies({ page, hasNextPage }) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}`)
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((item) => ({ label: item.title, value: item.id }))
  }
  return []
}
</script>

<template>
  <!-- %partial% -->
  <!--Setting 'load-on-scroll' prop to true-->
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose a currently popular movie"
    :options="loadCurrentlyPopularMovies"
    :load-on-scroll="true"
  />
  <pre wrap>
    Value {{ value }}
  </pre>
  <!-- %partial% -->
</template>
