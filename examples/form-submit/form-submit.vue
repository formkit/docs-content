<template>
  <FormKit
    type="form"
    id="newsletter"
    :actions="false"
    @submit="submitToMailchimp"
  >
    <FormKit
      type="email"
      name="email"
      validation="required|email"
      label="Email address"
      help="What email address should we send our newsletter to?"
    />
  </FormKit>
  <p>This button is not part of the above form:</p>
  <!-- 👀 Look, this is not part of the form. -->
  <button @click="submitForm">Signup for newsletter</button>
</template>

<script>
export default {
  methods: {
    submitForm() {
      this.$formkit.submit('newsletter')
    },
    submitToMailchimp(data) {
      alert(`Submitted ${data.email} successfully!`)
    },
  },
}
</script>
