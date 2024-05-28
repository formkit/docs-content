<script setup>
import { ref } from 'vue'
import { FormKitMessages } from '@formkit/vue'

const form = ref(null)

async function submitHandler(_data, node) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors([
    'Gambling is illegal.',
    'Your crime has been reported to the authorities.',
  ])
}
</script>

<template>
  <FormKit type="form" @submit="submitHandler" ref="form">
    <FormKit
      type="checkbox"
      label="Soccer nations"
      validation-label="countries"
      :options="[
        '🇧🇷 Brazil',
        '🇩🇪 Germany',
        '🇮🇹 Italy',
        '🇦🇷 Argentina',
        '🇺🇾 Uruguay',
        '🇫🇷 France',
        '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',
        '🇪🇸 Spain',
      ]"
      help="Which 4 countries will be in the semi finals of the next world cup?"
      validation="required|*min:2"
    />
    <FormKit
      type="mask"
      label="Bet amount"
      :show-mask="false"
      mask="{#,##|repeat}{#.##}"
      prefix="$"
      reverse
      unmask-value
      allow-incomplete
      validation="required|length:4"
      :validation-messages="{
        length: 'Minimum bet is $10.00',
      }"
      help="How much do you want to bet?"
    />
  </FormKit>

  <div class="toast">
    <FormKitMessages :node="form?.node" />
  </div>
</template>

<style scoped>
.toast {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  padding: 1rem;
}

.toast > * {
  padding: 0.75em;
  border-radius: 0.25em;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.1);
  background-color: #8d2c2c;
}

.toast li {
  margin-bottom: 0 !important;
  color: white !important;
}
</style>
