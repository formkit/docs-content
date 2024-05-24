<template>
  <!-- %partial%::html:: -->
  <FormKit
    outer-class="foo-bar"
    label-class="$reset only-my-class"
    :help-class="{
      'add-this-class': true,
      'dont-add-this': false,
    }"
    type="email"
    label="Email address"
    placeholder="your-email@example.com"
    help="Please enter you email address."
    validation='required'
  />
  <!-- %partial%::html:: -->
</template>
