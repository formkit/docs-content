<script setup>
import citiesByState from '@content/_examples/_data/citiesByState.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="taglist"
      name="most_populous_cities"
      label="Choose your favorite countries"
      placeholder="New York, Los Angeles..."
      :options="citiesByState"
      multiple
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style></style>
