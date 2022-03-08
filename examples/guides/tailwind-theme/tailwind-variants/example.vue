<template>
  <FormKit
    label="I have a validation error"
    type="text"
    help="I must equal 'foo'"
    value="bar"
    validation="required|is:foo"
    validation-visibility="live"
    validation-label="Input"
  />
  <FormKit
    label="I am a disabled input"
    type="text"
    value="I'm so faded"
    help="I cannot be interacted with"
    :disabled="true"
  />
</template>
