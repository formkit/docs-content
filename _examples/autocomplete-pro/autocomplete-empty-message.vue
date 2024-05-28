<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <!-- %partial% -->
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search for a country"
    :options="countries"
    placeholder="Example: United States"
    empty-message="No countries found"
    popover
  />
  <!-- %partial% -->
</template>
