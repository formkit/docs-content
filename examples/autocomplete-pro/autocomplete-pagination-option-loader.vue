<script setup>
// Search movie receives FormKit's context object
// which we are destructuring to get the search value,
// the page, and the hasNextPage parameters.
async function searchMovies({ search, page, hasNextPage }) {
  if (!search) return [];
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search || ''}&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}&include_adult=false`)
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id
      }
    })
  }
  return []
}

// The function assigned to the `option-loader` prop
// will be called with the value of the option as
// an argument. In this case, it is the ID of the movie.
async function loadMovieGenres(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US`)
  if (res.ok) {
    const data = await res.json()
    // Setting the option label to the movie's title
    // concatenated with each of its respective genres.
    return { label: data.title + ' (' + data.genres.map((x, index) => index !== data.genres.length - 1  ?  x.name + ', ' : x.name).join('') + ')', value: data.id }
  }
  return { label: 'Error loading' }
}
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <FormKit
      name="movie"
      type="autocomplete"
      label="Search for your favorite movie"
      placeholder="Example placeholder"
      :options="searchMovies"
      :option-loader="loadMovieGenres"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
}

.formkit-option img {
  width: 20%;
  margin-right: 20px;
}

.option-overview {
  font-size: 12px;
}
</style>
