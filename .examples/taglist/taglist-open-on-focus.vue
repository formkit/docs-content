<script setup>
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

function focusTaglist() {
  document.querySelector('#taglist').focus()
}
</script>

<template>
  <div>
    <FormKit type="button" @click="focusTaglist">Click me to focus dropdown</FormKit>
    <FormKit
      id="taglist"
      type="taglist"
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
