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
      label="Choose your favorite frontend framework"
      placeholder="Example placeholder"
      :options="frameworks"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style></style>
