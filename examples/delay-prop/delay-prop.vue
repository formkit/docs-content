<template>
  <FormKit type="group" v-model="data">
    <FormKit
      name="email"
      type="email"
      label="Email"
      help="Notice it takes a full second for the data to update."
      :delay="1000"
      validation="required|length:5|email"
      validation-visibility="live"
    />
  </FormKit>
  <pre wrap>{{ data }}</pre>
</template>

<script setup>
import { ref } from 'vue'
const data = ref({})
</script>
