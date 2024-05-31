<template>
  <FormKit type="form" :actions="false" #default="{ value }">
    <!-- %partial%::html:: -->
    <FormKit
      type="text"
      label="Atmospheric pressure"
      number
      name="pressure"
      help="My value will be a number if it can be parsed by parseFloat"
      value="29.82"
    />
    <pre wrap>{{ value }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
