<script>
export default {
  data () {
    return {
      data: {},
      schema:
      // %partial%::js::
      [
        {
          $el: 'h1',
          children: 'Register'
        },
        {
          $formkit: 'text',
          name: 'email',
          label: 'Email',
          help: 'This will be used for your account.',
          validation: 'required|email'
        },
        {
          $formkit: 'password',
          name: 'password',
          label: 'Password',
          help: 'Enter your new password.',
          validation: 'required|length:5,16'
        },
        {
          $formkit: 'password',
          name: 'password_confirm',
          label: 'Confirm password',
          help: 'Enter your new password again to confirm it.',
          validation: 'required|confirm',
          validationLabel: 'password confirmation',
        },
        {
          $cmp: 'FormKit',
          props: {
            name: 'eu_citizen',
            type: 'checkbox',
            id: 'eu',
            label: 'Are you a european citizen?',
          }
        },
        {
          $formkit: 'select',
          if: '$get(eu).value', // 👀 Oooo, conditionals!
          name: 'cookie_notice',
          label: 'Cookie notice frequency',
          options: {
            refresh: 'Every page load',
            hourly: 'Ever hour',
            daily: 'Every day'
          },
          help: 'How often should we display a cookie notice?'
        }
      ]
      // %partial%::js::
    }
  },
  methods: {
    async register() {
      await new Promise((r) => setTimeout(r, 2000))
      alert('Account created!')
    }
  }
}
</script>

<template>
  <FormKit
    type="form"
    v-model="data"
    @submit="register"
  >
    <FormKitSchema
      :schema="schema"
    />
  </FormKit>
  <pre wrap>{{ data }}</pre>
</template>
