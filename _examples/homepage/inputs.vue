<script setup>
const airlines = {
  american: 'American Airlines',
  delta: 'Delta',
  easyjet: 'easyJet',
  jetblue: 'JetBlue',
  klm: 'KLM',
  lufthansa: 'Lufthansa',
}

const value = {
  airlines: ['american'],
}
</script>

<template>
  <FormKit type="form" :value="value" :actions="false">
    <!-- %partial% -->
    <FormKit
      label="Airlines"
      name="airlines"
      help="Which airline do you prefer to fly on?"
      type="radio"
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
    <!-- %partial% -->
  </FormKit>
</template>
