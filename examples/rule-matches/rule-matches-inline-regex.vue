<template>
<!-- %partial%::html:: -->
<FormKit
  type="password"
  label="Password"
  validation="matches:/[0-9]/"
  help="Please enter your password."
  :validation-messages="{ matches: 'Passwords must include a number.' }"
/>
<!-- %partial%::html:: -->
</template>
