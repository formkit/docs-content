<template>
  <!-- %partial%::html:: -->
  <FormKit type="form" v-model="data">
    <FormKit
      type="checkbox"
      name="beverage"
      label="Include a beverage?"
      help="Would you like a drink with that?"
    />
    <!-- Try adding/removing preserve -->
    <FormKit
      v-if="data.beverage"
      preserve
      type="radio"
      name="beverage_type"
      :options="['Tea', 'Coffee']"
      label="Beverage"
      help="Select a beverage please."
    />
  </FormKit>
  <!-- %partial%::html:: -->
  <pre wrap>{{ data }}</pre>
</template>

<script setup>
import { ref } from 'vue'
const data = ref({})
</script>
