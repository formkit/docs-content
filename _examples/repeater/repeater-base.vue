<template>
  <FormKit
    #default="{ value }"
    type="form"
    :actions="false"
    :value="{ users: [{ email: 'justin@formkit.com ' }] }"
  >
    <!-- %partial%::html:: -->
    <FormKit
      id="repeater"
      name="users"
      type="repeater"
      label="Users"
      #default="{ index }"
    >
      <FormKit
        type="email"
        :label="`${index + 1}. Email`"
        name="email"
        validation="required|email"
        placeholder="Add email address..."
      />
    </FormKit>
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
