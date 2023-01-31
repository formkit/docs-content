<script setup>
import MultiStepContent from './multi-step-content.vue'
</script>

<template>
  <!-- %partial% -->
  <!-- default tab style -->
  <FormKit type="multi-step" tab-style="tab">
    <MultiStepContent />
  </FormKit>

  <!-- progress tab style -->
  <FormKit type="multi-step" tab-style="progress">
    <MultiStepContent />
  </FormKit>

  <!-- progress tab style w/ hidden labels -->
  <FormKit type="multi-step" tab-style="progress" :hide-progress-labels="true">
    <MultiStepContent />
  </FormKit>
  <!-- %partial% -->
</template>

<style>
/* only used for playground support. In your project you should 
import directly from the @formkit/addons package */
@import 'https://cdn.jsdelivr.net/npm/@formkit/addons@dev/dist/css/multistep.css';
</style>
