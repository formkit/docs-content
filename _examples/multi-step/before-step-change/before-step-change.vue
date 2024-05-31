<script setup>
import { ref } from 'vue'
const stepInformation = ref({})
</script>

<template>
  <!-- %partial% -->
  <FormKit
    type="multi-step"
    :disabled="disabled"
    :before-step-change="
      ({ currentStep, targetStep, delta }) => {
        stepInformation.value = {
          currentStepName: currentStep.stepName,
          targetStepName: targetStep.stepName,
          delta,
        }
        // Change to false to block all step changes
        return true
      }
    "
  >
    <FormKit type="step" name="personalInfo">
      <FormKit type="text" label="Name" prefix-icon="avatarMan" />
    </FormKit>

    <FormKit type="step" name="favoriteThing">
      <FormKit type="text" label="Favorite Thing" prefix-icon="star" />
    </FormKit>

    <FormKit type="step" name="happyMemory">
      <FormKit type="text" label="Happy Memory" prefix-icon="happy" />
    </FormKit>
  </FormKit>
  <!-- %partial% -->

  <h2>beforeStepChange Data:</h2>
  <pre wrap>{{ stepInformation.value }}</pre>
</template>
