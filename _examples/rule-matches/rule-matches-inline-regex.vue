<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="password"
    label="Password"
    help="Please enter your password."
    validation="matches:/[0-9]/"
    validation-visibility="live"
    :validation-messages="{ matches: 'Passwords must include a number.' }"
    value="password"
  />
  <!-- %partial%::html:: -->
</template>
