<script setup>
import carBrands from './car-brands.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="taglist"
      name="car_brands"
      label="Search for your favorite car brands"
      :options="carBrands"
      :value="['honda', 'toyota']"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
