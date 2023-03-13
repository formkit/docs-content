<script setup>
import StepOne from './stepOne.vue'
import StepTwo from './stepTwo.vue'
import StepThree from './stepThree.vue'

const data = {
  name: 'John FormKit',
  email: 'hello@formkit.com',
  phone: '(555) 555-5555',
}
</script>
<template>
  <FormKit type="form" :actions="false">
    <!-- %partial% -->
    <FormKit type="multi-step">
      <FormKit type="step" name="personalInfo" :value="data">
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
    <!-- %partial% -->
  </FormKit>
</template>
