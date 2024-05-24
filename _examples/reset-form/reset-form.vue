<!-- %partial% -->
<script>
export default {
  data() {
    return {
      complete: false,
    }
  },
  methods: {
    async handleSubmit() {
      // Our api request:
      await new Promise((r) => setTimeout(r, 1000))
      this.complete = true
      this.$formkit.reset('myForm')
    },
  },
}
</script>

<template>
  <FormKit type="form" id="myForm" @submit="handleSubmit">
    <h2 class="text-xl font-bold mb-2">Newsletter</h2>
    <p class="text-base mb-4">When this form is submitted the form is reset.</p>
    <div class="success" v-if="complete">Submitted successfully!</div>
    <FormKit
      name="email"
      validation="required|email"
      label="Email address"
      help="What email address would you like to receive our newsletter at?"
    />
    <FormKit
      type="radio"
      name="email_pref"
      label="Email frequency"
      validation="required"
      help="How often should we send you a newsletter?"
      :options="{ daily: 'Daily', weekly: 'Weekly', monthly: 'Monthly' }"
    />
  </FormKit>
</template>
<!-- %partial% -->

<style>
.success {
  padding: 0.75em;
  border-radius: 0.5em;
  background-color: lightgreen;
  margin: 1em 0;
}
</style>
