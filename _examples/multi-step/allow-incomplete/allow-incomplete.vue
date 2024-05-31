<script setup>
import StepOne from '@content/_examples/multi-step/step-one.vue'
import StepTwo from '@content/_examples/multi-step/step-two.vue'
import StepThree from '@content/_examples/multi-step/step-three.vue'
</script>

<template>
  <h2>
    You can NOT advance through this multi-step input without completing each
    step.
  </h2>
  <!-- %partial% -->
  <FormKit type="multi-step" :allow-incomplete="false">
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
