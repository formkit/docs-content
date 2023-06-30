<script setup>
async function loadCurrentlyPopularMovies({ page, hasNextPage }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}`
  )
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((item) => ({
      label: item.title,
      value: item.id,
      poster_path: item.poster_path,
      overview: item.overview,
    }))
  }
  return []
}
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      name="currentlyPopularMovie"
      type="dropdown"
      label="Choose a currently popular movie"
      :options="loadCurrentlyPopularMovies"
      :load-on-scroll="true"
    >
      <!--HERE WE ARE DEFINING OUR OPTION SLOT-->
      <template #option="{ option }">
        <div class="formkit-option">
          <img
            :src="`https://image.tmdb.org/t/p/w500${option.poster_path}`"
            alt="optionAvatar"
          />
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
}
.formkit-option img {
  width: 20%;
  margin-right: 20px;
}

.option-overview {
  font-size: 12px;
}
</style>
