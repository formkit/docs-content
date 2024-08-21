<script setup>
const initialValues = {
  input_1: 100,
  input_2: 100,
}
</script>

<template>
  <FormKit type="form" :actions="false" :value="initialValues">
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      unit="liter"
      name="input_1"
      label="5 decimals allowed"
      decimals="5"
    />
    <FormKit
      type="unit"
      unit="liter"
      name="input_2"
      label="Minimum of 2 decimals"
      min-decimals="2"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
