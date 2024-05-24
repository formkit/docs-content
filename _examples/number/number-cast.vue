<template>
  <FormKit type="form" :actions="false" #default="{ value: values }">
    <!-- %partial%::html:: -->
    <FormKit
      type="number"
      help="I will always parse as a float"
      label="Spoons of sugar (float)"
      number
      name="sugar_float"
      value="3.25"
    />
    <FormKit
      type="number"
      help="I will always be an integer"
      label="Age (integer)"
      number="integer"
      name="age_integer"
      value="25"
    />
    <pre wrap>{{ JSON.stringify(values) }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
