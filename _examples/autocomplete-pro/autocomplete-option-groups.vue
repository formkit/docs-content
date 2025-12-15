<script setup>
import citiesByState from '@content/_examples/_data/citiesByState.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial% -->
    <FormKit
      type="autocomplete"
      name="most_populous_cities"
      label="Choose your favorite countries"
      placeholder="New York, Los Angeles..."
      :options="citiesByState"
      multiple
      popover
    />
    <!-- %partial% -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style></style>
