<script setup>
async function loadHorrorMovies() {
  const res = await fetch(`https://api.themoviedb.org/4/list/8219282?page=1&api_key=f48bcc9ed9cbce41f6c28ea181b67e14`)
  if (res.ok) {
    const data = await res.json()
    // Iterating over results to set the required
    // `label` and `value` keys.
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id
      }
    })
  }
  // If the request fails, we return an empty array.
  return []
}
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
    <!--Setting the `options` prop to async function `loadHorrorMovies`-->
    <FormKit
      name="horrorMovie"
      type="dropdown"
      label="Select a horror movie"
      placeholder="Example placeholder"
      :options="loadHorrorMovies"
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
