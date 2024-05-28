<script setup>
import countries from '@content/_examples/_data/countries.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="dropdown"
      name="countries"
      label="Choose your favorite countries"
      placeholder="Afghanistan, Albania..."
      :options="countries"
      multiple
      popover
      max="3"
      :value="['AF', 'AL']"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style scoped></style>
