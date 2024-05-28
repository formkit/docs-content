<!-- %partial% -->
<script setup>
// Search movie receives FormKit's context object
// which we are destructuring to get the search value.
async function searchMovies({ search }) {
  if (!search) return []
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=1&include_adult=false`
  )
  if (res.ok) {
    const data = await res.json()
    // Iterating over results to set the required
    // `label` and `value` keys.
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id,
      }
    })
  }
  // If the request fails, we return an empty array.
  return []
}
</script>

<template>
  <!--Setting the `options` prop to async function `loadHorrorMovies`-->
  <FormKit
    name="movie"
    type="autocomplete"
    label="Search for your favorite movie"
    placeholder="Example: Shawshank Redemption"
    popover
    :options="searchMovies"
  />
</template>
%partial%

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
