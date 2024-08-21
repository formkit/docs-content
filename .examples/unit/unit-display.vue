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
    <FormKit type="unit" unit="kilogram" name="narrow" unit-display="narrow" />
    <FormKit type="unit" unit="kilogram" name="short" unit-display="short" />
    <FormKit type="unit" unit="kilogram" name="long" unit-display="long" />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
