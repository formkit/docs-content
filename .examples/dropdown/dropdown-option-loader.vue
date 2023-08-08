<script setup>
async function loadCurrentlyPopularMovies({ page, hasNextPage }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}`
  )
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((item) => ({ label: item.title, value: item.id }))
  }
  return []
}

// The function assigned to the `option-loader` prop will be called with the
// value of the option as the first argument (in this case, the movie ID), and
// the cached option as the second argument (if it exists).
async function loadMovie(id, cachedOption) {
  if (cachedOption) return cachedOption
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US`
  )
  if (res.ok) {
    const data = await res.json()
    return {
      label: data.title,
      value: data.id,
    }
  }
  return { label: 'Error loading' }
}
</script>

<template>
  <FormKit type="form" :actions="false">
    <FormKit
      type="dropdown"
      name="currentlyPopularMovie"
      label="Choose some currently popular movies you want to see."
      placeholder="Avatar, Star Wars..."
      :options="loadCurrentlyPopularMovies"
      :option-loader="loadMovie"
      multiple
      :value="[597, 800]"
    />
  </FormKit>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/@formkit/pro@dev/genesis.css';
</style>
