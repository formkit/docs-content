<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    label="Single-select text input"
    placheolder="Pick a country"
    :options="countries"
    popover
    value="FR"
  />
  <FormKit
    type="autocomplete"
    label="Single-select option"
    placheolder="Pick a country"
    :options="countries"
    popover
    selection-appearance="option"
    value="FR"
  />
  <FormKit
    type="autocomplete"
    label="Multiple text input"
    placheolder="Pick a country"
    :options="countries"
    popover
    multiple
    :value="['FR', 'GR', 'ES']"
  />
  <FormKit
    type="autocomplete"
    label="Multiple option"
    placheolder="Pick a country"
    :options="countries"
    multiple
    selection-appearance="option"
    :value="['FR', 'GR', 'ES']"
  />
</template>
