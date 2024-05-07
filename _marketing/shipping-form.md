```html
<template>
  <FormKit type="form" @submit="handleSubmit">
    <h1>Shipping Information</h1>
    <FormKit
      type="text"
      name="full_name"
      label="Full Name"
      validation="required"
      help="Please enter your first and last name"
    />
    <AddressInputGroup />
  </FormKit>
</template>
```
