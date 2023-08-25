<script setup>
import countries from './countries.js'
</script>

<template>
  <!-- %partial% -->
  <FormKit
    type="dropdown"
    label="Select a country"
    :options="countries"
    behavior="overscroll"
    value="NP"
    placeholder="Select a country"
  />
  <!-- %partial% -->
</template>
