<script setup>
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

function focusDropdown() {
  document.querySelector('#dropdown').focus()
}
</script>

<template>
  <div>
    <FormKit type="button" @click="focusDropdown">Click me to focus dropdown</FormKit>
    <FormKit
      id="dropdown"
      type="dropdown"
      name="framework"
      label="Choose a frontend framework"
      placeholder="Example placeholder"
      :options="frameworks"
      value="vue"
      open-on-focus
    />
  </div>
</template>

<style></style>
