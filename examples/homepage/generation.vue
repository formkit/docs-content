<script>
export default {
  data () {
    return {
      formData: {},
      // %partial%::js::
      data: {
        pricePerUser: 2.99,
        format: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format
      },
      schema:
      [
        {
          // 👀  Oooo, arbitrary markup!
          $el: 'h1',
          children: 'Account Settings'
        },
        {
          $formkit: 'text',
          name: 'email',
          label: 'Email',
          value: 'hello@formkit.com',
          help: 'This email will be used for account notifications.',
          validation: 'required|email'
        },
        {
          $formkit: 'number',
          name: 'users',
          id: 'users',
          min: '1',
          max: '100',
          value: '3',
          label: 'Users',
          help: 'How many users do you need on your plan?'
        },
        {
          $el: 'h4',
          // 👀  Oooo, dynamic expressions!
          children: [
            'Cost: ',
            '$format($pricePerUser * $get(users).value)',
            ' / month'
          ]
        },
        {
          $formkit: 'checkbox',
          name: 'eu_company',
          id: 'eu',
          label: 'Are you located in the European Union?',
        },
        {
          $formkit: 'select',
          // 👀  Oooo, conditionals!
          if: '$get(eu).value',
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
      alert('Account updated!')
    }
  }
}
</script>

<template>
  <FormKit
    type="form"
    v-model="formData"
    @submit="register"
  >
    <FormKitSchema
      :schema="schema"
      :data="data"
    />
  </FormKit>
  <pre wrap>{{ formData }}</pre>
</template>
