<script setup>
import { ref } from 'vue'
const movieReview = ref(null)
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

// The function assigned to the `option-loader` prop
// will be called with the value of the option as
// its first argument, and the option object as its
// second.
async function loadMovie(id, option) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US`
  )
  if (res.ok) {
    const data = await res.json()
    // Here we are setting the value of our
    // `movieReview` ref to the first review
    if (data.results && data.results.length) {
      movieReview.value =
        data.results[0].content + ' - ' + data.results[0].author
    }
    return { label: option.label, value: id }
  }
  return { label: 'Error loading' }
}
</script>

<template>
  <FormKit type="form" :actions="false">
    <FormKit
      type="autocomplete"
      name="currentlyPopularMovie"
      label="Choose a currently popular movie"
      placeholder="Example placeholder"
      :options="loadCurrentlyPopularMovies"
      popover
      :option-loader="loadMovie"
    />
    <pre class="movie-review">{{ movieReview }}</pre>
  </FormKit>
</template>

<style scoped>
.movie-review {
  white-space: pre-wrap;
}
</style>
