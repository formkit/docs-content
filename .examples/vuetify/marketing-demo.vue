<script setup>
/** playground setup for vuetify specifically **/
import { createVuetify } from 'vuetify'
const vuetify = createVuetify({
  // components: {}
})
window.vueApp.use(vuetify)
</script>

<template>
  <!-- %partial% -->
  <VFormKit>
    <h2 class="text-lg font-bold text-center mb-3">FormKit Vuetify Demo</h2>
    <VTextField variant="outlined" />
  </VFormKit>
  <!-- %partial% -->
</template>

<style scoped>
/** Vuetify CSS **/
@import 'https://cdn.jsdelivr.net/npm/vuetify@latest/dist/vuetify.min.css';
</style>
