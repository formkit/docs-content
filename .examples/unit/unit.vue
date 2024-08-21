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
    <FormKit
      type="unit"
      unit="kilometer"
      name="distance"
      label="Distance in meters"
    />
    <FormKit
      type="unit"
      unit="celsius"
      name="temperature"
      label="Temperature in Celsius"
    />
    <FormKit
      type="unit"
      unit="nanosecond"
      name="time"
      label="Time in nanoseconds"
    />
    <FormKit
      type="unit"
      unit="fluid-ounce"
      name="volume"
      label="Volume in fluid ounces"
    />
    <FormKit
      type="unit"
      unit="megabyte"
      name="digital-unit"
      label="Digital unit in megabytes"
    />
    <pre wrap>{{ value }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
