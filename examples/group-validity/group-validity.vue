<template>
<!-- %partial%::html:: -->
<h2>Register</h2>
<FormKit
  name="account"
  type="group"
>
  <template #default="{ state: { valid } }">
    <div
      v-if="!valid"
      class="not-valid"
    >
      Your account details are not complete!
    </div>
    <div
      v-else
      class="valid"
    >
      It all looks good 👍
    </div>
    <FormKit
      label="Username"
      name="username"
      help="Select a new username"
      validation="required|alpha"
    />
    <FormKit
      label="Password"
      name="password"
      validation="required"
    />
    <FormKit
      label="Password"
      name="password_confirm"
      help="Confirm your password"
      validation="required|confirm"
    />
  </template>
</FormKit>
<!-- %partial%::html:: -->
</template>

<style>
.valid,
.not-valid {
  padding: .5em;
  color: white;
  margin: 1em 0;
  border-radius: 5px;
}
.not-valid {
  background-color: darkred;
}
.valid {
  background-color: green;
}
</style>
