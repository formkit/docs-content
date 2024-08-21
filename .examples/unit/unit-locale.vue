<script setup>
const initialValues = {
  input_1: 100,
  input_2: 100,
  input_3: 100,
}
</script>

<template>
  <FormKit type="form" :actions="false" :value="initialValues">
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      unit="kilogram"
      name="input_1"
      unit-display="long"
      display-locale="en-US"
    />
    <FormKit
      type="unit"
      unit="kilogram"
      name="input_2"
      unit-display="long"
      display-locale="de-DE"
    />
    <FormKit
      type="unit"
      unit="kilogram"
      name="input_3"
      unit-display="long"
      display-locale="zh-CN"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
