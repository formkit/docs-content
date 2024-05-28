<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit
    type="taglist"
    name="country"
    label="Search for a country"
    placeholder="Example: United States"
    :options="countries"
    open-on-remove
    popover
    :value="['US']"
  />
  <pre wrap>{{ value }}</pre>
</template>
