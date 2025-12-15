<script setup>
import citiesByState from './citiesByState.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="dropdown"
      name="most_populous_cities"
      label="Choose your favorite countries"
      placeholder="New York, Los Angeles..."
      :options="citiesByState"
      multiple
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style></style>
