<script setup>
import carBrands from '@content/_examples/_data/car-brands.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="taglist"
      name="car_brands"
      label="Search for your favorite car brands"
      popover
      :options="carBrands"
      :value="['honda', 'toyota']"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
