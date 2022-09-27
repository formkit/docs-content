<script setup>
const localeOptions = { year: 'numeric', month: 'long', day: 'numeric' }

async function loadHorrorMovies() {
  const res = await fetch(`https://api.themoviedb.org/4/list/8219282?page=1&api_key=f48bcc9ed9cbce41f6c28ea181b67e14`)
  if (res.ok) {
    const data = await res.json()
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id
      }
    })
  }
  return []
}

function formatDate(string) {
  return new Date(string).toLocaleDateString(undefined, localeOptions)
}

// The function assigned to the `option-loader` prop
// will be called with the value of the option as
// an argument. In this case, it is the ID of the movie.
async function loadMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US`)
  if (res.ok) {
    const data = await res.json()
    // Setting the option label to the movie's title
    // concatenated with its release date.
    return { label: data.title + ' (' + formatDate(data.release_date) + ')', value: data.id }
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
      name="horrorMovie"
      type="dropdown"
      label="Choose an iconic horror movie"
      placeholder="Example placeholder"
      :options="loadHorrorMovies"
      :option-loader="loadMovie"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
