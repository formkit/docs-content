<template>
  <FormKit
    type="text"
    label="Email address"
    help="Enter a full email address"
    validation="required|email"
    validation-visibility="live"
  />
</template>

<style scoped>
.formkit-outer[data-invalid] :deep(.formkit-inner) {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

.formkit-outer[data-complete] :deep(.formkit-inner) {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
.formkit-outer[data-complete] :deep(.formkit-inner::after) {
  content: '✅';
  display: block;
  padding: 0.5em;
}
</style>
