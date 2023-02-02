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
