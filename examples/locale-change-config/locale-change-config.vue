%partial%
<template>
  <a @click.prevent="changeLocale" href="#">
    <span v-if="current === 'en'">🇩🇪 config.locale = 'de'</span>
    <span v-if="current === 'de'">🇺🇸 config.locale = 'en'</span>
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
    Note: this example does not contain a full german locale, only the messages
    required for this example (submit, required, email).
  </small>
</template>

<script setup>
import { ref, inject } from 'vue'

const current = ref('en')
const config = inject(Symbol.for('FormKitConfig'))

const changeLocale = () => {
  current.value = current.value === 'en' ? 'de' : 'en'
  config.locale = current.value
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
