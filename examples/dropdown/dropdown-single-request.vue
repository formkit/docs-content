<script setup>
import { ref } from 'vue'
const value = ref(429)

async function loadPosts() {
  const res = await fetch(`https://api.themoviedb.org/4/list/8218730?page=1&api_key=f48bcc9ed9cbce41f6c28ea181b67e14`)
  if (res.ok) {
    const data = await res.json()
    console.log('data', data)
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id,
        poster: result.poster_path,
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
    :options="loadPosts"
  >
    <template #option="{ option }">
      <div class="formkit-option">
        <img
          :src="`https://image.tmdb.org/t/p/w500${option.poster}`"
          alt="optionAvatar"
        />
        <span>
          {{ option.label }}
        </span>
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
  width: 30px;
  height: 40px;
  margin-right: 10px;
}
</style>