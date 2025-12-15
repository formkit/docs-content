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
    popover
    :filter="
      (option, search) =>
        option.label.toLowerCase().startsWith(search.toLowerCase())
    "
  />
  <!-- %partial% -->
  <pre wrap>{{ value }}</pre>
</template>
