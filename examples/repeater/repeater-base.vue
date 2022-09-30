<template>
  <FormKit
    #default="{ value }"
    type="form"
    :actions="false"
  >
<!-- %partial%::html:: -->
<FormKit
  id="repeater"
  name="users"
  type="repeater"
  label="Users"
>
  <FormKit
    type="email"
    label="Email"
    name="email"
    validation="required|email"
    placeholder="Add email address..."
  />
</FormKit>
<!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>