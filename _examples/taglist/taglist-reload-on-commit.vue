<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit
    type="taglist"
    name="country"
    label="Search for a country"
    placeholder="Example: United States"
    popover
    :options="countries"
    :reload-on-commit="true"
    :close-on-select="false"
  />
</template>

