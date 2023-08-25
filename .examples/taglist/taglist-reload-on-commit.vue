<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="taglist"
    name="country"
    label="Search for a country"
    placeholder="Example: United States"
    :options="countries"
    :reload-on-commit="true"
    :close-on-select="false"
  />
</template>

