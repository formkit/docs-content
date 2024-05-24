<script setup>
const frameworks = [
  {
    label: 'React',
    value: 'react',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/react-logo.png',
  },
  {
    label: 'Vue',
    value: 'vue',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/vue-logo.png',
  },
  {
    label: 'Angular',
    value: 'angular',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/angular-logo.png',
  },
  {
    label: 'Svelte',
    value: 'svelte',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/svelte-logo.png',
  },
]
</script>

<template>
  <FormKit
    type="autocomplete"
    name="framework"
    label="Choose a frontend framework"
    placeholder="Example placeholder"
    :options="frameworks"
    options-appearance="checkbox"
    multiple
    popover
  />
</template>

<style></style>
