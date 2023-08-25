<script setup>
import countries from './countries.js'
</script>

<template>
  <!-- %partial% -->
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search for a country"
    :options="countries"
    multiple
    :close-on-select="false"
    placeholder="Example: United States"
  />
  <!-- %partial% -->
</template>
