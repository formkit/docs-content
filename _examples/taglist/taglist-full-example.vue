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
      type="taglist"
      label="Search for your favorite movie"
      placeholder="Example placeholder"
      :options="searchMovies"
      selection-appearance="option"
      multiple
      popover
    >
      <!--HERE WE ARE DEFINING OUR TAG SLOT-->
      <template #tag="{ handlers, option, classes }">
        <div :class="classes.tag">
          <img
            class="w-5 mr-2"
            :src="`https://image.tmdb.org/t/p/w500${option.poster_path}`"
            alt="optionAvatar"
          />
          <span :class="classes.tagLabel">
            {{ option.label }}
          </span>
          <button @click.prevent="handlers.removeSelection(option)()" tabindex="-1" type="button" aria-controls="input_1" :class="classes.removeSelection"><span :class="`${classes.closeIcon} ${classes.Icon}`"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path></svg></span></button>
        </div>
      </template>
      <!---->
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
