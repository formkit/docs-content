<script setup>
const frameworks = [{ label: 'React', value: 'react', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/react-logo.png'}, { label: 'Vue', value: 'vue', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/vue-logo.png'}, { label: 'Angular', value: 'angular', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/angular-logo.png',}, { label: 'Svelte', value: 'svelte', asset: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/svelte-logo.png'}]
</script>

<template>
  <FormKit
    type="dropdown"
    name="framework"
    label="Choose a frontend framework"
    placeholder="Example placeholder"
    :options="frameworks"
  >
    <template #option="{ option, classes }">
      <div :class="classes.option">
        <img :src="option.asset" alt="optionAvatar" />
        <span>
          {{ option.label }}
        </span>
      </div>
    </template>
  </FormKit>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
}
.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
