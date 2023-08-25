<template>
  <FormKit type="form" :actions="false" #default="{ age }">
    <!-- %partial%::html:: -->
    <FormKit
      type="number"
      help="I will always be an integer"
      label="Age"
      name="age"
      :value="25"
      step="1"
      number="integer"
    />
    <pre wrap>age: {{ age }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
