<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="email"
    label="Email address"
    validation="length:5|*email"
    validation-visibility="live"
    help="Enter less than 5 characters to see both rules appear."
  />
  <!-- By default, the "email" validation rule would
        not run if the "length" rule was failing. -->
  <!-- %partial%::html:: -->
</template>
