<script setup>
const initialValues = {
  narrow: 100,
  short: 100,
  long: 100,
  empty: 100,
}
</script>

<template>
  <FormKit type="form" :actions="false" :value="initialValues">
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      unit="kilogram"
      name="narrow"
      unit-display="narrow"
      label="Narrow"
    />
    <FormKit
      type="unit"
      unit="kilogram"
      name="short"
      unit-display="short"
      label="Short"
    />
    <FormKit
      type="unit"
      unit="kilogram"
      name="long"
      unit-display="long"
      label="Long"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
