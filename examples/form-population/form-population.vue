<script setup>
const save = () => {
  alert('Saved')
}
</script>

<template>
<!-- %partial%::html:: -->
  <FormKit
    type="form"
    :value="{
      location: 'New York City',
      duration: '2 weeks',
      price: 'average'
    }"
    submit-label="Save"
    @submit="save"
  >
    <h2>Edit request</h2>
    <p>Edit your housing request below.</p>
    <FormKit
      type="text"
      name="location"
      label="Location"
      help="Where would you like to stay?"
      validation="required"
    />
    <FormKit
      type="text"
      name="duration"
      label="Duration"
      help="How long would you like to stay?"
      validation="required"
    />
    <FormKit
      type="radio"
      name="price"
      label="Pricing"
      help="How much are you able to pay"
      :options="{
        low: 'Below average',
        average: 'Average',
        high: 'Super luxe'
      }"
    />
  </FormKit>
<!-- %partial%::html:: -->
</template>
