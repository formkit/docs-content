<script setup>
import StepOne from './stepOne.vue'
import StepTwo from './stepTwo.vue'
import StepThree from './stepThree.vue'
</script>

<template>
  <h2>
    You can advance through this multi-step input without completing each step.
  </h2>
  <!-- %partial% -->
  <FormKit 
    type="multi-step" 
    :allow-incomplete="true"
  >
    <FormKit type="step" name="personalInfo">
      <!-- component for example brevity. -->
      <StepOne />
    </FormKit>

    <FormKit type="step" name="references">
      <!-- component for example brevity. -->
      <StepTwo />
    </FormKit>

    <FormKit type="step" name="Supplemental">
      <!-- component for example brevity. -->
      <StepThree />
    </FormKit>
  </FormKit>
  <!-- %partial% -->
</template>

<style>
/* only used for playground support. In your project you should 
import directly from the @formkit/addons package */
@import 'https://cdn.jsdelivr.net/npm/@formkit/addons@dev/dist/css/multistep.css';
</style>
