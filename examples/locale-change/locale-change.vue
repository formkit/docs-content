%partial%
<template>
  <a @click.prevent="changeLocale" href="#">
    <span v-if="current === 'en'">🇩🇪 setLocale('de')</span>
    <span v-if="current === 'de'">🇺🇸 setLocale('en')</span>
  </a>
  <FormKit type="form">
    <FormKit
      type="email"
      label="Email"
      placeholder="email@example.com"
      validation="required|email"
    />
  </FormKit>
  <small>
    Note: this example does not contain a full German locale, only the messages
    required for this example (submit, required, email).
  </small>
</template>

<script>
export default {
  data() {
    return {
      current: 'en',
    }
  },
  methods: {
    changeLocale() {
      this.current = this.current === 'en' ? 'de' : 'en'
      this.$formkit.setLocale(this.current)
    },
  },
}
</script>
%partial%

<style>
a {
  margin-bottom: 2em;
}
small {
  margin-top: 1em;
  color: SlateGray;
}
</style>
