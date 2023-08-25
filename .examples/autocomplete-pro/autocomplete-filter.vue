<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search for a country"
    :options="countries"
    placeholder="Example: United States"
    :filter="
      (option, search) =>
        option.label.toLowerCase().startsWith(search.toLowerCase())
    "
  />
  <pre wrap>{{ value }}</pre>
</template>
