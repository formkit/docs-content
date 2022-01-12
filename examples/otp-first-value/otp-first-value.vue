<template>
  <FormKit type="form" v-model="values">
    <FormKit
      :type="otp"
      label="One time password"
      name="two_factor_code"
      help="We’ve sent a code to your phone."
      validation="required"
      validation-behavior="live"
    />
  </FormKit>

  <!-- This is just to help us visualize the data in our form: -->
  <pre wrap>{{ values }}</pre>
</template>

<script>
// [TK] import OneTimePassword from './OneTimePassword.vue'
import { createInput } from '@formkit/vue'
import { h, ref } from 'vue'

const OneTimePassword = {
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleInput(e) {
      this.context.node.input(e.target.value)
    },
  },
  render() {
    return h('input', {
      onInput: this.handleInput,
      value: this.context._value,
    })
  },
}

export default {
  data() {
    return {
      // We create our input definition:
      otp: createInput(OneTimePassword),
      // We'll track/display the form values here:
      values: {},
    }
  },
}
</script>
