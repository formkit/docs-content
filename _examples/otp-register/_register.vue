<script setup>
import { ref } from 'vue'
import { createInput } from '@formkit/vue'
import OneTimePassword from '@content/_examples/otp-register/one-time-password.vue'

const values = ref({})
const otp = createInput(OneTimePassword)
</script>

<template>
  <FormKit type="form" v-model="values">
    <FormKit
      :type="otp"
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
