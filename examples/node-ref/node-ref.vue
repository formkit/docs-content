<template>
  <FormKit ref="myInput" label="Email address" />
  <FormKit type="button" @click="setEmail" label="Set email" />
</template>

<script setup>
import { ref } from 'vue'
const myInput = ref(null)

const setEmail = () => {
  myInput.value.node.input('djokovic@tennis.gov')
}
</script>
