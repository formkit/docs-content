<script setup>
async function loadHorrorMovies() {
	await new Promise(resolve => setTimeout(resolve, 1000))
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
</script>

<template>
  <!-- %partial% -->
  <FormKit
    name="horrorMovie"
    type="dropdown"
    label="Select a horror movie"
    placeholder="Example placeholder"
    :options="loadHorrorMovies"
    always-load-on-open
  />
  <!-- %partial% -->
</template>

