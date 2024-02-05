<script setup>
const frameworks = [{ label: 'React', value: 'react', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/react-logo.png'}, { label: 'Vue', value: 'vue', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/vue-logo.png'}, { label: 'Angular', value: 'angular', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/angular-logo.png',}, { label: 'Svelte', value: 'svelte', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/svelte-logo.png'}]
</script>

<template>
  <FormKit
    type="dropdown"
    name="framework"
    label="Choose a frontend framework"
    placeholder="Example placeholder"
    popover
    :options="frameworks"
  >
    <template #option="{ option, classes }">
      <div :class="`${classes.option} flex items-center`">
        <img :src="option.asset" alt="optionAvatar" class="w-5 mr-2" />
        <span>
          {{ option.label }}
        </span>
      </div>
    </template>
  </FormKit>
</template>
