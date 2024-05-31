<script setup>
import StepOne from '@content/_examples/multi-step/step-one.vue'
import StepTwo from '@content/_examples/multi-step/step-two.vue'
import StepThree from '@content/_examples/multi-step/step-three.vue'
</script>
<!-- %partial% -->
<template>
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="tab">
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

        <!-- using step slot for submit button-->
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
</template>
<!-- %partial% -->
./stepOne.vue./stepThree.vue./stepTwo.vue../stepOne.vue../stepThree.vue../stepTwo.vue
