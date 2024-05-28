<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <!-- %partial% -->
  <FormKit
    type="autocomplete"
    name="country"
    label="Search for a country"
    placeholder="Example: United States"
    :options="countries"
    open-on-click
    popover
  />
  <!-- %partial% -->
</template>
