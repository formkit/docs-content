<script setup>
import StepOne from './stepOne.vue'
import StepTwo from './stepTwo.vue'
import StepThree from './stepThree.vue'
</script>
<!-- %partial% -->
<template>
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="progress">
      <FormKit type="step" name="personalInfo">
        <StepOne />
      </FormKit>

      <FormKit type="step" name="references">
        <StepTwo />
      </FormKit>

      <FormKit type="step" name="Supplemental">
        <StepThree />
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>
<!-- %partial% -->
