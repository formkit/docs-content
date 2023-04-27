<template>
<!-- %partial%::html:: -->
<!-- Between 2 lengths -->
<FormKit
  type="password"
  label="Password"
  validation="length:5,16"
  help="Please enter a password between 5 and 16 characters long."
  validation-visibility="live"
/>
<!-- Greater than a minimum -->
<FormKit
  type="text"
  label="Name"
  validation="length:2"
  help="Name must be at least 2 characters long."
/>
<!-- Less than a maximum -->
<FormKit
  type="text"
  label="Username"
  validation="length:0,10"
  help="Username cannot be more than 10 characters long."
/>
<!-- %partial%::html:: -->
</template>
