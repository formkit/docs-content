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
    <FormKit type="unit" unit="percent" name="percent" value="123.45" />
    
    <FormKit type="unit" unit="fahrenheit" name="fahrenheit" value="123.45" />
    
    <FormKit type="unit" unit="gigabyte" name="gigabyte" value="123.45" />
    
    <FormKit type="unit" unit="kilogram" name="kilogram" displayLocale="de-DE" value="123.45" />
    
    <FormKit type="unit" unit="fluid-ounce" name="fluid-ounce" value="123.45" />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
