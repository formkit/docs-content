<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="currency"
      currency="USD"
      display-locale="en"
      name="usd"
      value="12345678.90"
    />

    <FormKit
      type="currency"
      currency="EUR"
      display-locale="de"
      name="eur"
      value="12345678.90"
    />

    <FormKit
      type="currency"
      currency="INR"
      display-locale="en-IN"
      name="inr"
      value="12345678.90"
    />

    <FormKit
      type="currency"
      currency="CNY"
      display-locale="zh-CN"
      name="cny"
      value="12345678.90"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
