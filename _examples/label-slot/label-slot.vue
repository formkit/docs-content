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
    option-class="!mb-0"
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

<style scoped>
img {
  aspect-ratio: 120 / 46;
}
.dark img {
  /* mask to white in dark mode */
  filter: invert(1) grayscale(1) brightness(1.1) contrast(2);
  mix-blend-mode: lighten;
}
.formkit-option {
  margin-bottom: 0;
}
</style>
