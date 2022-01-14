<template>
  <FormKit type="form" v-model="values">
    <FormKit
      :type="otp"
      digits="4"
      label="One-time password"
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
    return new Array(Number(this.context.digits)).fill('').map(() =>
      h('input', {
        onInput: this.handleInput,
        value: this.context._value,
        class: this.context.classes.digit,
        maxlength: 1,
      })
    )
  },
}

export default {
  data() {
    return {
      // We create our input definition:
      otp: createInput(OneTimePassword, {
        props: ['digits'],
      }),
      // We'll track/display the form values here:
      values: {},
    }
  },
}
</script>

<style>
.formkit-inner {
  border: 0;
}

.formkit-digit {
  appearance: none;
  padding: 0.5em;
  box-sizing: border-box;
  width: 2em;
  margin-right: 0.25em;
  text-align: center;
  border: var(--formkit-border);
  border-radius: var(--formkit-border-radius);
}
</style>
