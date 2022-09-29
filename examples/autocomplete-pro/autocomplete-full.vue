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
        value: result.id,
        poster_path: result.poster_path,
        overview: result.overview
      }
    })
  }
  return []
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
      selection-appearance="option"
      multiple
    >
      <!--HERE WE ARE DEFINING OUR OPTION SLOT-->
      <template #option="{ option }">
        <div class="formkit-option">
          <div class="image-container">
            <img
              :src="`https://image.tmdb.org/t/p/w500${option.poster_path}`"
              alt="optionAvatar"
            />
          </div>
          <div class="text-container">
            <div>
              {{ option.label }}
            </div>
            <p class="option-overview">
              {{ option.overview }}
            </p>
          </div>
        </div>
      </template>
      <!---->
      </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.formkit-option img {
  width: 100%;
  margin-right: 20px;
}

.option-overview {
  font-size: 12px;
}

.formkit-selection .formkit-option img {
  width: 100%;
  margin-right: 10px;
}

.image-container {
  width: 20%;
}

.text-container {
  width: 60%;
}
</style>
