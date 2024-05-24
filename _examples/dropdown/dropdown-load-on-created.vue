<script setup>
import { ref } from 'vue'

async function loadHorrorMovies() {
	await new Promise(resolve => setTimeout(resolve, 1000))
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

let showDropdown = ref(false)
</script>

<template>
  <FormKit type="button" @click="showDropdown = !showDropdown">{{ showDropdown ? 'Hide' : 'Show' }} Dropdown</FormKit>
  <!-- %partial% -->
  <FormKit
    v-if="showDropdown"
    name="horrorMovie"
    type="dropdown"
    label="Select a horror movie"
    placeholder="Example placeholder"
    popover
    :options="loadHorrorMovies"
    load-on-created
  />
  <!-- %partial% -->
</template>

<style>

</style>
