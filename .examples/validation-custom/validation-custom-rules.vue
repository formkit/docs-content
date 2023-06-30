<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    validation="required|foobar"
    :validation-rules="{
      foobar: ({ value }) => ['foo', 'bar'].includes(value)
    }"
    :validation-messages="{
      foobar: 'The value must be foo or bar'
    }"
  />
  <!-- %partial%::html:: -->
</template>
