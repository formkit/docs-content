<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit
    type="dropdown"
    label="Single-select"
    placheolder="Pick a country"
    :options="countries"
    value="FR"
  />
  <FormKit
    type="dropdown"
    label="Truncate appearance"
    placheolder="Pick a country"
    :options="countries"
    multiple
    :value="['FR', 'GR', 'ES']"
  />
  <FormKit
    type="dropdown"
    label="Tags appearance"
    placheolder="Pick a country"
    :options="countries"
    multiple
    selection-appearance="tags"
    :value="['FR', 'GR', 'ES']"
  />
</template>
