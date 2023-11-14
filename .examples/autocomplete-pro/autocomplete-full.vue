<script setup>
import { topMovies } from './topMovies.js'
// Search movie receives FormKit's context object
// which we are destructuring to get the search value,
// the page, and the hasNextPage parameters.
async function searchMovies({ search, page, hasNextPage }) {
  if (!search) {
    // When there is no search value we return a static list of top movies
    return topMovies
  }
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}&include_adult=false`
  )
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id,
        poster_path: result.poster_path,
        overview: result.overview,
      }
    })
  }
  return []
}
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      name="movie"
      type="autocomplete"
      label="Search for your favorite movie"
      placeholder="Example placeholder"
      :options="searchMovies"
      selection-appearance="option"
      multiple
      remove-selection-class="p-2 pl-0"
    >
      <template #option="{ option }">
        <div class="flex items-center justify-between">
          <div class="image-container w-1/4 mr-2">
            <img
              :src="`https://image.tmdb.org/t/p/w500${option.poster_path}`"
              alt="optionAvatar"
              class="w-full"
            />
          </div>
          <div class="text-container w-full">
            <div class="text-base leading-none font-bold">
              {{ option.label }}
            </div>
            <p class="option-overview text-xs">
              {{ option.overview }}
            </p>
          </div>
        </div>
      </template>
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>