%partial%
<script setup>
const airlines = {
  american: 'American Airlines',
  delta: 'Delta',
  easyjet: 'easyJet',
  jetblue: 'JetBlue',
  klm: 'KLM',
  lufthansa: 'Lufthansa',
}
</script>

<template>
  <FormKit
    label="Airlines"
    help="Which airlines do you prefer to fly on?"
    type="checkbox"
    :options="airlines"
  >
    <template #label="context">
      <img
        :src="`https://cdn.formk.it/example-assets/airlines/${context.option.value}.png`"
        width="120"
        :alt="context.option.label"
      />
    </template>
  </FormKit>
</template>
%partial%

<style>
img {
  aspect-ratio: 120 / 46;
}
.formkit-option {
  margin-bottom: 0;
}
</style>
