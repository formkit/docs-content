<script setup>
import countries from './countries.js'
let countryOptions = countries.map((country, i) => ({ value: country.code, label: country.name, attrs: { disabled: i === 0 } }))
</script>

<template>
  <div class="section-wrapper">
    <h2>Pro - Taglist</h2>

    <FormKit
      type="taglist"
      label="Taglist with no initial values"
      :options="countryOptions"
      allow-new-values
    />
  </div>
</template>