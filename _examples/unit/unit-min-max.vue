<script setup>
const initialValues = {
  input_1: 100,
  input_2: 0,
}
</script>

<template>
  <FormKit type="form" :actions="false" :value="initialValues">
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      unit="millisecond"
      name="input_1"
      label="Min of 100"
      min="100"
    />
    <FormKit
      type="unit"
      unit="millisecond"
      name="input_2"
      label="Max of 100"
      max="100"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
