<script setup>
const initialValues = {
  input_1: 0,
}
</script>

<template>
  <FormKit type="form" :actions="false" :value="initialValues">
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      unit="centimeter"
      name="input_1"
      label="Step of 100"
      step="100"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
