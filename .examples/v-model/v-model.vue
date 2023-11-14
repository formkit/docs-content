<script setup>
import { ref } from 'vue'

const city = ref('Florence')
const cities = ref([
  'Prague',
  'Rome',
  'Berlin',
  'Amsterdam',
  'Barcelona',
  'London',
])

function randomCity() {
  const index = Math.floor(Math.random() * (cities.value.length - 1))
  if (cities.value[index] !== city.value) {
    city.value = cities.value[index]
  } else {
    randomCity()
  }
}
</script>

<template>
  <FormKit
    type="text"
    label="European city"
    help="What is your favorite European city?"
    v-model="city"
  />
  <FormKit type="button" @click="randomCity">Random City</FormKit>
  <pre>City: {{ city }}</pre>
</template>
