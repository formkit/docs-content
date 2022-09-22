<script setup>
import { ref } from 'vue'
const value = ref(0)
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-model="value"
    type="rating"
  >
		<template #offItem>
      <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png" />
    </template>
    <template #onItem>
      <img src="https://i.etsystatic.com/28740631/r/il/9cfae1/3203669083/il_794xN.3203669083_knn4.jpg" />
    </template>
  </FormKit>
  <pre wrap>
    {{ value }}
  </pre>
  <!-- %partial%::html:: -->
</template>
