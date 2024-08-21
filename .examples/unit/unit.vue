<script setup>
const initialValues = {
  distance: 100,
  temperature: 100,
  time: 100,
  volume: 100,
  'digital-unit': 100,
}
</script>

<template>
  <FormKit
    v-slot="{ value }"
    type="form"
    :actions="false"
    :value="initialValues"
  >
    <!-- %partial%::html:: -->
    <FormKit type="unit" unit="meter" name="distance" />
    <FormKit type="unit" unit="celsius" name="temperature" />
    <FormKit type="unit" unit="day" name="time" />
    <FormKit type="unit" unit="fluid-ounce" name="volume" />
    <FormKit type="unit" unit="megabyte" name="digital-unit" />
    <pre wrap>{{ value }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
