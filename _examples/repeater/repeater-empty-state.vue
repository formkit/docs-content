<template>
  <FormKit #default="{ value }" type="form" :actions="false">
    <FormKit
      id="repeater"
      name="users"
      type="repeater"
      label="Users"
      min="0"
    >
      <template #empty>
        <h2 class="text-xl font-bold mb-4">Please add a user to get started.</h2>
      </template>
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
