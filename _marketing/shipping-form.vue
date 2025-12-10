<template>
  <!-- %partial% -->
  <FormKit type="form">
    <h1>Shipping Information</h1>
    <FormKit
      type="text"
      name="full_name"
      label="Full Name"
      prefix-icon="avatar"
      validation="required"
      help="Please enter your first and last name"
    />
    <!-- 👀 No bindings -->
    <AddressInputGroup />
  </FormKit>
  <!-- %partial% -->
</template>
