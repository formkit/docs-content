<script setup>
import { ref } from 'vue'
const color = ref('#79B2D6')
</script>

<template>
  <!-- %partial% -->
  <FormKit type="colorpicker" format="hex" v-model="color" delay="0" />
  <FormKit type="colorpicker" format="hsla" v-model="color" delay="0" />
  <FormKit type="colorpicker" format="rgba" v-model="color" delay="0" />
  <!-- %partial% -->
</template>
