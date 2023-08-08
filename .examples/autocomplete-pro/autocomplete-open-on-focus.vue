<script setup>
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

function focusAutocomplete() {
  document.querySelector('#autocomplete').focus()
}
</script>

<template>
  <div>
    <FormKit type="button" @click="focusAutocomplete">Click me to focus autocomplete</FormKit>
    <FormKit
      id="autocomplete"
      type="autocomplete"
      name="framework"
      label="Choose a frontend framework"
      placeholder="Example placeholder"
      :options="frameworks"
      open-on-focus
    />
  </div>
</template>

<style></style>
