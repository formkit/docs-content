<template>
  <FormKit type="form" :actions="false" #default="{ value }">
    <!-- %partial%::html:: -->
    <FormKit
      type="range"
      label="Hourly wage"
      number
      name="wage"
      value="50"
      min="7"
      max="120"
    />
    <pre wrap>{{ value }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
