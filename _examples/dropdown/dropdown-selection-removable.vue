<script setup>
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="dropdown"
      name="framework"
      label="Choose a frontend framework"
      placeholder="Example placeholder"
      :options="frameworks"
      value="vue"
      popover
      selection-removable
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style scoped></style>
