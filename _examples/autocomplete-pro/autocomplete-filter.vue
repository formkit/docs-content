<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
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
  <pre wrap>{{ value }}</pre>
</template>
