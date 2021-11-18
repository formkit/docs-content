<template>
<!-- %partial%::html:: -->
<FormKit
  type="checkbox"
  :options="{
    form_1: 'Forms',
    form_2: 'Forms',
    form_3: 'Forms',
    form_4: 'Forms'
  }"
  label="Select at least 2 of your interests."
  validation="min:2"
  validation-label="Interests"
  error-behavior="live"
/>
<!-- %partial%::html:: -->
</template>
