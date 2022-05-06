<script setup>
import { camel2title, axios, clearErrors } from './utils.js'
import Styles from './styles.vue'
import useSteps from './useSteps.js'

const { steps, activeStep, setStep, stepPlugin } = useSteps()

const submitApp = async (formData, node) => {
  try {
    const res = await axios.post(formData)
    clearErrors(node)
    alert('Your application was submitted successfully!')
  } catch (err) {
    node.setErrors(err.formErrors, err.fieldErrors)
  }
}

</script>

<template>
  <h1>Carbon Sequestration Startup Grant</h1>
  <p>
    <em>Green World 2030</em> is giving away three $150,000 (USD) grants to startups
    who demonstrate ingenuity, creativity, and progress towards their carbon
    sequestration efforts. Fill out this form to apply.
  </p>
      
  <FormKit
    type="form"
    #default="{ value }"
    submit-label="Submit application"
    :plugins="[stepPlugin]"
    @submit="submitApp"
  >
 
    <ul class="steps">
      <li
        v-for="(step, stepName) in steps"
        :class="['step', { 'has-errors': step.errorCount > 0 }]"
        @click="activeStep = stepName"
        :data-step-valid="step.valid && step.errorCount === 0"
        :data-step-active="activeStep === stepName"
      >
        <span
          v-if="step.errorCount > 0"
          class="step--errors"
          v-text="step.errorCount"
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
            validation="required"
          />
          
          <FormKit
            type="email"
            name="email"
            label="*Email address"
            validation="required|email"
          />
          
          <FormKit
            type="tel"
            name="tel"
            label="*Telephone"
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
        <button :disabled="activeStep == 'contactInfo'"  type="button" @click="setStep(-1)" v-text="'< Previous step'" />
        <button class="next" :disabled="activeStep == 'application' " type="button" @click="setStep(1)" v-text="'Next step >'"/>
      </div>
          
      <details>
        <summary>Form data</summary>
        <pre>{{ value }}</pre>
      </details>
    </div>
    
  </FormKit>
  
  <p><small><em>*All the contents of this form are fictional (the company, grant, and form)
    for the purposes of demonstrating the capabilities of FormKit.</em></small></p>
  <Styles />
</template>