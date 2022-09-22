<script setup>
  import { ref } from 'vue'
  const value = ref(null)
  const frameworks = [{ label: 'React', value: 'react' }, { label: 'Vue', value: 'vue' }, { label: 'Angular', value: 'angular' }, { label: 'Svelte', value: 'svelte' }]
</script>

<template>
  <FormKit
    v-model="value"
    type="dropdown"
    label="Choose a front end framework"
    :options="frameworks"
  />
  <pre wrap>
    {{ value }}
  </pre>
</template>
