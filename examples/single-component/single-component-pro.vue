<script setup>
import { ref } from 'vue'
import { createAutoAnimatePlugin } from '@formkit/addons'
const autoAnimatePlugin = createAutoAnimatePlugin()
const addReview = ref(false)
async function searchMovies({ search }) {
  if (!search) return []
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=1&include_adult=false`
  )
  if (res.ok) {
    const data = await res.json()
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id,
      }
    })
  }
  return []
}
</script>

<template>
  <FormKit type="form" :actions="false" :plugins="[autoAnimatePlugin]">
    <!-- %partial%::html:: -->
    <FormKit type="repeater" label="My Movies">
      <FormKit
        name="movie"
        type="autocomplete"
        label="Search for a movie"
        placeholder="Ex: Interstellar"
        :options="searchMovies"
      />
      <FormKit type="rating" label="My rating" />
    </FormKit>
    <!-- %partial%::html:: -->
  </FormKit>
</template>

<style>
.formkit-form {
  max-width: 32em;
}
</style>
