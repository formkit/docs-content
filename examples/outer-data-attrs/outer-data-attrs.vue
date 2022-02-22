<template>
  <FormKit
    type="text"
    label="Email address"
    help="Enter a full email address"
    validation="required|email"
    validation-visibility="live"
  />
</template>

<style>
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: '✅';
  display: block;
  padding: 0.5em;
}
</style>
