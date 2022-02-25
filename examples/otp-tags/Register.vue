<!-- %partial% -->
<script setup>
import { ref } from 'vue'
import { createInput } from '@formkit/vue'
import OneTimePassword from 'OneTimePassword.vue'

const values = ref({})
const otp = createInput(OneTimePassword, {
  props: ['digits'],
})
</script>

<template>
  <FormKit type="form" v-model="values">
    <FormKit
      :type="otp"
      digits="4"
      label="One-time password"
      name="two_factor_code"
      help="We’ve sent a code to your phone."
      validation="required"
      validation-visibility="live"
    />
  </FormKit>

  <!-- This is just to help us visualize the data in our form: -->
  <pre wrap>{{ values }}</pre>
</template>
<!-- %partial% -->

<style>
.formkit-inner {
  box-shadow: none;
}
.formkit-inner:focus-within {
  box-shadow: none;
}

.formkit-digit {
  appearance: none;
  padding: 0.5em;
  box-sizing: border-box;
  width: 2em;
  margin-right: 0.25em;
  text-align: center;
  border: var(--fk-border);
  border-radius: var(--fk-border-radius);
}
</style>
