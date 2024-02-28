<script setup>
import { ref } from 'vue'
const value = ref(false)
const unitType = ref('percent')
const unitOptions = ['acre', 'bit', 'byte', 'celsius', 'centimeter', 'day',
  'degree', 'fahrenheit', 'fluid-ounce', 'foot', 'gallon', 'gigabit',
  'gigabyte', 'gram', 'hectare', 'hour', 'inch', 'kilobit', 'kilobyte',
  'kilogram', 'kilometer', 'liter', 'megabit', 'megabyte', 'meter',
  'microsecond', 'mile', 'mile-scandinavian', 'milliliter', 'millimeter',
  'millisecond', 'minute', 'month', 'nanosecond', 'ounce', 'percent',
  'petabyte', 'pound', 'second', 'stone', 'terabit', 'terabyte', 'week',
  'yard', 'year']
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="select"
      name="unitType"
      label="Choose a unit type"
      :options="unitOptions"
      v-model="unitType"
    />
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      :unit="unitType"
      name="percent"
      value="123.45"
      :help="`This is a '${unitType}' unit`"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
