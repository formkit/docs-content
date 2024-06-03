<script setup>
import { ref } from 'vue'
const value = ref()
async function reserve(_data, node) {
  await new Promise((r) => setTimeout(r, 200))
  alert('Your car is reserved!')
  node.reset()
}
</script>
<template>
  <FormKit type="form" v-model="value" @submit="reserve">
    <!-- %partial%::html:: -->
    <h3>Car reservation (CCU Kolkata airport)</h3>
    <div class="rental-car-card" />
    <FormKit
      type="datepicker"
      name="pickup"
      label="Pickup time"
      placeholder="Pickup time"
      :format="{ date: 'short', time: 'short' }"
      :sequence="['day', 'time']"
      help="Select a date and time to pickup your rental car."
      :min-date="new Date()"
      timezone="Asia/Kolkata"
      overlay
      popover
    />
    <FormKit
      type="datepicker"
      name="return"
      label="Return time"
      placeholder="Return time"
      :format="{ date: 'short', time: 'short' }"
      :sequence="['day', 'time']"
      :min-date="new Date()"
      help="Select a date and time to return your rental car."
      timezone="Asia/Kolkata"
      overlay
      popover
    />
    <!-- %partial%::html:: -->
  </FormKit>
  <pre wrap>{{ value }}</pre>
</template>

<style scoped>
.rental-car-card {
  padding: 1em;
  background-color: #f5f5f5;
  border-radius: 0.25em;
  margin: 1em 0;
  border-color: #e5e5e5;
  display: flex;
  align-items: center;
}
.dark .rental-car-card {
  background-color: #26262f;
  border-color: #34373e;
}

.rental-car-card::before {
  content: '';
  aspect-ratio: 1.5;
  width: 100px;
  margin-right: 1em;
  background-image: url('https://cdn.formk.it/web-assets/rental-car.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.rental-car-card::after {
  content: 'Tesla Model 420';
  font-size: 1em;
}
</style>
