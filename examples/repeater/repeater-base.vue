<template>
  <FormKit
    #default="{ value }"
    type="form"
    :actions="false"
  >
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
      />
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>