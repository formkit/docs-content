<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="autocomplete"
      name="autocomplete"
      label="Search and select multiple countries"
      :options="countries"
      :value="['US']"
      selection-appearance="option"
      multiple
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
