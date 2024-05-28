<script setup>
// Search movie receives FormKit's context object
// which we are destructuring to get the search value,
// the page, and the hasNextPage parameters.
async function searchMovies({ search, page, hasNextPage }) {
  if (!search) return []
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
      }
    })
  }
  return []
}
</script>

<template>
  <FormKit
    name="movie"
    type="autocomplete"
    label="Search for your favorite movie"
    placeholder="Example: Lord of the Rings"
    :options="searchMovies"
    popover
  />
</template>

<style scoped>
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
