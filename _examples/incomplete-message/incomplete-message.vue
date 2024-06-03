<script setup>
const nextMonday = new Date()
nextMonday.setDate(
  nextMonday.getDate() + ((((7 - nextMonday.getDay()) % 7) + 1) % 7)
)
</script>

<template>
  <FormKit
    type="form"
    @submit="() => false"
    incomplete-message="Achtung! We can not service your Deutsche automobil without all the fields being filled out correctly."
  >
    <h2 class="text-xl font-bold mb-4">Schedule service</h2>
    <FormKit
      type="date"
      name="dropoff_date"
      label="Appointment day"
      help="When can you bring your car in?"
      :validation="[['required'], ['date_after', nextMonday]]"
    />
    <FormKit
      type="select"
      name="vehicle"
      label="Vehicle type"
      placeholder="Select a brand"
      :options="['Audi', 'BMW', 'Mercedes', 'Volkswagen']"
      validation="required|is:Audi,Volkswagen"
      :validation-messages="{
        is: ({ node: { value } }) =>
          `Sorry, we don’t service ${value} anymore.`,
      }"
    />
    <FormKit
      type="text"
      name="model"
      label="Model"
      placeholder="ID-6"
      validation="required"
    />
  </FormKit>
</template>
