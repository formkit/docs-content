<script setup>
// See that we have all fields as the first parameter?
const createUser = async (fields) => {
  await new Promise((r) => setTimeout(r, 2000))

  // Log it so we can see them in the console
  console.log(fields)
  alert('Created new user!')
}
</script>

<!-- %partial%::html:: -->
<template>
  <h1>New User</h1>

  <!-- Here we add our new submit handler -->
  <FormKit type="form" @submit="createUser">
    <FormKit type="text" label="Name" />

    <FormKit type="email" label="Email address" />

    <FormKit type="number" label="Age" />

    <FormKit
      type="select"
      label="Gender"
      :options="['Male', 'Female', 'Other']"
    />

    <FormKit type="text" label="Other gender" />
  </FormKit>
</template>
<!-- %partial%::html:: -->
