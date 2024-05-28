<script setup>
import { camel2title } from './utils.js'
import useSteps from './useSteps.js'

const { steps, activeStep, stepPlugin, visitedSteps } = useSteps()

// NEW: helper function to check step validity on step blur
const checkStepValidity = (stepName) => {
  return (
    (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) &&
    visitedSteps.value.includes(stepName)
  )
}

// force an error only for this example
setTimeout(() => {
  visitedSteps.value.push('contactInfo')
}, 100)
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Carbon Sequestration Grant</h1>

  <FormKit type="form" #default="{ value }" :plugins="[stepPlugin]">
    <ul class="steps">
      <!-- NEW: uses new checkStepValidity method to check validation on step blur -->
      <li
        v-for="(step, stepName) in steps"
        :class="['step', { 'has-errors': checkStepValidity(stepName) }]"
        @click="activeStep = stepName"
        :data-step-valid="step.valid && step.errorCount === 0"
        :data-step-active="activeStep === stepName"
      >
        <!-- NEW: output total number of errors in a little red bubble -->
        <span
          v-if="checkStepValidity(stepName)"
          class="step--errors"
          v-text="step.errorCount + step.blockingCount"
        />
        {{ camel2title(stepName) }}
      </li>
    </ul>

    <div class="form-body">
      <section v-show="activeStep === 'contactInfo'">
        <FormKit type="group" id="contactInfo" name="contactInfo">
          <FormKit
            type="email"
            label="*Email address"
            validation="required|email"
            validation-visibility="live"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'organizationInfo'">
        <FormKit id="organizationInfo" type="group" name="organizationInfo">
          <FormKit
            type="text"
            label="*Organization name"
            validation="required|length:3"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'application'">
        <FormKit id="application" type="group" name="application">
          <FormKit
            type="textarea"
            label="*How will you use the money?"
            validation="required|length:20,500"
          />
        </FormKit>
      </section>

      <details>
        <summary>Form data</summary>
        <pre>{{ value }}</pre>
      </details>
    </div>
  </FormKit>
</template>

<style scoped>
/* Styles imported for brevity */
/* CSS for multi-step forms is not included in the default Genesis theme.
   styles were custom-written for this example and you will need to provide
   your own. */
@import 'https://cdn.formk.it/web-assets/multistep-form.css';
</style>
