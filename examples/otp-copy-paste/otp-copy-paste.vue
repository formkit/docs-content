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
  data() {
    return {
      tmp: this.context.value || '',
    }
  },
  computed: {
    max() {
      return Number(this.context.digits)
    },
  },
  methods: {
    handleInput(index, e) {
      const prev = this.tmp

      if (this.tmp.length <= index) {
        // If this is a new digit
        this.tmp = `${this.tmp}${e.target.value}`
      } else {
        // If this digit is in the middle somewhere, cut the string into two
        // pieces at the index, and insert our new digit in.
        this.tmp = `${this.tmp.substr(0, index)}${
          e.target.value
        }${this.tmp.substr(index + 1)}`
      }

      // Get all the digit inputs
      const inputs = e.target.parentElement.querySelectorAll('input')

      if (index < this.max - 1 && this.tmp.length >= prev.length) {
        // If this is a new input and not at the end, focus the next input
        inputs.item(index + 1).focus()
      } else if (index > 0 && this.tmp.length < prev.length) {
        // in this case we deleted a value, focus backwards
        inputs.item(index - 1).focus()
      }

      if (this.tmp.length === this.max) {
        // If our input is complete, commit the value.
        this.context.node.input(this.tmp)
      } else if (this.tmp.length < this.max && this.context.value !== '') {
        // If our input is incomplete, it should have no value.
        this.context.node.input('')
      }
    },
    handleFocus(e) {
      e.target.select()
    },
    handlePaste(e) {
      const paste = e.clipboardData.getData('text')
      if (typeof paste === 'string') {
        // If it is the right length, paste it.
        this.tmp = paste.substr(0, this.max)
        const inputs = e.target.parentElement.querySelectorAll('input')
        // Focus on the last character
        inputs.item(this.tmp.length - 1).focus()
      }
    },
  },
  render() {
    return new Array(this.max).fill('').map((_v, index) =>
      h('input', {
        onInput: this.handleInput.bind(this, index),
        onFocus: this.handleFocus,
        onPaste: this.handlePaste,
        value: this.tmp[index] || '',
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
