<script setup>
import { useFormKitContext } from '@formkit/vue'
// Get the entire form context
const form = useFormKitContext()
// Get only the "name" via traversal
const name = useFormKitContext('name')
// Get the "city" and run an effect when it mounts
useFormKitContext('address.city', () => {
  alert('Showing city!')
})
</script>

<template>
  <h2>Address</h2>
  <FormKit type="group" name="address">
    <div class="flex gap-4">
      <FormKit name="street" label="Street" />
      <FormKit name="street_2" label="Street 2" />
    </div>
    <FormKit type="checkbox" name="usa" label="Are you in the United States?" />
    <div class="flex gap-4" v-if="form?.value.address?.usa">
      <FormKit name="city" label="City" />
      <FormKit
        type="select"
        name="state"
        label="State"
        :options="{ va: 'Virginia', nc: 'North Carolina' }"
      />
    </div>
  </FormKit>
  Your name: {{ name.value }}
</template>
