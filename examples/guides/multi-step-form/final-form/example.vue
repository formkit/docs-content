<script setup>
import { camel2title, axios } from './utils.js'
import useSteps from './useSteps.js'

const { steps, visitedSteps, activeStep, setStep, stepPlugin } = useSteps()

// NEW: submit handler, which posts to our fake backend.
const submitApp = async (formData, node) => {
  try {
    const res = await axios.post(formData)
    node.clearErrors()
    alert('Your application was submitted successfully!')
  } catch (err) {
    node.setErrors(err.formErrors, err.fieldErrors)
  }
}

// NEW: helper function to check step validity on step blur
const checkStepValidity = (stepName) => {
  return (steps[stepName].errorCount > 0 || steps[stepName].blockingCount > 0) && visitedSteps.value.includes(stepName)
}

</script>

<template>
  <h1>Carbon Sequestration Grant</h1>

  <FormKit
    type="form"
    #default="{ value, state: { valid } }"
    :plugins="[stepPlugin]"
    @submit="submitApp"
    :actions="false"
  >
    <ul class="steps">
      <!-- NEW: uses new checkStepValidity method to check validation on step blur -->
      <li
        v-for="(step, stepName) in steps"
        :class="['step', { 'has-errors': checkStepValidity(stepName) }]"
        @click="activeStep = stepName"
        :data-step-valid="step.valid && step.errorCount === 0"
        :data-step-active="activeStep === stepName"
      >
        <span
          v-if="checkStepValidity(stepName)"
          class="step--errors"
          v-text="step.errorCount + step.blockingCount"
        />
        {{ camel2title(stepName) }}
      </li>
    </ul>

    <!-- .form-body solely for styling -->
    <div class="form-body">
      <section v-show="activeStep === 'contactInfo'">
        <FormKit
          type="group"
          id="contactInfo"
          name="contactInfo"
        >
          <FormKit
            type="text"
            label="*Full name"
            name="full_name"
            placeholder="First Last"
            validation="required"
          />

          <FormKit
            type="email"
            name="email"
            label="*Email address"
            placeholder="email@domain.com"
            validation="required|email"
          />

          <FormKit
            type="tel"
            name="tel"
            label="*Telephone"
            placeholder="xxx-xxx-xxxx"
            help="Phone number must be in the xxx-xxx-xxxx format."
            validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'organizationInfo'">
        <FormKit
          id="organizationInfo"
          type="group"
          name="organizationInfo"
        >
          <FormKit
            type="text"
            label="*Organization name"
            name="org_name"
            placeholder="MyOrg, Inc."
            help="Enter your official organization name."
            validation="required|length:3"
          />

          <FormKit
            type="date"
            label="Date of incorporation"
            :validation="[['before_date', new Date(Date.now())]]"
            name="date_inc"
          />
        </FormKit>
      </section>

      <section v-show="activeStep === 'application'">
        <FormKit
          id="application"
          type="group"
          name="application"
        >
          <FormKit
            type="checkbox"
            label="*I'm not a previous grant recipient"
            help="Have you received a grant from us before?"
            name="not_previous_recipient"
            validation="required|accepted"
            :validation-messages="{
              accepted: 'We can only give one grant per organization.'
            }"
          />
          <FormKit
            type="textarea"
            label="*How will you use the money?"
            name="how_money"
            help="Must be between 20 and 500 characters."
            placeholder="Describe how the grant will accelerate your efforts."
            validation="required|length:20,500"
          />
        </FormKit>
      </section>

      <div class="step-nav">
        <FormKit type="button" :disabled="activeStep == 'contactInfo'" @click="setStep(-1)" v-text="'Previous step'" />
        <FormKit type="button" class="next" :disabled="activeStep == 'application' " @click="setStep(1)" v-text="'Next step'"/>
      </div>

      <details>
        <summary>Form data</summary>
        <pre>{{ value }}</pre>
      </details>
    </div>

    <FormKit type="submit" label="Submit Application" :disabled="!valid" />
  </FormKit>

  <p><small><em>*All the contents of this form are fictional (the company, grant, and form)
    for the purposes of demonstrating the capabilities of FormKit.</em></small></p>
</template>

<style>
/* Styles imported for brevity */
/* CSS for multi-step forms is not included in the default Genesis theme.
   styles were custom-written for this example and you will need to provide
   your own. */
@import "https://cdn.formk.it/web-assets/multistep-form.css";
</style>
