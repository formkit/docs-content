<script setup>
const initialValues = {
  input_1: 100,
  input_2: 100,
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
      unit="year"
      name="input_1"
      label="Default formatting"
    />
    <FormKit
      type="unit"
      unit="year"
      name="input_2"
      label="Formatting as string"
      value-format="string"
    />
    <pre wrap>{{ value }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
