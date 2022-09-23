<script setup>
import { ref } from 'vue'
const value = ref(429)

async function loadMovies() {
  const res = await fetch(`https://api.themoviedb.org/4/list/8218730?page=1&api_key=f48bcc9ed9cbce41f6c28ea181b67e14`)
  if (res.ok) {
    const data = await res.json()
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id,
        poster: result.poster_path,
        overview: result.overview,
      }
    })
  }
  return []
}
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Select a movie"
    :options="loadMovies"
  >
    <template #option="{ option }">
      <div class="formkit-option">
        <img
          :src="`https://image.tmdb.org/t/p/w500${option.poster}`"
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
  </FormKit>
  <pre wrap>
    Value {{ value }}
  </pre>
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