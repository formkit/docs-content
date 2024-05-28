<script setup>
import { ref } from 'vue'

const step = ref('contactInfo')
const stepNames = ['contactInfo', 'organizationInfo', 'application']

const camel2title = (str) =>
  str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim()
</script>

<template>
  <h1 class="text-2xl font-bold mb-4">Carbon Sequestration Grant</h1>

  <FormKit type="form" #default="{ value }">
    <ul class="steps">
      <li
        v-for="stepName in stepNames"
        class="step"
        @click="step = stepName"
        :data-step-active="step === stepName"
      >
        {{ camel2title(stepName) }}
      </li>
    </ul>

    <div class="form-body">
      <section v-show="step === 'contactInfo'">
        <FormKit type="group" id="contactInfo" name="contactInfo">
          <FormKit
            type="email"
            label="*Email address"
            validation="required|email"
          />
        </FormKit>
      </section>

      <section v-show="step === 'organizationInfo'">
        <FormKit id="organizationInfo" type="group" name="organizationInfo">
          <FormKit
            type="text"
            label="*Organization name"
            validation="required|length:3"
          />
        </FormKit>
      </section>

      <section v-show="step === 'application'">
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
